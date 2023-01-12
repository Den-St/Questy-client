import { EditFormComponent } from "../../../components/EditUser";
import { useEditUserForm } from "../../../hooks/editUserForm";
import { useSearchHashTags } from "../../../hooks/searchHashTags";
import { UserT } from "../../../types/user";

type Props = {
    user:UserT;
}

export const EditUserForm:React.FC<Props> = ({user}) => {
    const {success,onConfirm,isOnLogout,onLogout} = useEditUserForm();
    const {debounceRefetch,hashTags} = useSearchHashTags();
    return <EditFormComponent onLogout={onLogout} isOnLogout={isOnLogout} search={debounceRefetch} hashTags={hashTags} onConfirm={onConfirm} success={success} user={user}/>
}