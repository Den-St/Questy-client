import Link from 'next/link';
import styled from "styled-components";
import { Media } from '../../../../assets/breakpoints';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom:1px solid #e3e2e8;
    padding-bottom: 20px;
`;

export const RatingContainer = styled.div`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CorrectButton = styled.button<{$correct:boolean}>`
    font-size: 30px;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    color:${({$correct}) => $correct ? `green` : 'gray'};
`;

export const CreatorContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-left:60px ;
`;

export const Days = styled.span`
    font-size: 16px;
    font-weight: 100;
    color:#797979;
`;

export const User = styled.div`
    display: flex;
    gap: 5px;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

export const Name = styled.span`
    font-size: 16px;
    font-weight: 300;
`;

export const BodyContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const Body = styled.div`
    margin-top: 20px;
    
    padding: 0 10px 20px 10px;
    color: #242629;
    & p{
        margin: 0;
        color: #242629;
        word-break: break-all;
    }

    & h1{
        font-size: 18px;
        margin: 0;
        color: #242629;
    }

    & ol{
        margin: 0;
        color: #242629;
        padding-left: 20px;
    }
    ${Media.down.m}{
        margin-top: 10px;
        padding: 0 5px 10px 5px;
    }
`;