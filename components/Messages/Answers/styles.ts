import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
`;


export const Header = styled.h1`
    font-size: 18px;
    font-weight: 200;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    border-bottom:1px solid black ;
`;

export const AnswersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Date = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    font-size: 12px;
    color: #a7a7a7;
`;

export const AnswerContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 3px;
    border-bottom: 1px solid black;
    cursor: pointer;
    &:hover{
        background-color: #eff0f3;
    }
`;

export const Question = styled.div`
    display: flex;
    gap: 5px;
    font-size: 14px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const AnswerText = styled.div`
    max-height: 40px;
    overflow: hidden;
`;

export const NoAnswers = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: 200;
    height:200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;