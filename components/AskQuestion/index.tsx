import { Button, Input, Select, Spin } from "antd"
import { QuestionTemplateT } from "../../types/questionTemplate"
import { Buttons, Container, CreateHashTagContainer, Cross, Description, Header, InputContainer, NoTemplates, SeeSteps, Step, Steps, StepsContainer, StepsHeader, SubHeader, TemplateBody, TemplateContainer, TemplateDate, TemplateDir, TemplatesContainer, TemplateTitle, Wrapper } from "./styles"
import 'react-quill/dist/quill.snow.css';
import { TextEditor } from "./TextEditor";
import {CloseOutlined} from "@ant-design/icons"
import { formatedDate, formatT } from "../../helpers/formatedDate";
import React, { useEffect, useState } from "react";
import { DebouncedFunc } from "lodash";
import { CreateHashTag, HashTagT } from "../../types/hash-tag";
const {Option} = Select;
const {TextArea} = Input;
import {Loading3QuartersOutlined} from '@ant-design/icons';

type Props = {
    templates:QuestionTemplateT[],
    chosenTemplate:QuestionTemplateT | null,
    cancelTemplate:() => void;
    onChangeSteps:() => void;
    seeSteps:boolean;
    chooseTemplate:(id:number) => void,
    onCreateTemplate:(questionTemplate:{title:string,body:string,hashTags:string[]}) => void;
    onEditTemplate:(questionTemplate:{title:string,body:string,hashTags:string[]}) => void;
    searchHashTags:DebouncedFunc<(value?: string | undefined) => Promise<void>>,
    hashTags:HashTagT[];
    hashTagsLoading:boolean;
    onCreateQuestion:(question:{title:string,body:string,hashTags:string[]}) => void;
    onCreateHashTag:(dto:CreateHashTag) => void;
    templatesLoading:boolean;
}

export const AskQuestionComponent:React.FC<Props> = ({templatesLoading,onCreateHashTag,onCreateQuestion,hashTagsLoading,searchHashTags,hashTags,onEditTemplate,cancelTemplate,chooseTemplate,seeSteps,chosenTemplate,onChangeSteps,templates,onCreateTemplate}) => {
    const [question,setQuestion] = useState<{title:string,body:string,hashTags:string[]}>({title:'',body:'',hashTags:[]});
    const [hashTag,setHashTag] = useState<CreateHashTag>({name:'',description:''});
    const [isOnCreatingHashTag,setIsOnCreatingHashTag] = useState(false);

    const isValidToCreateTemplate = !!question.title;
    const isValidToCreateQuestion = !!(question.title && question.body && question.hashTags?.length);
    const isValidToSaveTemplate = !!chosenTemplate?.id && !!question.title;
    const isValidCreateHashTag = !!hashTag.name && !!hashTag.description;

    useEffect(() => {
        if(chosenTemplate?.id) setQuestion({title:chosenTemplate?.title,body:chosenTemplate?.body,hashTags:chosenTemplate?.hashTags.map(hashTag => hashTag.name)});
    },[chosenTemplate?.id])

    
    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(prev => ({...prev,title:e.target.value}))
    }
    const onChangeBody = (e?:string) => {
        e && setQuestion(prev => ({...prev,body:e}))
    }
    const onChangeHashTags = (value:string[]) => {
        console.log(value)
        setQuestion(prev => ({...prev,hashTags:value}))
    }
    const onCancelTemplateAndClear = () => {
        cancelTemplate();
        setQuestion({title:'',body:'',hashTags:[]});
    }
    const onClear = () => {
        setQuestion({title:'',body:'',hashTags:[]});
    }

    const onToggleHashTagForm = () => {
        setIsOnCreatingHashTag(prev => !prev);
    }

    const onChangeHashTagName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setHashTag(prev => ({...prev,name:e.target.value}));
    }

    const onChangeHashTagDescription = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setHashTag(prev => ({...prev,description:e.target.value}));
    }

    const onBlurCreateHashTagForm = () => {
        onCreateHashTag(hashTag);
        setIsOnCreatingHashTag(false);
    }

    const onCreateQuestionAndClear = () => {
        onCreateQuestion(question);
        onClear();
    }

    return <Container>
            <Wrapper>
                <Header>Ask your question</Header>
                <StepsContainer seeSteps={seeSteps}>
                    <StepsHeader>
                        <SubHeader>Steps for writing good questions:</SubHeader>
                        <Cross onClick={onChangeSteps}><CloseOutlined/></Cross>
                    </StepsHeader>
                    <Steps>
                        <Step>Summarize your problem in a one-line title.</Step>
                        <Step>Describe your problem in more detail.</Step>
                        <Step>Describe what you tried and what you expected to happen.</Step>
                        <Step>Add “tags” which help surface your question to members of the community.</Step>
                        <Step>Review your question and post it to the site.</Step>
                    </Steps>
                </StepsContainer> 
                {!seeSteps && <SeeSteps onClick={onChangeSteps}>see steps</SeeSteps>}
                
                <TemplatesContainer>
                    <SubHeader>Your templates:</SubHeader>
                    {chosenTemplate 
                        && <Button onClick={onCancelTemplateAndClear} type="dashed" danger={true}>
                            Cancel template selection
                    </Button>}
                    
                    {!templatesLoading ? templates.map(template =>
                        <TemplateContainer key={template.id} onClick={() => chooseTemplate(template.id)}>
                            <TemplateDir>
                                <SubHeader>Title :</SubHeader>
                                <TemplateTitle>{template.title}</TemplateTitle>
                            </TemplateDir>
                            <TemplateDir>
                                <SubHeader>Body :</SubHeader>
                                <TemplateBody dangerouslySetInnerHTML={{__html:template.body}}/>
                            </TemplateDir>
                            <TemplateDate>{formatedDate(template.createdAt,formatT.dashed)}</TemplateDate>
                        </TemplateContainer>
                    ) : <Spin indicator={<Loading3QuartersOutlined/>}/>}
                    {!templatesLoading && !templates.length && <NoTemplates>No templates</NoTemplates>}
                </TemplatesContainer>

                <InputContainer>
                    <SubHeader>Title</SubHeader>
                    <Description>Be specific and imagine you`re asking a question to another person.</Description>
                    <Input value={question.title} onChange={onChangeTitle} className={'input'} placeholder="e.g. How to center a div with css?"/>
                </InputContainer>

                <InputContainer>
                    <SubHeader>What are the details of your problem?</SubHeader>
                    <Description>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</Description>
                    <TextEditor value={question.body} onChangeBody={onChangeBody}/>
                </InputContainer>

                <InputContainer >
                    <SubHeader>Tags</SubHeader>
                    <Description>Add tags to describe what your question is about. Start typing to see suggestions.</Description>
                    <Select
                        value={question.hashTags?.filter(hashTag => hashTag.length)}
                        onChange={onChangeHashTags}
                        mode="multiple"
                        className="select"
                        loading={hashTagsLoading}
                        onSearch={searchHashTags}
                        >
                        {hashTags && hashTags.map(hashTag => 
                            <Option value={hashTag.name} label={hashTag.name}>
                            </Option>
                        )}
                    </Select>

                    <SubHeader>Can't find hash-tag? Create it by yourself!</SubHeader>
                    {!isOnCreatingHashTag 
                        ? <Button onClick={onToggleHashTagForm} type={"primary"} className="createHashTagButton">Create hash-tag</Button>
                        : <Button onClick={onToggleHashTagForm} danger className="createHashTagButton">Close</Button>}

                    <CreateHashTagContainer $isActive={isOnCreatingHashTag}>
                        <Description>Name:</Description>
                        <Input onChange={onChangeHashTagName} value={hashTag.name}/>
                        <Description>Description:</Description>
                        <TextArea onChange={onChangeHashTagDescription} value={hashTag.description}/>
                        <Button disabled={!isValidCreateHashTag} className="confirmHashTagButton" type="primary" onClick={onBlurCreateHashTagForm}>Confirm</Button>
                    </CreateHashTagContainer>
                </InputContainer>

                
                <Buttons>
                    <Button onClick={() => onCreateQuestionAndClear()} disabled={!isValidToCreateQuestion} type="primary">
                        Create
                    </Button>
                    <Button onClick={onClear} danger={true}>
                        Clear
                    </Button>
                    {chosenTemplate?.id 
                        ? <Button disabled={!isValidToSaveTemplate} onClick={() => onEditTemplate(question)} type={'dashed'}>
                            Save template
                        </Button> 
                        : <Button disabled={!isValidToCreateTemplate} onClick={() => onCreateTemplate(question)} type={'dashed'}>
                            Create template
                        </Button>
                    }
                </Buttons>
            </Wrapper>
    </Container>
}