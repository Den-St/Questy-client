import { AskQuestionComponent } from "../../components/AskQuestion"
import { useAskQuestion } from "../../hooks/askQuestion"
import { useCreateHashTag } from "../../hooks/createHashTag"
import { useSearchHashTags } from "../../hooks/searchHashTags"
import { QuestionTemplateT } from "../../types/questionTemplate"

type Props = {
    templates:QuestionTemplateT[];
    templatesLoading:boolean;
    refetch:() => void
}

export const AskQuestionContainer:React.FC<Props> = ({templates,templatesLoading,refetch}) => {
    const {onCreateQuestion,chooseTemplate,onChangeSteps,seeSteps,chosenTemplate,cancelTemplate,onEditTemplate,chosenTemplateLoading,onCreateTemplate} = useAskQuestion(refetch);
    const {hashTags,debounceRefetch,loading} = useSearchHashTags();
    const {onCreateHashTag} = useCreateHashTag();

    return <AskQuestionComponent templatesLoading={templatesLoading} searchHashTags={debounceRefetch} hashTags={hashTags} hashTagsLoading={loading}
            onChangeSteps={onChangeSteps} seeSteps={seeSteps} onCreateQuestion={onCreateQuestion}
            chosenTemplate={chosenTemplate} cancelTemplate={cancelTemplate} onEditTemplate={onEditTemplate}
            chooseTemplate={chooseTemplate} templates={templates} onCreateTemplate={onCreateTemplate}
            onCreateHashTag={onCreateHashTag}/>
}