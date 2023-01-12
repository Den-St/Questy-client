import dayjs from "dayjs";

export enum formatT {
    slashed='DD/MM/YYYY',
    dashed='YYYY-MM-DD'
}

export const formatedDate = (date:string,format:formatT) => {
    const formDate = dayjs(date).format(format);
    return formDate;
}