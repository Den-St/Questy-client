import { colors } from './../../../assets/palette';
import styled from "styled-components";
import Link from 'next/link';

export const Container = styled.div`
    width: 100%;
    display: grid;
    gap: 15px;
    grid-template-columns: 150px 500px;
    position: relative;
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 5px;
    object-fit: contain;
`;

export const TextInfo = styled.div`
    display: grid;
    box-sizing: border-box;
    padding-top: 20px;
`;

export const Name = styled.span`
    font-size: 18px;
    font-weight: 100;
`;

export const BottomInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const BottomInfoItem = styled.span`
    font-size: 14px;
    font-weight: 100;
    gap: 5px;
    display: grid;
    grid-template-columns: 15px 1fr;
`;

export const EditButton = styled(Link)<{$isActive:boolean}>`
    width: 100px;
    height: 40px;
    border:  2px solid ;
    border-color:${({$isActive}) => $isActive ? `${colors.blues['-100']}` : '#a7a7a7' };
    position: absolute;
    top:0;
    right: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition:0.1s;
    &:hover{
        border-color:${colors.blues['-100']};
        box-shadow: 0px 0px 1px 1px ${colors.blues['-100']};
    }
`;