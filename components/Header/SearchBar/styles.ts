import { colors } from './../../../assets/palette';
import styled from 'styled-components';
import Link from 'next/link';
import { Media } from '../../../assets/breakpoints';
export const Container = styled.div`
    width: 40%;
    height: 30px;
    border-radius: 3px;
    background-color: white;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px;
    ${Media.down.m}{
        width: fit-content;
    }
`;

export const Magnifier = styled.button`
    width: 30px;
    height: 30px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    outline: none;
`;

export const SearchInput = styled.input<{$focused:boolean}>`
    width: 80%;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 100;
    color: black;
    
    ::placeholder{
        color: ${colors.gray[200]};
    }
    ${Media.down.m}{
        display: ${({$focused}) => $focused ? `block` : `none`};
        position:absolute;
        top:53px;
        left:50%;
        transform:translate(-50%);
        box-shadow: 1px 1px 2px 2px #535353;
        background-color:white;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    background-color: white;
    position: absolute;
    top: 53px;
    width: 500px;
    box-sizing: border-box;
    box-shadow: 1px 1px 2px 2px #535353;
    ${Media.down.m}{
        top: 85px;
        left:50%;
        transform:translate(-50%);
        width: 80%;
    }
`;

export const DataItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NoItems = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DataDir = styled.div`
    display: flex;
    width: 100%;
    font-size: 18px;
    height: 25px;
    align-items: center;
    font-weight: 200;
    border-bottom:0.5px solid #373737;
    padding-left: 5px;
    margin-bottom: 5px;
`;

export const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuestionContainer = styled(Link)`
    width: 100%;
    display: flex;
    height: 25px;
    align-items: center;
    padding: 0 5px;
    gap: 5px;
`;

export const QuestionTitle = styled.span`
    width: 70%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const QuestionRating = styled.span<{rating:number}>`
    color: ${({rating}) => rating > 0 && `${colors.blues['-100']}`};
    color: ${({rating}) => rating === 0 && `gray;`};
    color: ${({rating}) => rating < 0 && `red;`};
`;

export const AnswersNumber = styled.span`
    font-size: 14px;
`;

export const UsersContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`;

export const UserContainer = styled(Link)`
    display: flex;
    gap: 5px;
`;

export const UserText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 85px;
    bottom: 0;
    left: 0;
    right: 0;
`;


export const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
`;

export const UserName = styled.span`
    font-size: 16px;
`;

export const UserLocation = styled.span`
    color:gray;
    font-size: 12px;
`;

export const HashTagsContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`;

export const HashTagContainer = styled(Link)`
    display: flex;
    padding: 5px;
    flex-direction: column;
    gap: 5px;
    border: 0.5px solid #a7a7a7;
`;

export const HashTagName = styled.span`
    padding: 3px;
    background-color: #e1ecf4;
    color:#39739e;
    font-size: 16;
    border-radius: 3px;
    margin: 0;
`;

export const HashTagDescription = styled.p`
    margin: 0;
    font-size: 14px;
`;

export const QuestionNumber = styled.span`
    font-size: 14px;
`;