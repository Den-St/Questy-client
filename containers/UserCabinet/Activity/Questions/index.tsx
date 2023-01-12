import { QuestionsComponent } from "../../../../components/UserCabinet/Activity/Questions"
import { UserT } from "../../../../types/user"
import {useUsersPaginatedQuestions} from "../../../../hooks/usersPaginatedQuestions";

type Props = {
    user:UserT,
    isMe:boolean
}

export const Questions:React.FC<Props> = ({user,isMe}) => {
    const {page,questions,total,onChangePage,loading,onChangeOrderRule,orderRule} = useUsersPaginatedQuestions(user.id);

    return <QuestionsComponent isMe={isMe} orderRule={orderRule} onChangeOrderRule={onChangeOrderRule} loading={loading} page={page} onChangePage={onChangePage} questions={questions} total={total}/>
}