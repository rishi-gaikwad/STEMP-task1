import React from "react";
import Form from "./Component/Form";
import TableData from "./Component/TableData";
import { Center, Container, Heading, Stack, useColorModeValue } from "@chakra-ui/react";


const App = () => {
  return (
    <>
      <Container spacing={8} mx={'auto'} maxW={'5xl'} py={12} px={6} mt={'10'}>
        <Stack bg={useColorModeValue('gray.50', 'gray.800')}>
          <Center h='100px' color='white'>
            <Heading alignItems={'center'}>Task</Heading>
          </Center>
          <Form />
        </Stack>
      </Container >
      <TableData />
    </>
  );
}

export default App;

