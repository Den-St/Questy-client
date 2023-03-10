import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Center = styled.div<{$withSideBar:boolean}>`
    display: flex;
    margin-top: 50px;
    margin-left: ${({$withSideBar}) => $withSideBar && `15%`}
`;