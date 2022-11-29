import React from "react";
import Length from "./components/Length/Length";
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PxRem from "./components/Pixel/PxRem";
import Pixels from "./components/Pixel/Pixels";


function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Length/>}></Route>
        <Route  path="/pixels" element={<Pixels/>}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
