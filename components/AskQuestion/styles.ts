import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-left: 7%;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 900px;
`;

export const Header = styled.h1`
    font-size: 20px;
    font-weight: 400;
`;

export const SubHeader = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 0;
`;

export const StepsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Cross = styled.span`
    background-color: transparent;
    border: none;
    outline: none;
`;


export const StepsContainer = styled.div<{seeSteps:boolean}>`
    width: 100%;
    border:${({seeSteps}) => seeSteps ? `1px solid #a6ceee;` : `none`};
    background-color: #ebf4fb;
    border-radius: 3px;
    box-sizing: border-box;
    transition: 0.3s;
    padding: ${({seeSteps}) => seeSteps ? `20px;` : `0px;`};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing:border-box;
    height: ${({seeSteps}) => seeSteps ? `210px` : `0px`};
`;

export const SeeSteps = styled.p`
    font-size: 16px;
    font-weight: 200;
    background-color: transparent;
    border: none;
    outline: none;
    color: #0e52ff;
    cursor: pointer;
    margin: 0;
    margin-top: -40px;
`;

export const Steps = styled.ul`
    padding-left: 20px;
`;

export const Step = styled.li`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 3px;
`;

export const InputContainer = styled.div`
    width: 100%;
    border: 1px solid #e4e6e8;
    border-radius: 2px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 5px;
    .input{
        width: 100%;
        height: 30px;
        ::placeholder{
            color:#727272c8;
        }
    }
    .formItem{
        padding: 0;
        margin: 0;
    }
    .createHashTagButton{
        width: 20%;
    }
    
`;

export const Description = styled.span`
    font-size: 12px;
    color: #1e1e1e;
    font-weight: 300;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;

export const TextEditorWrapper = styled.div`
    .ql-container{
        height: 200px;
        font-size: 16px;
    }
`;

export const TemplatesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 3px;
    box-sizing: border-box;
    border: 1px solid #e4e6e8;
`;

export const TemplateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 5px;
    border-radius: 3px;
    flex-direction:column;
    gap: 5px;
    cursor: pointer;
    border-bottom:0.5px solid #a7a7a7 ;
    padding-bottom: 5px;
    :hover{
        background-color: #929ee427;
    }
`;

export const TemplateDir = styled.div`
    display: flex;
    gap: 3px;
`;

export const TemplateBody = styled.div`
    max-height: 150px;
    overflow-y: scroll;
    width: 90%;
`;

export const TemplateTitle = styled.span`
    font-size: 16px;
    font-weight: 300;
    max-width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const TemplateDate = styled.span`
    font-size: 14px;
    font-weight: 100;
    color: #414040;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const CreateHashTagContainer = styled.div<{$isActive:boolean}>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: 0.1s;
    height: ${({$isActive}) => $isActive ? `180px;` : `0px;`};
    overflow:hidden;
    width: 40%;
    .confirmHashTagButton{
        width: 50%;
    }
`;

export const NoTemplates = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 18px;
    font-weight: 200;
`;