import { QuestionsComponent } from "../../components/Questions"
import { useQuestionsPagination } from "../../hooks/questionsPagination"
import { QuestionT } from "../../types/question"

type Props = {
    paginatedQuestions:{
        questions:QuestionT[],
        total:number
    }
}

export const Questions:React.FC<Props> = ({paginatedQuestions}) => {
    const {onChangeOrder,onChangePage,onConfirmSearch,onChangeHashTags,onChangeOnlyAnswered} = useQuestionsPagination();
    
    return <QuestionsComponent 
        onConfirmSearch={onConfirmSearch} 
        onChangeOrder={onChangeOrder}
        onChangePage={onChangePage} onChangeHashTags={onChangeHashTags}
        questions={paginatedQuestions.questions} total={paginatedQuestions.total}
        onChangeOnlyAnswered={onChangeOnlyAnswered} />
}