import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    .Input-sc-db146388-0{
        font-size: 14px;
    }
    .ant-form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .ant-form-item .ant-form-item-with-help{
        height: 60px;
    }
    .ant-alert {
        height: 32px;
    }
   .gender-selector{
    width: 200px;
   }
   .ant-col{
    margin: 0;
   }
   .ant-select-selector{
    width: 300px;
   }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: top;
    gap: 10px;
`;