import { colors } from './../../assets/palette';
import Link from "next/link";
import styled from "styled-components";
import { Media } from '../../assets/breakpoints';

export const Container = styled.header`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.blues['300']};
    position: fixed;
    z-index: 100;
    ${Media.down.m}{
        padding: 0 10px;
    }
`;

export const Logo = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    color: white;
    ${Media.down.m}{
        font-size: 16px;
    }
`;

export const User = styled(Link)`
    width: 30px;
    height: 30px;
`;

export const AskQuestion = styled(Link)`
    width: 110px;
    height: 30px;
    border-radius:3px;
    background-color: ${colors.blues['-50']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 200;
    color:white;
    ${Media.down.m}{
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;

export const Messages = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color:white;
    font-size: 18px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #ffffff3c;
    }
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`;

export const SignMenu = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const Divider = styled.hr`
    border: 0.5px solid white;
    height: 25px;
`;

export const Registration = styled(Link)`
    font-size: 16px;
    color:white;
    font-weight: 100;
`;

export const Login = styled.span`
    font-size: 16px;
    color:white;
    font-weight: 100;
`;
