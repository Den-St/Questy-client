import { FirstStepComponent } from "../../components/FirstStep"
import { FirstStepRegistrationT } from "../../types/registration"


type Props = {
    onConfirm:(dto:FirstStepRegistrationT) => Promise<void>,
    err:any
}

export const FirstStep:React.FC<Props> = ({onConfirm,err}) => {
    return <FirstStepComponent onConfirm={onConfirm} err={err}/>
}