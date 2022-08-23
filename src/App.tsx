import React from 'react';
import './App.css';
import Header from "./pages/Header";
import styled from "styled-components";
import Infomation from "./pages/Infomation";
import Footer from "./pages/Footer";
import Overnatting from "./pages/Overnatting";
import RSVP from "./pages/RSVP";
import styles from "./styling/styles";
import FAQ from "./pages/FAQ";
import TheWedding from "./pages/TheWedding";
import {ChakraProvider} from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import Schedule from "./pages/Schedule";
import "animate.css/animate.min.css";

const MainImage = styled.div`
    background-color: ${styles.main.colors.background.linen80};
    text-align: center;
font-family: 'Dancing Script', cursive;
font-size: 3rem;
align-items: center;
display: flex;
justify-content: center;
 `;

function FerdigNettside(){
    return (
        <ChakraProvider>
            <MainPage/>
            <Infomation/>
            <Overnatting/>
            <RSVP/>
            <Schedule/>
            <FAQ/>
        </ChakraProvider>
    )
}

function App() {
  return (
      <ChakraProvider>
        <FerdigNettside/>
      </ChakraProvider>

          );
}

export default App;
