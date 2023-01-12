import { colors } from './../../../assets/palette';
import styled from 'styled-components';
export const Container = styled.div`
    width: 40%;
    height: 30px;
    border-radius: 3px;
    background-color: white;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px;
`;

export const Magnifier = styled.div`
    width: 30px;
    height: 30px;
    font-size: 25px;
`;

export const SearchInput = styled.input`
    width: 80%;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 100;
    color: black;
    
    ::placeholder{
        color: ${colors.textGray};
    }
`;

