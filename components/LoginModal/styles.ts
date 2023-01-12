import { colors } from './../../assets/palette';
import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${colors.blues['300']};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: 500;
    .ant-btn{
        color:white;
        margin-top: 50px;
    }
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Header = styled.h1`
    color:white;
    font-size: 18px;
    font-weight: 100;
`;