import Link from "next/link"
import { routes } from "../../helpers/route"
import { CommunityT } from "../../types/community"
import { UserT } from "../../types/user"
import { Container, User, Header, JoinToggle, Name, SectionName, UserAvatar, UserName, Users, UsersSection } from "./styles"

type Props = {
    community:CommunityT,
    members:UserT[];
    membersLoading:boolean;
    joinLoading:boolean;
    onJoinToggle:() => void;
    isJoined:boolean;
}

export const CommunityComponent:React.FC<Props> = ({joinLoading,onJoinToggle,isJoined,membersLoading,community,members}) => {
    return <Container>
        <Header>
            <Name>{community.name}</Name>
            <JoinToggle $isJoined={isJoined} disabled={joinLoading} onClick={onJoinToggle}>
                {isJoined ? `Leave` : `Join`}
            </JoinToggle>
        </Header>
        <UsersSection>
            <SectionName>Creator: </SectionName>
            <Link href={routes.users.get({id:community.creator.id.toString()})+'?dir=profile'}>
                <User>
                    <UserAvatar src={'http://localhost:4000/' + community.creator?.avatar?.path}/>
                    <UserName>{community.creator.name}</UserName>
                </User>
            </Link>
        </UsersSection>
        <UsersSection>
            <SectionName>Members: </SectionName>
            <Users>
                {membersLoading && `Loading`}
                {!membersLoading && !!members?.length && members?.map(member => 
                    <Link key={member.id} href={routes.users.get({id:member.id.toString()})+'?dir=profile'}>
                        <User>
                            <UserAvatar src={'http://localhost:4000/' + member?.avatar?.path}/>
                            <UserName>{member.name}</UserName>
                        </User>
                    </Link>)}
                {!members?.length && `No members`}
            </Users>
        </UsersSection>
    </Container>
}