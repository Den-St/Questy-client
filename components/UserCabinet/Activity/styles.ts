import { colors } from '../../../assets/palette';
import Link from "next/link";
import styled from "styled-components";
import { Media } from '../../../assets/breakpoints';

export const Container = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;
    ${Media.down.m}{
        gap:10px;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 15px;
    ${Media.down.m}{
        padding-left: 0;
        width: unset;
    }
`;

export const LeftSideItem = styled(Link)<{$isActive:boolean}>`
    font-size: 14px;
    font-weight: 100;
    padding: 5px;
    width: 100%;
    border-radius: 8px;
    background-color: ${({$isActive}) => $isActive ? colors.blues['-100'] : 'transparent'};
    color:${({$isActive}) => $isActive ? `white` : '#a7a7a7'};
    transition: 0.1s;
    &:hover{
        color:${({$isActive}) => $isActive ? `white` : '#686767'};
    }
    position:sticky;
    top:5px;
    
`;

