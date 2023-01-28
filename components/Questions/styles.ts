import { colors } from './../../assets/palette';
import styled from "styled-components";
import { Media } from '../../assets/breakpoints';

export const PickedHashTags = styled.div`
    
`;

export const QuestionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 0.5px solid #646464;
    border-radius: 10px;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
`;

export const StatsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export const AnswersStatItem = styled.div<{$haveCorrect:boolean}>`
    color: ${({$haveCorrect}) => $haveCorrect ? `white` : `black`};
    background-color: ${({$haveCorrect}) => $haveCorrect  && `${colors.blues['-100']}`};
    border-radius:3px;
    padding:2px;
    display:flex;
    gap:3px;
    align-items:center;
`;

export const StatValue = styled.span`
    font-size: 16px;
    font-weight: 100;
`;

export const StatName = styled.span`
    font-size: 12px;
    font-weight: 200;
`;

export const DetailedFiltersContainer = styled.div`
    width: 70%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    border-radius: 5px;
    gap: 20px;
    border: 1px solid #a7a7a7;
    background-color: #d6d6f9;
    ${Media.down.m}{
        width: 90%;
    }
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .hashTagsSelect{
        width: 200px;
    }
`;

export const FilterHeader = styled.span`
    color:black;
    font-weight: 200;
`;