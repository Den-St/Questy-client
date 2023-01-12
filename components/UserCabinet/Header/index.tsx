import { links } from "../../../constants/routes"
import { routes } from "../../../helpers/route"
import { UserT } from "../../../types/user"
import { Avatar, BottomInfo, Container, EditButton, BottomInfoItem, Name, TextInfo } from "./styles"
import {EditOutlined, EnvironmentOutlined,FieldTimeOutlined} from "@ant-design/icons"
type Props = {
    user:UserT,
    isMe:boolean,
    dir:string,
}

export const Header:React.FC<Props> = ({user,isMe,dir}) => {
    const createdDate = new Date(user.createdAt);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const diffTime = today.getTime() - createdDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

    return <Container>
        <Avatar src={user?.avatar?.path}/>
        <TextInfo>
            <Name>{user.name}</Name>
            <BottomInfo>
                <BottomInfoItem><FieldTimeOutlined />Member for {diffDays || 1} days</BottomInfoItem>
                {user?.location != 'not set yet' && <BottomInfoItem><EnvironmentOutlined />{user.location}</BottomInfoItem>}
            </BottomInfo>
        </TextInfo>
        {isMe && <EditButton $isActive={dir === 'edit'} href={routes.users.get({id:user.id.toString()})+links.cabinetLinks.edit+links.cabinetLinks.editDirSubDirs.editProfile}><EditOutlined />Edit</EditButton>}
    </Container>
}