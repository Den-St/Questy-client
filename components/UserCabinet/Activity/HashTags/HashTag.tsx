import { hashTagUrl } from "../../../../helpers/route"
import { HashTagT } from "../../../../types/hash-tag"
import { HashTag, Name, Popularity, PopularityNumber } from "./styles"

type Props = {
    hashTag:HashTagT
}

export const HashTagItem:React.FC<Props> = ({hashTag}) => {
    return <HashTag>
        <Name href={hashTagUrl(hashTag.name)}>{hashTag.name}</Name>
        <Popularity>
            <PopularityNumber>{hashTag.followersNumber}</PopularityNumber>
            followers
            <PopularityNumber>{hashTag.questionsNumber}</PopularityNumber>
            questions
        </Popularity>
    </HashTag>
}