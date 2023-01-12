import { Pagination, Select } from "antd"
import { DebouncedFunc } from "lodash"
import { HashTagT } from "../../types/hash-tag"
import { SearchParamT } from "../../types/searchParamT"
import { Container, Filters, HashTagContainer, HashTagDescription, HashTagName, HashTagsContainer, Header, NoItems, StatNumber, StatsContainer } from "./styles"
import {SearchBar} from "../Users/SearchBar";
import { onChangeSearchParams } from "../../helpers/changeUsersSearchParams"
import { PaginationContainer } from "../UserCabinet/Activity/Questions/styles"
import { useRouter } from "next/router"
import { Divider } from "../UserCabinet/Activity/Summary/Answers/styles"
import { hashTagUrl } from "../../helpers/route"

type Props = {
    paginatedHashTags:{
        hashTags:HashTagT[],
        total:number
    };
    onChangeOrder:(value:string) => void;
    onChangePage:(page:number) => void;
    onConfirmSearch:(value?:string) => void;
}

export const HashTagsComponent:React.FC<Props> = ({paginatedHashTags,onConfirmSearch,onChangePage,onChangeOrder}) => {
    const router = useRouter();
    const {page,orderFieldName,orderValue,search} = router.query;

    const options:{value:string,label:string}[] = [
        {
            value:JSON.stringify({orderFieldName:'questionsNumber',orderValue:'ASC'}),
            label:'Number of questions(ASC)'
        },
        {
            value:JSON.stringify({orderFieldName:'questionsNumber',orderValue:'DESC'}),
            label:'Number of questions(DESC)'
        },
    ];

    return <Container>
        <Header>Hash-tags</Header>
        <Filters>
            <SearchBar value={search} onConfirmSearch={onConfirmSearch}/>
            <Select
                className="select"
                value={JSON.stringify({orderFieldName,orderValue})}
                onChange={onChangeOrder}
                options={options}
                >
            </Select>
        </Filters> 
        <Divider/>
        <HashTagsContainer>
            {!!paginatedHashTags.hashTags.length ? paginatedHashTags.hashTags.map(hashTag =>
                <HashTagContainer key={hashTag.id}>
                    <HashTagName href={hashTagUrl(hashTag.name)}>{hashTag.name}</HashTagName>
                    <HashTagDescription>{hashTag.description}</HashTagDescription>
                    <StatsContainer>
                        <StatNumber>{hashTag.questionsNumber} questions</StatNumber>
                        <StatNumber>{hashTag.followersNumber} followers</StatNumber>
                    </StatsContainer>
                </HashTagContainer>
            ) : <NoItems>No such hash-tags</NoItems>}
        </HashTagsContainer>
        {paginatedHashTags.total > 36 &&<PaginationContainer><Pagination current={Number(page)} pageSize={36} total={paginatedHashTags.total} onChange={onChangePage}/></PaginationContainer>}
    </Container>
}           