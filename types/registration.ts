import { DatePickerProps } from "antd";
import { UploadChangeParam } from "antd/es/upload";

export type FirstStepRegistrationT = {
    email:string;
    password:string;
}

export type FirstStepRegistrationResT = {
    token:string;
    name:string;

    id:number;

    email:string;
}

export type SecondStepT = {
    name:string,
    gender:'male' | 'female' | 'other',
    favoriteHashTags:string[],
    avatar:UploadChangeParam,
    birthdate:DatePickerProps['value'],
    occasion:string,
    location:string;
    about:string;
}