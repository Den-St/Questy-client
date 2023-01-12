import { colors } from './../../../assets/palette';
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const LeftSideHeader = styled.div`
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 5px;
`;

export const LeftSideItem = styled(Link)<{$isActive:boolean}>`
    font-size: 14px;
    font-weight: 100;
    padding: 5px;
    border-radius: 5px;
    transition: 0.1s;
    background-color: ${({$isActive}) => $isActive ? `${colors.blues['-100']}` : `transparent` };
    color: ${({$isActive}) => $isActive ? `white` : `#a7a7a7` };
    &:hover{
        color:${({$isActive}) => $isActive ? `white` : '#686767'};
    }
`;

export const RightSide = styled.div`
    width: 80%;
    display: grid;
    gap: 20px;
`;

export const RightSideHeader = styled.span`
    font-size: 22px;
    font-weight: 400;
`;