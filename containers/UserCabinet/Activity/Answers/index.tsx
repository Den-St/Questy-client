import { AnswersComponent } from "../../../../components/UserCabinet/Activity/Answers"
import { useUsersPaginatedAnswers } from "../../../../hooks/usersPaginatedAnswers"
import { UserT } from "../../../../types/user"

type Props = {
    user:UserT,
    isMe:boolean
}

export const Answers:React.FC<Props> = ({user,isMe}) => {
    const {page,onChangePage,answers,total,loading,onChangeOrderRule,orderRule} = useUsersPaginatedAnswers(user.id);

    return <AnswersComponent isMe={isMe} orderRule={orderRule} onChangeOrderRule={onChangeOrderRule} loading={loading} page={page} onChangePage={onChangePage} answers={answers} total={total} />
}