import { colors } from './../../assets/palette';
import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
`;

export const SignContainer = styled.div`
    width: 50%;
    background-color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.div`
    background-color: ${colors.blues['300']};
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 200;
    color: white;
`;

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;