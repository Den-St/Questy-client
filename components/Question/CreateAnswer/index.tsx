import React, { useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { Header } from "../styles"
import { Container, CreateButton } from "./styles"
import { TextEditor } from "./TextEditor"

type Props = {
    create:(text:string) => void
}

export const CreateAnswerComponent:React.FC<Props> = ({create}) => {
    const [text,setText] = useState('');
    const isAuthed = !!useAppSelector(state => state).userReducer.user?.id;

    const onChange = (value:string) => {
        if(!isAuthed) {
            setText('');
            return;
        }
        value && setText(value);
    }
    console.log(text)
    return <Container>
        <Header>Create answer</Header>
        <TextEditor onChange={onChange} text={text} isAuthed={isAuthed}/>
        <CreateButton onClick={() => create(text)} $disabled={!isAuthed} disabled={!isAuthed}>Create</CreateButton>
    </Container>
}