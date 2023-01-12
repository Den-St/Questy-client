import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 15px;
    width: 85%;
`;

export const LeftSide = styled.div`
    width: 20%;
    display: grid;
    gap: 20px;
`;

export const LeftSideItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ItemHeader = styled.span`
    font-size: 18px;
    font-weight: 200;
`;

export const Stats = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    border: 1px solid #a7a7a7;
    box-sizing: border-box;
    padding: 7px;
    border-radius: 5px;
    gap: 15px;
`;

export const StatItem = styled.div`
    display:grid;
`;

export const StatItemName = styled.span`
    font-size: 14px;
    font-weight: 100;
    color: #828282;
`;

export const StatItemValue = styled.span`
    font-size: 18px;
    font-weight: 100;
`;

export const RightSide = styled.div`
    display: grid;
    gap: 15px;
`;

export const RightSideItem = styled.div`
    display: grid;
    gap: 10px;
`;
export const AboutMeContainer = styled.div`
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid #a7a7a7;
    border-radius: 5px;
    width: 100%;
`;

export const AboutMe = styled.p`
    font-size: 14px;
    font-weight: 300;
    display: grid;
    place-items: center;
`;

export const FavoriteHashTagsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 0.5px solid black;
`;

export const HashTagContainer = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

export const HashTagStats = styled.div`
    display: flex;
    gap: 5px;
    font-size: 14px;
    font-weight: 100;
    align-items: center;
`;

export const HashTagStatValue = styled.span`
    font-size: 18px;
`;

