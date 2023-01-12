import { LoginModalComponent } from "../../components/LoginModal"
import { useLogin } from "../../hooks/login"

export const LoginModalContainer = () => {
    const {onLogin,err} = useLogin();
    return <LoginModalComponent err={err} onLogin={onLogin}/>
}