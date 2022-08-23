import styled from "styled-components";
import styles from "../styling/styles";

export const TextField = styled.p`
   margin: 1rem;
`;
export const TextFieldSchedule = styled.p`
   margin: 1rem;
   text-align: left;
`;

export const Name = styled.p`
   font-size: 1.2rem;
   font-weight: bold;
   margin: 1rem;
   letter-spacing: .1em;

`;

export const Underline = styled.span`
    display: block;
    width: 60px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${styles.main.colors.background.text};
   
`;

export const UnderlineGold = styled.span`
    display: block;
    width: 60px;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: ${styles.main.colors.background.green};
   
`;

export const RowCenter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   
    @media(max-width: 800px) {
       flex-direction: column;
    }
`;

export const ColumnCenter = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 50%;
   
    @media(max-width: 800px) {
       flex-direction: column;
          max-width: 100%;

    }
`;

export const Adress = styled.p`
   margin-bottom: 1rem;
`;