import Link from "next/link"
import { hashTagUrl, routes } from "../../../helpers/route"
import { UserT } from "../../../types/user"
import { AboutMe, AboutMeContainer, Container, FavoriteHashTagsContainer, HashTagContainer, HashTagStats, HashTagStatValue, ItemHeader, LeftSide, LeftSideItem, RightSide, StatItem, StatItemName, StatItemValue, Stats } from "./styles"
import { Typography } from 'antd';
import { HashTagName, NoItems } from "../../HashTags/styles";
import { NoQuestions } from "../Activity/Questions/styles";
const { Text } = Typography;
type Props = {
    user:UserT,
    isMe:boolean
}

export const ProfileDir:React.FC<Props> = ({user,isMe}) => {
    return <Container>
        <LeftSide>
            <LeftSideItem>
                <LeftSideItem>
                    <ItemHeader>Stats</ItemHeader>
                    <Stats>
                    <StatItem>
                            <StatItemValue>
                                {user.rating}
                            </StatItemValue>
                            <StatItemName>
                                rating
                            </StatItemName>
                        </StatItem>
                        <StatItem>
                            <StatItemValue>
                                {user.numberOfQuestions}
                            </StatItemValue>
                            <StatItemName>
                                questions
                            </StatItemName>
                        </StatItem>
                        <StatItem>
                            <StatItemValue>
                                {user.numberOfAnswers}
                            </StatItemValue>
                            <StatItemName>
                                answers
                            </StatItemName>
                        </StatItem>
                        <StatItem>
                            <StatItemValue>
                                1
                            </StatItemValue>
                            <StatItemName>
                                reputation
                            </StatItemName>
                        </StatItem>
                    </Stats>
                </LeftSideItem>
            </LeftSideItem>
        </LeftSide>
        <RightSide>
            <ItemHeader>About me</ItemHeader>
            <AboutMeContainer>
                <AboutMe>{user.about || (isMe ? 
                 <Text>
                    Your about me section is currently blank.<br/> Would you like to add one?
                    <Link href={routes.users.get({id:user.id.toString()}) + "?dir=edit&subdir=edit-profile"}>Edit profile</Link>
                 </Text> : <Text>This user have not added about me section.</Text>)}
                 </AboutMe>
            </AboutMeContainer>

            <ItemHeader>Favorite hash-tags</ItemHeader>
            <FavoriteHashTagsContainer>
                {user?.favoriteHashTags?.length ? user?.favoriteHashTags?.map(hashTag => 
                <HashTagContainer>
                    <HashTagName href={hashTagUrl(hashTag.name)}>{hashTag.name}</HashTagName>
                    <HashTagStats>
                        <HashTagStatValue>{hashTag.questionsNumber}</HashTagStatValue>
                            questions
                        <HashTagStatValue>{hashTag.followersNumber}</HashTagStatValue>
                            followers
                    </HashTagStats>
                </HashTagContainer>) : <NoQuestions>No favorite hash-tags</NoQuestions>}
            </FavoriteHashTagsContainer>
        </RightSide>
    </Container>
}