import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: 1px solid #e3e6e8;
    display: grid;
    place-items: center;
    border-radius:5px ;
`;

export const Tag = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 17px 12px;
    align-items: center;
`;

export const Name = styled.span`
    padding: 5px;
    font-size: 14px;
    background-color: #d0e3f1;
    color:#2c5877;
    font-weight: 100;
    border-radius: 3px;
`;

export const Popularity = styled.div`
    display: flex;
    gap: 4px;
    font-size: 12px;
    font-weight: 100;
    color: #6a737c;
    align-items: center;
`;

export const PopularityNumber = styled.span`
    font-size: 18px;
    font-weight: 100;
    color: black;
`;

export const Divider = styled.hr`
    width:100%;
    border: 0.5px solid #e3e6e8;
    margin: 0;
`;

export const NoTags = styled.div`
    width: 100%;
    padding: 17px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 100;
    color:#6a737c;
    gap:5px;
`;