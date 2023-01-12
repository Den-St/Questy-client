import { Form, Button, Alert, Input, DatePicker } from "antd";
import { FirstStepRegistrationT } from "../../types/registration"
import { ButtonContainer, Container } from "../ui-kit/Form/InputsContainer";
import { Label } from "../ui-kit/Form/Label";
import {EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons';
import { useState } from "react";
import { emailValidation } from "../../constants/emailValidator";

type Props = {
    onConfirm:(dto:FirstStepRegistrationT) => Promise<void>,
    err:any
}

export const FirstStepComponent:React.FC<Props> = ({onConfirm,err}) => {

    return <Container>
        <Form
        name="basic"
        onFinish={onConfirm}
        autoComplete="off"
        >
            <Label>Email</Label>
            <Form.Item
                name="email"
                rules={[{ required: true,message:'Please input your email!'},{type:'email', message: 'Please input correct email!',}]}
            >
                <Input />
            </Form.Item>

            

            <Label>Password</Label>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password 
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
            </Form.Item>

            <ButtonContainer>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                {!!err && <Alert message={err.response.data.message}  type="error" showIcon />}
            </ButtonContainer>
        </Form>
    </Container>
}