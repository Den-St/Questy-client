import { useState } from "react";
import { Overlay ,ModalWrapper, Container, Header, Dir, Divider} from "./styles";
import { Answers } from "./Answers";
import { Correct } from "./Correct";
import {CheckOutlined} from '@ant-design/icons';

type Props = {
    onClose:() => void;
}

export const MessagesModal:React.FC<Props> = ({onClose}) => {
    const [dir,setDir] = useState('answers');

    return <>
        <Overlay onClick={onClose}/>
        <ModalWrapper>
            <Container>
                <Header>
                    <Dir $active={dir === 'answers'} onClick={() => setDir('answers')}>Answers</Dir>
                    <Divider/>
                    <Dir $active={dir === 'correct'} onClick={() => setDir('correct')}>Correct Answers <CheckOutlined/></Dir>
                </Header>
            {dir === 'answers' && <Answers/>}
            {dir === 'correct' && <Correct/>}
            </Container>
        </ModalWrapper>
    </>
}