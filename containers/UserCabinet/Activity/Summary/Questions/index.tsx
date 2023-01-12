import { QuestionsComponent } from "../../../../../components/UserCabinet/Activity/Summary/Questions"
import { useSummaryQuestions } from "../../../../../hooks/summaryQuestions";
import { QuestionT } from "../../../../../types/question";
import { UserT } from "../../../../../types/user";

type Props = {
    user:UserT,
    isMe:boolean
}

export const Questions:React.FC<Props> = ({user,isMe}) => {
    const {questions,loading,onChangeOrderRule,orderRule} = useSummaryQuestions(user.id);
    return <QuestionsComponent isMe={isMe} orderRule={orderRule} user={user} onChangeOrderRule={onChangeOrderRule} loading={loading} questions={questions}/>
}