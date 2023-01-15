import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../../../../../assets/palette';

export const Container = styled.div`
    width: 100%;
    border: 1px solid #e3e6e8;
    display: grid;
    place-items: center;
    border-radius:5px ;
    max-width: 510px;
`;

export const Answer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 17px 12px;
    align-items: center;
    justify-content: space-between;
    max-width: 510px;
`;

export const Rating = styled.div<{$isCorrect:boolean}>`
    width: 40px;
    height: 28px;
    display: grid;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 14px;
    place-items: center;
    box-sizing: border-box;
    border: 0.5px solid #e3e6e8;
    background-color: ${({$isCorrect}) => $isCorrect ? `${colors.blues[-100]}` : `transparent`};
    color:${({$isCorrect}) => $isCorrect ? `white` : `black`};
`;

export const Title = styled(Link)`
    color:#0074cc;
    font-size: 16px;
    font-weight: 200;
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Text = styled(Link)`
    height: 28px;
    max-width:80%;
    overflow: hidden;
    & p{
        margin: 0;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    max-width: 80%;
`;

export const Date = styled.span`
    color:#6a737c;
    font-size: 16px;
    font-weight: 200;
`;

export const Divider = styled.hr`
    width: 100%;
    border: 0.5px solid #e3e6e8;
    margin:0;
`;

export const NoAnswers = styled.div`
    width: 100%;
    padding: 17px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 100;
    color:#6a737c
`;