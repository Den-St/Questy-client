import { Alert, Button, Form, Input } from "antd"
import React, { useState } from "react"
import { LoginT } from "../../types/login"
import { Container, Header } from "./styles"
import {EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons';

type Props = {
    onLogin:(dto:LoginT) => void,
    err:any
}

export const LoginModalComponent:React.FC<Props> = ({onLogin,err}) => {

    return <Container>
        <Header>Login</Header>
        <Form 
            className="form"
            onFinish={onLogin}
        >
            <Form.Item name={'email'}
             rules={[{required:true,message:'Email is required'},{type:'email',message:'Enter valid email'}]}>
                <Input placeholder={"Email"}/>
            </Form.Item>
            <Form.Item name={'password'}
             rules={[{required:true,message:'Password is required'}]}>
                <Input.Password 
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
            </Form.Item>
            {!!err && <Alert message={err.response.data.message}  type="error" showIcon />}
            
            <Form.Item>
                <Button  htmlType="submit" type={'primary'}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    </Container>
}