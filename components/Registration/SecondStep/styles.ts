import { Media } from './../../../assets/breakpoints';
import styled from "styled-components";

export const FormHorizontal = styled.div<{gap?:string}>`
    display: flex;
    gap: ${({gap}) => gap};
    ${Media.down.m}{
        flex-direction: column;
        gap: 0;
    }
`;

export const FormVertical = styled.div<{gap?:string}>`
    display: flex;
    flex-direction: column;
    gap: ${({gap}) => gap};
`;