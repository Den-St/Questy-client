import { colors } from './../../assets/palette';
import styled from "styled-components";
import { Media } from '../../assets/breakpoints';

export const Overlay = styled.div`
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 60px;
    right: 150px;
    width: 270px;
    height: 400px;
    border-radius: 10px;
    ${Media.down.m}{
        left: 50%;
        transform: translate(-50%);
    }
`;

export const Container = styled.div`
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    height: 400px;
    gap: 3px;
    border: 1px solid #243261;
    box-shadow: 1px 1px 7px 1px ${colors.blues['-100']};
    border-radius: 10px;
`;

export const Divider = styled.hr`
    border: 0.5px solid black;
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Dir = styled.button<{$active:boolean}>`
    width: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    box-sizing: border-box;
    height: 30px;
    font-size: 14px;
    font-weight: 100;
    background-color: ${({$active}) => $active && `#c3c3c35b`};
    transition:0.1s;
    &:hover{
        background-color:#9594942d;
    }
    .anticon {
        color:green;
    }
`;
