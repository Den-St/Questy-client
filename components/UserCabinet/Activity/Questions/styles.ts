import Link from "next/link";
import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";
import { colors } from "../../../../assets/palette";

export const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d7d9dc;
    border-radius: 10px;
    width: 100%;
`;

export const NoQuestions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 100;
    gap:5px;
    height: 130px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    gap: 30px;
    .select{
        width: 220px;
    }
`;


export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`;

export const QuestionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    box-sizing: border-box;
`;

export const StatsContainer = styled.div`
    display: flex;
    height: 25px;
    align-items:center;
    gap: 5px;
    margin-bottom: 7px;
`;

export const RatingContainer = styled.div`
    color:#0c0d0e;
    font-size:12px;
    font-weight: 100;
    display: flex;
    align-items:center;

    gap:3px;
`;

export const RatingNumber = styled.span`
    font-size: 15px;
    color:black;
`;

export const AnswersContainer = styled.div<{$haveCorrectAnswer:boolean}>`
    padding: 3px;
    display: flex;
    align-items:center;
    border-radius: 3px;
    gap: 3px;
    font-size: 14px;
    color:${({$haveCorrectAnswer}) => $haveCorrectAnswer ? `white` : 'black'};
    background-color:${({$haveCorrectAnswer}) => $haveCorrectAnswer ? `${colors.blues["-100"]}` : 'transparent'};
    border:${({$haveCorrectAnswer}) => $haveCorrectAnswer ? 'none' : '0.5px solid #bdbcbc'};
`;

export const ViewsContainer = styled.div`
    display: flex;
    align-items:center;

    gap:3px;
    color:#0c0d0e;
    font-size:12px;
    font-weight: 100;
`;

export const ViewsNumber = styled.span`
    color: black;
    font-size: 15px;
`;

export const Title = styled(Link)`
    font-size: 18px;
    color: ${colors.blues["-100"]};
    &:hover{
        color: ${colors.blues["-50"]};
    }
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: green;
    margin-bottom: 7px;
    ${Media.down.m}{
    }
`;

export const HashTagsContainer = styled.div`
    display: flex;
    gap:4px;
`;

export const HashTag = styled(Link)`
    padding: 5px;
    color:#39739d;
    background-color: #e1ecf4;
    transition: 0.1s;
    border-radius:4px ;
    &:hover{
        color:#0094ff;
    }
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
`;

export const Date = styled.span`
    font-size: 14px;
    color:black;
`;