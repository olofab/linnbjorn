import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {TitleWithUnderline} from "../components/Title";
import { Button } from "@chakra-ui/button"
import {chakra} from "@chakra-ui/react";
import {TextField} from "../components/basic-components";
import background from '../images/145.jpg';
import styles from "../styling/styles";


const StyledArticle = styled.article`
    border-top: 1px solid ${styles.main.colors.background.green};

    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 1rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;

    background-image: url("https://www.kirkerholidays.com/media/image-cache/848c413a-7129-499f-8967-6ed50b523fe4/700-0--350-250/1479234293-norway_kirkerjpg.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    
    min-height: 80vh;

`;

const WhiteBox = styled.div`
    max-width: 48em;
    background-color: #fff;
    padding: 6em 2em;    
    margin: 3rem;
    height: 100%;
    border:3px ${styles.main.colors.background.green} solid;
    
     @media(max-width: 800px) {
        font-size: 1.2rem;
        max-width: 18em;
        
    }
`;

const StyledButton = chakra(Button, {
    baseStyle: {
        background: "#6a98bc",
        color: "white"
    },
})


export default function RSVP() {
    return (
        <StyledArticle>
            <WhiteBox>
                <TitleWithUnderline  title={"Påmelding"}/>

                <TextField>Den beste gaven du kan gi oss er at vi får feire vår dag med deg. For å gjøre helgen til den beste mulige trenger vi å vite om du kommer. </TextField>
                <TextField>Frist for påmelding er 1. januar 2000.</TextField>
                <StyledButton disabled>Klikk her for å registrere deg</StyledButton>
            </WhiteBox>

        </StyledArticle>

    );
}