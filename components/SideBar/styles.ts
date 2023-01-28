import { colors } from './../../assets/palette';
import Link from 'next/link';
import styled from 'styled-components';
import { Media } from '../../assets/breakpoints';

export const Container = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    padding-top: 30px;
    border-right: 1px solid #a7a7a7;
    gap: 5px;
    position: fixed;
    left: 0;
    top: 50px;
    min-height: calc(100vh - 50px);
    background-color: ${colors.blues['300']};
    color: white;
`;

export const Route = styled(Link)<{$chosen:boolean}>`
    text-decoration: none;
    font-size: 18px;
    font-weight: 100;
    height: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 5px;
    border-right: 5px solid transparent;
    transition: 0.1s;
    gap: 3px;
    &:hover{
        border-right: 5px solid white;
    }
    border-right: ${({$chosen}) => $chosen ? `5px solid white;` : `5px solid transparent`};
    ${Media.down.m}{
        .anticon{
            font-size:30px;
        }
    }
`;

export const RouterName = styled.h3`
    font-size: 18px;
    font-weight: 100;
    margin: 0;
    ${Media.down.m}{
        display: none;
    }
`;

export const RouteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Divider = styled.hr`
    border: 0.5px solid white;
    width: 100%;
`;