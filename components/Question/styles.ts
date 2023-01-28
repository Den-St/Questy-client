import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    border: 0.5px solid #e3e2e8;
    padding: 20px;
    gap: 10px;
    ${Media.down.m}{
        padding: 5px;
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 200;
    margin: 0;
    ${Media.down.m}{
        font-size: 18px;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #e3e2e8;
`;

export const BodyContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #e3e2e8;
    padding-bottom: 10px;
`;

export const RatingControllerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RatingButton = styled.button<{$active:boolean}>`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 40px;
    color: ${({$active}) => $active ? `orange` : `#7a7979`};
    ${Media.down.m}{
        font-size: 30px;
    }
`;

export const SubscribeButton = styled.button<{$isSubscribed:boolean}>`
    background-color: transparent;
    border: none;
    outline: none;
    color:${({$isSubscribed}) => $isSubscribed ? `orange` : `gray`};
    font-size: 25px;
    ${Media.down.m}{
        font-size: 20px;
    }
`;

export const Rating = styled.span`
    font-size: 22px;
    font-weight: 200;
`;

export const Body = styled.div`
    margin-top: 20px;
    
    padding: 0 10px 20px 10px;
    color: #242629;
    width: 100%;
    & p{
        margin: 0;
        color: #242629;
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

export const Header = styled.span`
    font-size: 22px;
    font-weight: 200;
`;