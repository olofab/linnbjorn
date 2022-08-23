import styled from "styled-components";
import {ReactComponent as Mann} from "../icons/mann.svg";
import {ReactComponent as Dame} from "../icons/dame2.svg";
import {ReactComponent as Person} from "../icons/person.svg";
import {ReactComponent as Letter} from "../icons/rsvp.svg";
import {ReactComponent as Help} from "../icons/faq.svg";
import {ReactComponent as Wedding} from "../icons/wedding.svg";
import {ReactComponent as Party} from "../icons/party.svg";
import {ReactComponent as Rings} from "../icons/rings2.svg";
import {ReactComponent as Scroll} from "../icons/arrow.svg";
import {ReactComponent as Suitcase} from "../icons/suitcase.svg";
import {ReactComponent as Train} from "../icons/train.svg";


import theme from '../styling/styles';


export const MannIcon = styled(Mann)`
    margin: auto;
    height: 100px;
    width: 100px;
`;
export const DameIcon = styled(Dame)`
    margin: auto;
    height: 100px;
    width: 100px;
`;
export const PersonIcon = styled(Person)`
    margin: auto;
    height: 60px;
    width: 60px;
`;


export const SuitcaseIcon = styled(Suitcase)`
    margin: 0 auto;
    height: 80px;
    width: 80px;
    
     @media(max-width: 800px) {
         height: 80px;
        width: 80px;
    }
`;

export const TrainIcon = styled(Train)`
    margin: 0 auto;
    height: 80px;
    width: 80px;
    
     @media(max-width: 800px) {
         height: 80px;
        width: 80px;
    }
`;

export const ScrollIcon = styled(Scroll)`
    margin: auto;
    height: 60px;
    width: 60px;
    transform: rotate(90deg);
     & path {
    fill: ${theme.main.colors.background.green};
  }
`;

export const LetterIcon = styled(Letter)`
    height: 60px;
    width: 60px;
        margin: auto;

`;

export const FAQIcon = styled(Help)`
    height: 60px;
    width: 60px;
    margin: auto;
`;

export const ChurchIcon = styled(Wedding)`
    height: 60px;
    width: 60px;
    
      & path {
    fill: ${theme.main.colors.background.text};
  }
`;

export const PartyIcon = styled(Party)`
    height: 60px;
    width: 60px;
    
      & path {
    fill: ${theme.main.colors.background.text};
  }
`;

export const RingIcon = styled(Rings)`
    height: 60px;
    width: 60px;
    
      & path {
    fill: ${theme.main.colors.background.text};
  }
`;