import { colors } from './../../assets/palette';
import styled from "styled-components";
import Link from 'next/link';
import { Media } from '../../assets/breakpoints';

export const Container = styled.div`
    width: 80%;
    height: calc(100vh-50px);
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 30px;
    .select{
        width: 150px;
    }
`;

export const Header = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: 100;
`;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hashTagsSelect{
        width: 300px;
    }
    ${Media.down.m}{
        flex-direction: column;
        align-items: flex-start;
        .hashTagsSelect{
        }
    }
`;

export const DetailedFiltersButton = styled.button<{$isActive:boolean}>`
    width: 100px;
    height: 30px;
    margin-left: 10px;
    background-color: #e1ecf4;
    border: 0.5px solid #7da9c8;
    border-radius: 3px;
    font-size: 12px;
    color: #6790ad;
    outline: none;
    font-weight: 100;
    background-color: ${({$isActive}) => $isActive ? `#b3d3ea` : `#e1ecf4`};
    transition:0.15s;
    :active{
        box-shadow:0px 0px 2px 4px #08436e5e;
    }
`;

export const UsersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 10px;
`;

export const UserContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 250px;
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 175px;
`;

export const Name = styled(Link)`
    font-size: 17px;
    color: ${colors.blues['-100']};
`;

export const Location = styled.span`
    font-size: 12px;
    color:#a7a7a7;
`;

export const Rating = styled.span`
    font-size: 12px;
    color: #595858;
`;

export const HashTags = styled.div`
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
    align-items: center;
`;


export const HashTag = styled(Link)`
    font-size: 12px;
    color: ${colors.blues['-100']};
`;


export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 3px;
    
`;
export const SearchButton = styled.button<{$disabled:boolean}>`
    opacity: ${({$disabled}) => $disabled ? `0.6` : `1`};
    transition: 0.15s all;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 4px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.blues['-100']};
    border-radius: 4px;
    height: 30px;
    box-sizing: border-box;
    margin-left: 6px;
    cursor: pointer;
    pointer-events: ${({$disabled}) => $disabled ? `none` : `cursor`};
    
    &:hover {
        ${({$disabled}) => !$disabled && `
            background-color: ${colors.blues['-50']};
            .anticon{
                color: white;
            }
            
        `};
    }
    .anticon{
        font-size:20px;
        color: ${({$disabled}) => $disabled ? `black` : `white`};
    }
`;

export const SearchInput = styled.input`
    font-size: 15px;
    font-weight: 100;
    border: none;
    outline: none;
    height: 30px;
    gap: 5px;
    border: 1px solid black;
    padding: 0 5px;
`;