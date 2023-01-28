import Link from "next/link";
import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";

export const HashTag = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled(Link)`
    padding: 5px;
    font-size: 14px;
    background-color: #d0e3f1;
    color:#2c5877;
    font-weight: 100;
    border-radius: 3px;
`;

export const Popularity = styled.div`
    display: flex;
    gap: 5px;
    font-size: 14px;
    font-weight: 100;
    align-items: flex-end;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const PopularityNumber = styled.span`
    font-size: 18px;
    ${Media.down.m}{
        font-size: 14px;
    }
`;