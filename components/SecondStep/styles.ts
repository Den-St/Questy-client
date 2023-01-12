import styled from "styled-components";

export const FormHorizontal = styled.div<{gap?:string}>`
    display: flex;
    gap: ${({gap}) => gap};
`;

export const FormVertical = styled.div<{gap?:string}>`
    display: flex;
    flex-direction: column;
    gap: ${({gap}) => gap};
`;