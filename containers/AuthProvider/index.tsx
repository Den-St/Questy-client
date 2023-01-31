import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux"
import { authMe } from "../../store/reducers/ActionCreators";

type Props = {
    children:React.ReactNode
}

export const AuthProvider:React.FC<Props> = ({children}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        try{
            dispatch(authMe())
        }catch(err){
            console.log(err);
        }
    },[])
    // const id = useAppSelector(state => state.userReducer.user?.id);
    console.log('f')
    return <>{children}</>
}