import React, {ReactComponentElement} from 'react';
import '../App.css';
import styled from 'styled-components';
import styles from "../styling/styles";
import { infomation } from "../content/infomation";
import {PartyIcon, RingIcon } from '../styling/icons';
import {Adress, Underline } from '../components/basic-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';



const StyledTop = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
       
   
`;
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    
`;

const Wrapper = styled.div`
    display:flex;
    background-color: #f3f2f1;
        font-family: 'Quicksand', sans-serif;

    padding: 4rem;
    min-height: 70vh;
        display: flex;
    justify-content: center;
    align-items: center;
`;

const RowOne = styled.div`
    padding-bottom: 2rem;
    max-width: 50%;
    
     @media(max-width: 800px) {
        max-width: 100%;
    }
    
`;

const RowTwo = styled.div`
       display: flex;
       justify-content: flex-end;
       max-width: 50%;
 @media(max-width: 800px) {
        max-width: 100%;
    }
`;

const Title = styled.div`
    text-align: left;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    letter-spacing: .2em;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-top: 1rem;
    color: ${styles.main.colors.background.green};
`;

const Description = styled.p`
    text-align: left;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    color: ${styles.main.colors.background.text};
    margin-top: 1rem;

`;



interface Props {
    title: string;
    time?: string;
    adress?: string;
    description: string;
    icon: ReactComponentElement<any>;
}

export const Dato = styled.p`
   font-size: 1.2rem;
   font-weight: bold;
   letter-spacing: .1em;
   text-align: left;


`;


const InfomationComponent = (props : Props) => {
    return (
        <StyledSection>
            <Dato>{props.title}</Dato>
            <Underline/>
            <Title>Lørdag 20. august 2023</Title>
            <Description>{props.time}</Description>
            <Adress>{props.adress}</Adress>
            <Description>{props.description}</Description>
        </StyledSection>
    )
}



export default function Infomation() {
    const ourday = infomation.theday;
    const party = infomation.party;

    return (
        <Wrapper>
            <StyledTop>
                <AnimationOnScroll animateIn="animate__fadeInRight" initiallyVisible>
                <RowOne>
                    <InfomationComponent title={"Dato"} time={ourday.date} description={ourday.description} icon={<RingIcon/>}/>
                </RowOne>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft" initiallyVisible>
                <RowTwo>
                    <InfomationComponent title={"Middag"} time={party.date} adress={party.adress} description={party.description} icon={<PartyIcon/>}/>
                </RowTwo>
               </AnimationOnScroll>
            </StyledTop>
        </Wrapper>

    );
}

