import React, { useEffect, useState } from 'react';
import {
  FiSave, FiEdit, FiChevronRight, FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiSearch, FiPlus,
} from 'react-icons/fi';

import apiConfig from '../../services/api';

import {
  ModalBg, ModalContent, PaginationContainer, PaginationButton, CloseButton,
} from './styles';

import Button from '../../components/Button';
import Cards from '../../components/Cards';
import Input from '../../components/Input';
import Label from '../../components/Label';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Main from '../../components/Main';
import TextArea from '../../components/TextArea';
import Details from '../../components/Details';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Sold from '../../components/Sold';
import FormError from '../../components/FormError';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleDetailed, setVehicleDetailed] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [qtdPages, setQtdPages] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [formError, setFormError] = useState(false);

  const [vehicleId, setVehicleId] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleDescription, setVehicleDescription] = useState('');
  const [vehicleSold, setVehicleSold] = useState('');
  const [search, setSearch] = useState('');

  /**
   * get all vehicles, with possibility to filter by vehicle name and page number
   *
   */
  function getVehicles() {
    apiConfig.get(`/vehicles?page=${currentPage}&vehicle=${search}`).then((response) => {
      setVehicles(response.data.vehicles);
      setQtdPages(response.data.qtdPages);
    }).catch((err) => {
      console.log(err.response.data);
    });
  }

  useEffect(() => {
    getVehicles();
  }, [currentPage]);

  /**
   * get vehicle data from array and save on states to show in inputs inside modal
   *
   */
  function handleEditVehicle() {
    setVehicleId(vehicles[vehicleDetailed]?.id);
    setVehicleName(vehicles[vehicleDetailed]?.vehicle);
    setVehicleBrand(vehicles[vehicleDetailed]?.brand);
    setVehicleYear(vehicles[vehicleDetailed]?.year);
    setVehicleDescription(vehicles[vehicleDetailed]?.description);
    setVehicleSold(vehicles[vehicleDetailed]?.sold);
  }

  /**
   * clean all the states referring to vehicle
   *
   */
  function cleanVehicleStates() {
    setVehicleId('');
    setVehicleName('');
    setVehicleBrand('');
    setVehicleYear('');
    setVehicleDescription('');
    setVehicleSold('');
  }

  /**
   * create/update vehicle
   *
   */
  async function submitVehicle() {
    setFormError(false);

    const data = {
      vehicle: vehicleName,
      brand: vehicleBrand,
      year: vehicleYear,
      description: vehicleDescription,
    };

    try {
      if (vehicleId) await apiConfig.put(`/vehicles/${vehicleId}`, data);
      else await apiConfig.post('/vehicles', data);

      setModalVisibility(false);
      cleanVehicleStates();
      getVehicles();
    } catch (err) {
      console.log(err.response.data);
      setFormError(true);
    }
  }

  return (
    <>
      <Header />

      <Search>
        <Input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar veículo por nome" />

        <Button type="button" onClick={() => getVehicles()}>
          <FiSearch />
          Buscar
        </Button>

        <Button type="button" onClick={() => setModalVisibility(true)}>
          <FiPlus />
          Adicionar
        </Button>
      </Search>

      <Main>
        <Cards>
          <h2 style={{ marginBottom: '24px' }}>Lista de veículos</h2>

          <List>
            {vehicles.map((vehicle, index) => (
              <ListItem
                key={vehicle.id}
                vehicle={vehicle}
                index={index}
                setVehicleDetailed={setVehicleDetailed}
              />
            ))}
          </List>

          <PaginationContainer>
            <PaginationButton
              onClick={() => { setCurrentPage(1); setVehicleDetailed(0); }}
              disabled={currentPage === 1}
            >
              <FiChevronsLeft size={18} color="#383838" />
            </PaginationButton>

            <PaginationButton
              onClick={() => { setCurrentPage(currentPage - 1); setVehicleDetailed(0); }}
              disabled={currentPage === 1}
            >
              <FiChevronLeft size={18} color="#383838" />
            </PaginationButton>

            <PaginationButton
              onClick={() => { setCurrentPage(currentPage + 1); setVehicleDetailed(0); }}
              disabled={qtdPages === currentPage}
            >
              <FiChevronRight size={18} color="#383838" />
            </PaginationButton>

            <PaginationButton
              onClick={() => { setCurrentPage(qtdPages); setVehicleDetailed(0); }}
              disabled={qtdPages === currentPage}
            >
              <FiChevronsRight size={18} color="#383838" />
            </PaginationButton>
          </PaginationContainer>
        </Cards>

        <Cards>
          <Details vehicles={vehicles} vehicleDetailed={vehicleDetailed} />

          <Button type="button" onClick={() => { setModalVisibility(true); handleEditVehicle(); }}>
            <FiEdit />
            Editar
          </Button>
        </Cards>
      </Main>

      <ModalBg modalVisibility={modalVisibility}>
        <ModalContent>

          <h2 className="title">Detalhes</h2>

          <CloseButton
            onClick={() => { setModalVisibility(false); cleanVehicleStates(); }}
          >
            X Fechar
          </CloseButton>

          <Label htmlFor="vehicle">Veículo:</Label>
          <Input type="text" id="vehicle" value={vehicleName} onChange={(event) => setVehicleName(event.target.value)} placeholder="Veículo" />

          <Label htmlFor="brand">Marca:</Label>
          <Input type="text" id="brand" value={vehicleBrand} onChange={(event) => setVehicleBrand(event.target.value)} placeholder="Marca" />

          <Label htmlFor="year">Ano:</Label>
          <Input type="number" id="year" value={vehicleYear} onChange={(event) => setVehicleYear(event.target.value)} placeholder="Ano" />

          <Label htmlFor="description">Descrição:</Label>
          <TextArea id="description" rows="4" value={vehicleDescription} onChange={(event) => setVehicleDescription(event.target.value)} placeholder="Descrição" />

          { vehicleSold ? <Sold /> : '' }

          { formError && <FormError /> }

          <Button type="button" onClick={submitVehicle}>
            <FiSave />
            Salvar
          </Button>

        </ModalContent>
      </ModalBg>
    </>
  );
};

export default Home;
