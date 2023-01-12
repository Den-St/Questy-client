import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 50px;
    width: 100%;
`;

export const RightSide = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width:45%;
`;

export const ItemHeader = styled.span`
    display: flex;
    padding-left: 5px;
    margin-bottom: 5px;
    justify-content: space-between;
    .select{
        width: 220px;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.span`
    font-size: 18px;
    font-weight: 400;
`;

export const ViewAll = styled(Link)`
    font-size: 14px;
    font-size: 100;
    color: #6a737c;
`;