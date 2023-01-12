import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    gap: 30px;
    .select{
        width: 220px;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 100;
    align-items: center;
`;

export const AnswersContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #d7d9dc;
    border-radius: 10px;
    width: 100%;
`;