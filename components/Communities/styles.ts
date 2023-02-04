import Link from 'next/link';
import styled from "styled-components";
import { Media } from "../../assets/breakpoints";
import { colors } from '../../assets/palette';

export const CommunitiesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 0.5px solid #646464;
    border-radius: 10px;
`;

export const CommunityContainer = styled.article`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    gap: 10px;
    ${Media.down.m}{
        padding: 5px 10px;
    }
`;

export const Name = styled(Link)`
    font-size: 18px;
    font-weight: 100;
`;

export const HashTags = styled.div`
    display: flex;
    gap: 3px;
`;


export const StatContainer = styled.div`
    display: flex;
    gap: 3px;
    align-items: center;
`;

export const StatName = styled.h3`
    margin: 0;
    font-size: 16px;
`;

export const StatValue = styled.span`
    font-size: 14px;
`;

export const CreateCommunity = styled(Link)`
    font-size: 16px;
    font-weight: 100;
    color: ${colors.blues['-100']};
    &:hover{
        text-decoration: underline;
    }
`;