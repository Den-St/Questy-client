import { HashTagT } from "../../../../../types/hash-tag"
import { Name, Popularity, PopularityNumber, Tag } from "./styles"

type Props = {
    hashTag:HashTagT
}

export const TagItem:React.FC<Props> = ({hashTag}) => {
    return <Tag>
        <Name>{hashTag.name}</Name>
        <Popularity>
            <PopularityNumber>{hashTag.questionsNumber}</PopularityNumber>
            questions
        </Popularity>
    </Tag>
}