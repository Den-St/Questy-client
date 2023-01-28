import Link from 'next/link';
import styled from "styled-components";
import { Media } from '../../assets/breakpoints';

export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 25px;
    ${Media.down.m}{
        width: 85%;
    }
`;

export const Header = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: 100;
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    ${Media.down.m}{
        gap:10px;
        flex-direction: column;
    }
`;

export const SearchContainer = styled.div`
    width: 250px;
    display: flex;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    gap: 5px;
    align-items: center;
    box-sizing: border-box;
`;

export const HashTagsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

export const HashTagContainer = styled.div`
    width: 220px;
    padding: 5px;
    border: 1px solid #a7a7a7;
    display: flex;
    flex-direction: column;
    gap:5px;
`;

export const HashTagName = styled(Link)`
    padding: 5px;
    font-size: 14px;
    font-weight: 100;
    background-color: #e1ecf4;
    color:#39739e;
    border-radius: 3px;
`;

export const HashTagDescription = styled.p`
    font-size: 14px;
    font-weight: 100;
    margin: 0;
`;

export const HashTagTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Star = styled.button<{$isFavorite:boolean}>`
    font-size: 20px;
    color:${({$isFavorite}) => $isFavorite ? `orange` : 'gray'};
    background-color:transparent;
    outline:none;
    border:none;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const StatNumber = styled.span`
    font-size: 12px;
    font-weight: 100;
    color:#838c95;
`;

export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    ${Media.down.m}{
        width: 85%;
    }
`;

export const NoItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 100;
`;