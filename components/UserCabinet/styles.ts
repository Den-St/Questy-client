import { colors } from './../../assets/palette';
import styled from "styled-components";
import Link from 'next/link';

export const Container = styled.div`
    padding: 25px 70px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;

export const DirectoriesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 80px 80px;
    gap: 10px;
    position: sticky;
`;

export const Directory = styled(Link)<{$isActive:boolean}>`
    height: 30px;
    font-size: 14px;
    color:${({$isActive}) => $isActive ? `white` : '#a7a7a7'};
    transition:0.1s;
    &:hover{
        ${({$isActive}) => !$isActive && `color:black`};
    }
    background-color: ${({$isActive}) => $isActive ? colors.blues['-100'] : `transparent`};
    display: grid;
    font-weight: 100;
    border-radius: 15px;
    place-items: center;
`;