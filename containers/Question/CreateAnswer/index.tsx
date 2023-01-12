import { CreateAnswerComponent } from "../../../components/Question/CreateAnswer";
import { useCreateAnswer } from "../../../hooks/createAnswer";

export const CreateAnswer = () => {
    const {create} = useCreateAnswer();
    return <CreateAnswerComponent create={create}/>
}