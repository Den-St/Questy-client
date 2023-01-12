import { Cover, CoverButtons, CoverTitle, Login, Register, TextEditorContainer } from "./styles"
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import('react-quill'),{ssr:false})


type Props = {
    text:string;
    onChange:(value:string) => void;
    isAuthed:boolean
}

export const TextEditor:React.FC<Props> = ({isAuthed,text,onChange}) => {
    return <TextEditorContainer>
        <ReactQuill value={text} onChange={onChange}/>
        {!isAuthed 
            && <Cover>
                <CoverTitle>You need to</CoverTitle>
                <CoverButtons>
                    <Register href={'/registration'}>Register</Register>
                    or
                    <Login>Login</Login>
                </CoverButtons>
            </Cover>}
    </TextEditorContainer>
}