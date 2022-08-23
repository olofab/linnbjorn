import React from 'react';
import '../App.css';
import styled from 'styled-components';
import styles from "../styling/styles";
import {TitleWithUnderline} from "../components/Title";
import {TextField, TextFieldSchedule, Underline} from '../components/basic-components';
import { program } from "../content/program";


const StyledArticle = styled.article`
    border-top: 1px solid ${styles.main.colors.background.green};

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    padding: 2rem;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    text-align: center;
            background-color: #f3f2f1;

    min-height: 60vh;
    
        @media(max-width: 800px) {
           padding: 3rem;

    }

`;

const DayLabels = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
     @media(max-width: 800px) {
        flex-direction: column;
        width: 100%
    }
`;

const Days = styled.li`
    font-size: 1.5rem;    
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    margin: 1rem;
    color: ${styles.main.colors.background.green};
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: center;
`;


export default function Schedule() {
    return (
        <StyledArticle>
            <TitleWithUnderline  title={"Program"}/>
            <DayLabels>
                <Day>
                <Days>
                    {program.friday.day}
                </Days>
                    <Underline/>
                <TextFieldSchedule>
                    {program.friday.description}
                </TextFieldSchedule>

                </Day>
                <Day>
                <Days>
                    {program.saturday.day}
                </Days>
                    <Underline/>
                <TextFieldSchedule>
                    {program.saturday.description}
                </TextFieldSchedule>
            </Day>
                <Day>
            <Days>
                {program.sunday.day}
            </Days>
                    <Underline/>
            <TextFieldSchedule>
                {program.sunday.description}
            </TextFieldSchedule>

        </Day>
            </DayLabels>
        </StyledArticle>

    );
}