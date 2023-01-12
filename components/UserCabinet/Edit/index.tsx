import { useRouter } from "next/router"
import { editDirSubDirs } from "../../../constants/routes"
import { DeleteUser } from "../../../containers/UserCabinet/DeleteUser"
import { EditUserForm } from "../../../containers/UserCabinet/EditUserForm"
import { routes } from "../../../helpers/route"
import { UserT } from "../../../types/user"
import { Container, LeftSide, LeftSideHeader, LeftSideItem, RightSide, RightSideHeader } from "./styles"

type Props = {
    user:UserT
}

export const EditDir:React.FC<Props> = ({user}) => {
    const router = useRouter();
    const {subdir} = router.query;

    return <Container>
        <LeftSide>
            <LeftSideHeader>Personal information</LeftSideHeader>
            {editDirSubDirs.map(dir => 
                <LeftSideItem $isActive={subdir === dir.name}
                              href={routes.users.get({id:user.id.toString()})+"?dir=edit"+dir.link}>
                                {dir.label}
                </LeftSideItem> )}
        </LeftSide>
        <RightSide>
            {subdir === 'edit-profile' && <RightSideHeader>Edit your profile</RightSideHeader>}
            {subdir === 'delete-profile' && <RightSideHeader>Delete your profile</RightSideHeader>}
            {subdir === 'edit-profile' && <EditUserForm user={user}/>}
            {subdir === 'delete-profile' && <DeleteUser/>}
        </RightSide>
    </Container>
}