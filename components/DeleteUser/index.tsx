import { Button, Input } from "antd"
import { Container } from "./styles"
import { Divider, Typography } from 'antd';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const { Title, Paragraph, Text, Link } = Typography;

type Props = {
    userId?:number;
    onDelete:() => void;
    success:boolean;
}

export const DeleteUserComponent:React.FC<Props> = ({userId,onDelete,success}) => {
    const [inputValue,setInputValue] = useState<string>();
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const router = useRouter();

    useEffect(() => {
        success && setTimeout(() => router.push('/'),100);
    },[success]);
    
    return <Container>
        <Paragraph>
            Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:
            <li>If you delete your account, you will lost all controll of it.</li>
            <li>Also you wont't be able to register new account with same email.</li>
            <li>Author name of all your questions and answers will be equal to user{userId}.</li>
        </Paragraph>
        <Divider  style={{"border":"0.5px solid black"}}/>
        <Text style={{"color":"#a7a7a7","marginBottom":"7px"}}>To delete account you have to write <Text type={'danger'}>DELETE</Text></Text>
        <Input onChange={onChange} style={{"width":"150px","marginBottom":"5px"}}></Input>
        <Button onClick={onDelete} disabled={inputValue !== 'DELETE'} style={{"width":"100px"}}>Confirm</Button>
    </Container>
}