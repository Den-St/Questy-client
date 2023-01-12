import { Messages } from "../../components/Messages";
import { useGetNotSeenAnswers } from "../../hooks/getNotSeenAnswers";
import { Overlay ,ModalWrapper} from "./styles";

type Props = {
    onClose:() => void;
}

export const MessagesModal:React.FC<Props> = ({onClose}) => {
    const {answers,loading} = useGetNotSeenAnswers();

    return <>
        <Overlay onClick={onClose}/>
        <ModalWrapper><Messages answers={answers} loading={loading}/></ModalWrapper>
    </>
}