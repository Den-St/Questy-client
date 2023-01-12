import { DeleteUserComponent } from "../../../components/DeleteUser";
import { useDeleteUser } from "../../../hooks/deleteUser";

export const DeleteUser = () => {
    const {success,onDelete,userId} = useDeleteUser();
    return <DeleteUserComponent userId={userId} onDelete={onDelete} success={success}/>
}