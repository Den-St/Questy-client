import { SecondStepComponent } from "../../components/SecondStep"
import { useSearchHashTags } from "../../hooks/searchHashTags"
import { SecondStepT } from "../../types/registration"

type Props = {
    onConfirm:(dto:SecondStepT) => void,
    success:boolean
}

export const SecondStep:React.FC<Props> = ({onConfirm,success}) => {
    const {debounceRefetch,hashTags,loading} = useSearchHashTags();
    
    return <SecondStepComponent success={success} search={debounceRefetch} hashTags={hashTags} loading={loading} onConfirm={onConfirm}/>
}