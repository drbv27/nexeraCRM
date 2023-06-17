import { useState } from 'react';
import { useParams } from 'react-router-dom';
import clients from '../data/clients';
import Layout from '../components/layout/Layout';
import { Box,Flex,Grid, GridItem,Tabs,TabList,Tab,TabPanel,TabPanels, Heading,FormControl,FormLabel,Input,Select,InputGroup, Button,Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react';

const ClientDetails = () => {
    console.log(clients);
  const { id } = useParams();
  const clientId = parseInt(id,10);
  console.log(id);
  const client = clients.find(client => client.id === clientId);
  console.log(client);

  const [companyName, setCompanyName] = useState(client.companyName);
  const [companyStatus, setCompanyStatus] = useState(client.companyStatus);
  const [companyAddress,setCompanyAddress] = useState(client.details.address) 
  const [companyCity,setCompanyCity] = useState(client.details.city) 
  const [companyState,setCompanyState] = useState(client.details.state) 
  const [companyZip,setCompanyZip] = useState(client.details.zipcode) 
  const [contacts, setContacts] = useState(client.details.contacts);

  if (!client) {
    return <div>No se encontró el cliente.</div>;
  }


  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value); 
  };
    const handleCompanyStatusChange = (event) => {
    setCompanyStatus(event.target.value);
  };
    const handleCompanyAddressChange = (event) => {
    setCompanyAddress(event.target.value);
  };
    const handleCompanyCityChange = (event) => {
    setCompanyCity(event.target.value);
  };
    const handleCompanyStateChange = (event) => {
    setCompanyState(event.target.value);
  };
    const handleCompanyZipChange = (event) => {
    setCompanyZip(event.target.value);
  };

  const handleContactChange = (index, field, value) => {
  setContacts(prevContacts => {
    const updatedContacts = [...prevContacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value
    };
    return updatedContacts;
  });
};

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    // Aquí puedes realizar la lógica para enviar el nuevo valor de companyName a la base de datos
    // Puedes utilizar una función o hacer una llamada a una API
    // Por ahora, simplemente mostraremos el valor en la consola
    console.log('Nuevo valor de Company Name:', companyName);
  };

  return (
    
    <Layout>
        <Flex h='100%'>
            <Box m={2} flex='5' bg='gray.50' align='center'>
                <Heading size='md'>Company Profile</Heading>
                    <form onSubmit={handleFormSubmit}>
                        <FormControl>
                            <FormLabel htmlFor='companyName'>Company Name</FormLabel>
                            <InputGroup>
                                <Input
                                type='text'
                                id='companyName'
                                value={companyName}
                                onChange={handleCompanyNameChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='companyStatus'>Company Status</FormLabel>
                            <Select
                                id='companyStatus'
                                value={companyStatus}
                                onChange={handleCompanyStatusChange}
                            >
                                <option value='pending'>Pending</option>
                                <option value='scheduled'>Scheduled</option>
                                <option value='processing'>Processing</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='companyAddress'>Address</FormLabel>
                            <InputGroup>
                                <Input
                                type='text'
                                id='companyAddress'
                                value={companyAddress}
                                onChange={handleCompanyAddressChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='companyCity'>City</FormLabel>
                            <InputGroup>
                                <Input
                                type='text'
                                id='companyCity'
                                value={companyCity}
                                onChange={handleCompanyCityChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='companyState'>State</FormLabel>
                            <InputGroup>
                                <Input
                                type='text'
                                id='companyState'
                                value={companyState}
                                onChange={handleCompanyStateChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='companyZip'>ZIP</FormLabel>
                            <InputGroup>
                                <Input
                                type='text'
                                id='companyZip'
                                value={companyZip}
                                onChange={handleCompanyZipChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormLabel htmlFor='none'>Contacts</FormLabel>
                        <Accordion allowToggle>
                        {contacts.map((contact, index) => (
                            <AccordionItem key={index}>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            {contact.name}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <FormControl>
                                        <FormLabel htmlFor={`name-${index}`}>Name</FormLabel>
                                        <Input
                                            id={`name-${index}`}
                                            value={contact.name}
                                            onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor={`email-${index}`}>Email</FormLabel>
                                        <Input
                                            id={`email-${index}`}
                                            value={contact.email}
                                            onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor={`phone-${index}`}>Phone</FormLabel>
                                        <Input
                                            id={`phone-${index}`}
                                            value={contact.phone}
                                            onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                                        />
                                        </FormControl>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                        </Accordion>


                        <Button type='submit'>Guardar</Button> 
                    </form>


            </Box>
            <Box m={2} flex='7' align='center'>
                <Heading size='md'>Chat</Heading>
            </Box>
            <Box m={2} flex='5'bg='gray.50' align='center'>
                <Heading size='md'>Activities</Heading>
                <Tabs>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    </Layout>
  );
};

export default ClientDetails;

