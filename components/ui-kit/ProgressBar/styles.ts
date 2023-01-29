import styled from 'styled-components';
import { Media } from '../../../assets/breakpoints';
export const Container = styled.div`
    width: 50%;
    .ant-steps-item-title{
        font-size: 14px;
    }
    ${Media.down.m}{
        .ant-steps-item-content{
            margin: 0;
        }
        .ant-steps-item{
            .ant-steps-item-container{
                .ant-steps-item-tail::after{
                    display: none;
                }
            }
        }
        .ant-steps {
            flex-direction: row;
            justify-content: space-around;
        }
        
        display: flex;
        justify-content: center;
        position: fixed;
        top: 80px;
        z-index: 10;
    }
`;