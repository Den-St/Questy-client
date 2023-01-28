import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    border-radius: 10px;
    box-sizing: border-box;
    width: 30%;
    ${Media.down.m}{
        width: 120%;
    }
    .aboutTextArea{
        width: 400px;
        ${Media.down.m}{
            width: 150px;
        }
    }
`;
