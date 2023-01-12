import { colors } from './../../../assets/palette';
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
`;


export const CreateButton = styled.button<{$disabled:boolean}>`
    width: 130px;
    height: 35px;
    background-color: ${colors.blues['-100']};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    color:white;
    font-size: 16px;
    font-weight: 200;
    cursor: ${({$disabled}) => !$disabled ? `pointer` : `not-allowed`};
    border-radius: 4px;
    &:hover{
        opacity: ${({$disabled}) => !$disabled && `0.9`};
    }
`;

export const TextEditorContainer = styled.div`
    position: relative;
    width: 100%;
    .ql-container{
        height: 150px;
        font-size: 16px;
    }
    .quill {
        width: 80%;
    }
`;

export const Cover = styled.div`
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #16151569;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const CoverTitle = styled.span`
    font-size: 18px;
    font-weight: 200;
`;

export const CoverButtons = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const Register = styled(Link)`
    font-size: 20px;
`;

export const Login = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
`;
