import { colors } from './../../assets/palette';
import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 900px;
    padding-top: 30px;
    gap: 20px;
    ${Media.down.m}{
        width: 90%;
    }
`;

export const Header = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    ${Media.down.m}{
        padding: 10px 5;
    }
`;

export const Name = styled.h1`
    font-size: 20px;
    margin: 0;
    ${Media.down.m}{
        font-size: 18px;
        padding: 10px 5;
    }
`;

export const JoinToggle = styled.button<{$isJoined:boolean}>`
    width: 120px;
    height: 50px;
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${({$isJoined}) => $isJoined ? `#d50700` : `${colors.blues['-100']}` };
    color:white;
    font-size: 16px;
    ${Media.down.m}{
        width: 70px;
        height: 30px;
    }
`;

export const UsersSection = styled.section`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const SectionName = styled.h2`
    margin:0;
`;

export const Users = styled.div`
    display: flex;
    gap: 3px;

    
`;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
`;

export const User = styled.div`
    display: flex;
    gap: 5px;
`;

export const UserName = styled.h3`
    margin: 0;
    font-size: 15px;
`;