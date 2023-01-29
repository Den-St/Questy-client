import { colors } from './../../assets/palette';
import styled from 'styled-components';
import { Media } from '../../assets/breakpoints';
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    ${Media.down.m}{
        flex-direction: column;
    }
`;

export const SignContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.down.m}{
        flex-direction: column;
        width: 100%;
        min-height: calc(100vh - 70px);
    }
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
    ${Media.down.m}{
        font-size: 20px;
        width: 100%;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
`;

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    ${Media.down.m}{
        align-items: center;
        width: 100%;
    }
`;