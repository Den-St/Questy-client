import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { TextEditorWrapper } from './styles'

const ReactQuill = dynamic(async () => await import('react-quill'),{ssr:false})

type Props = {
    onChangeBody:() => void;
    value:string | undefined;
}

export const TextEditor:React.FC<Props> = ({onChangeBody,value}) => {
    return <TextEditorWrapper>
            <ReactQuill onChange={onChangeBody} value={value} className="editor" />
        </TextEditorWrapper>    
    


}