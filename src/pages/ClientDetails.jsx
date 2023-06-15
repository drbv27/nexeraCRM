import React from 'react';
import { useParams } from 'react-router-dom';
import clients from '../data/clients';
import Layout from '../components/layout/Layout';
import { Box } from '@chakra-ui/react';

const ClientDetails = () => {
    console.log(clients);
  const { id } = useParams();
  const clientId = parseInt(id,10);
  console.log(id);
  const client = clients.find(client => client.id === clientId);
  console.log(client);

  if (!client) {
    return <div>No se encontró el cliente.</div>;
  }

  return (
    
    <Layout>
        <Box m={2}>
            <h2>Detalles del cliente</h2>
            <p>ID: {client.id}</p>
            <p>Nombre de la empresa: {client.companyName}</p>
            <p>Estado de la empresa: {client.companyStatus}</p>
        </Box>
    </Layout>
  );
};

export default ClientDetails;

