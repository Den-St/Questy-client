import { AnswersComponent } from "../../../../../components/UserCabinet/Activity/Summary/Answers"
import { useSummaryAnswers } from "../../../../../hooks/summaryAnswers"
import { UserT } from "../../../../../types/user"

type Props = {
    user:UserT,
    isMe:boolean
}

export const Answers:React.FC<Props> = ({user,isMe}) => {
    const {answers,loading,onChangeOrderRule,orderRule} = useSummaryAnswers(user.id);
    return <AnswersComponent isMe={isMe} orderRule={orderRule} user={user} onChangeOrderRule={onChangeOrderRule} loading={loading} answers={answers}/>
}