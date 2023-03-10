import { Pagination, Select } from "antd"
import { useRouter } from "next/router"
import { useState } from "react"
import { hashTagUrl } from "../../helpers/route"
import { CommunityT } from "../../types/community"
import { Container, Header, PaginationContainer } from "../HashTags/styles"
import { DetailedFilters } from "../Questions/DetailedFilters"
import { PickedHashTags } from "../Questions/styles"
import { Divider } from "../SideBar/styles"
import { SearchBar } from "../Users/SearchBar"
import { DetailedFiltersButton, Filters, HashTag } from "../Users/styles"
import { CommunitiesContainer, CommunityContainer, CreateCommunity, HashTags, Name, StatContainer, StatName, StatValue } from "./styles"

type Props = {
    paginatedCommunities:{communities:CommunityT[],total:number},
    onChangeHashTags:(value:string[]) => void,
    onChangeOrder:(value:string) => void,
    onConfirmSearch:(value?:string) => void,
    onChangePage:(page:number) => void
}

export const CommunitiesComponent:React.FC<Props> = ({paginatedCommunities,onChangeHashTags,onChangeOrder,onChangePage,onConfirmSearch}) => {
    const router = useRouter();
    const {page,orderFieldName,orderValue,search,hashTags} = router.query;
    const [onDetailedFilters,setOnDetailedFilters] = useState(false);
    const options:{value:string,label:string}[] = [
        {
            value:JSON.stringify({orderFieldName:'createdAt',orderValue:'DESC'}),
            label:'Newest'
        },
        {
            value:JSON.stringify({orderFieldName:'createdAt',orderValue:'ASC'}),
            label:'Oldest'
        },
        {
            value:JSON.stringify({orderFieldName:'membersNumber',orderValue:'ASC'}),
            label:'Members number(ASC)'
        },
        {
            value:JSON.stringify({orderFieldName:'membersNumber',orderValue:'DESC'}),
            label:'Members number(DESC)'
        },
    ];
    return <Container>
        <Header>Communities</Header>
        <CreateCommunity href={'/createCommunity'} >Create your own community !</CreateCommunity>
        {hashTags?.length 
            ? <PickedHashTags>Picked hash-tags: {hashTags}</PickedHashTags>
            : <PickedHashTags>No picked hash-tags</PickedHashTags>
        }
        <Filters>
            <SearchBar value={search} onConfirmSearch={onConfirmSearch}/>
            <div>
                <Select
                    className="select"
                    options={options}
                    onChange={onChangeOrder}
                    value={JSON.stringify({orderFieldName,orderValue})}
                >
                </Select>
                <DetailedFiltersButton onClick={() => setOnDetailedFilters(prev => !prev)} $isActive={onDetailedFilters}>
                    Filters
                </DetailedFiltersButton>
            </div>
        </Filters>
        {onDetailedFilters && <DetailedFilters onChangeHashTags={onChangeHashTags}/>}
        <CommunitiesContainer>
            {paginatedCommunities.communities.map(community => 
            <>
                <CommunityContainer key={community.id}>
                    <Name href={`/communities/${community.id}`}>{community.name}</Name>
                    <HashTags>
                        {community?.hashTags.map(hashTag => 
                            <HashTag href={hashTagUrl(hashTag.name)}>
                                {hashTag.name}
                            </HashTag>
                        )}
                    </HashTags>
                    <StatContainer>
                        <StatName>Members:</StatName>
                        <StatValue>{community.membersNumber}</StatValue>
                    </StatContainer>
                </CommunityContainer>
                <Divider/>
            </>)}
        </CommunitiesContainer>
        <PaginationContainer><Pagination total={paginatedCommunities.total} pageSize={15} current={Number(page)} onChange={onChangePage} /></PaginationContainer>

        </Container>
}