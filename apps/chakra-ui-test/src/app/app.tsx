import React from 'react';
import { ChakraProvider,Heading, Input, Box } from "@chakra-ui/core"

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.@emotion/styled file.
   */
  return ( <ChakraProvider resetCSS>
      <header className="flex">
        <Heading >Welcome to chakra-ui-test!</Heading>
      </header>
      <Box as="main" m={4}>
        <Input />
       </Box>
  </ChakraProvider>
  );
};

export default App;
