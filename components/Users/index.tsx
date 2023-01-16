import { Pagination, Select } from "antd"
import { useRouter } from "next/router"
import React from "react"
import { hashTagUrl, routes } from "../../helpers/route"
import { GetAllUsersPaginateT } from "../../types/getAllUsersPaginate"
import { PaginationContainer } from "../HashTags/styles"
import { Divider } from "../UserCabinet/Activity/Summary/Answers/styles"
import { SearchBar } from "./SearchBar"
import { Avatar, Container, HashTag, HashTags, Name, Location, Rating, Right, UserContainer, UsersContainer, Header, Filters } from "./styles"

type Props = {
    paginatedUsers:GetAllUsersPaginateT,
    total:number;
    onChangeOrder:(value:string) => void;
    onChangePage:(page:number) => void;
    onConfirmSearch:(value?:string) => void
}

export const UsersComponent:React.FC<Props> = ({onConfirmSearch,paginatedUsers,total,onChangePage,onChangeOrder}) => {
    const {search,orderFieldName,orderValue} = useRouter().query;
    
    const options:{value:string,label:string}[] = [
        {
            value:JSON.stringify({orderFieldName:'rating',orderValue:'ASC'}),
            label:'Rating(ASC)'
        },
        {
            value:JSON.stringify({orderFieldName:'rating',orderValue:'DESC'}),
            label:'Rating(DESC)'
        },
        {
            value:JSON.stringify({orderFieldName:'createdAt',orderValue:'DESC'}),
            label:'Newest'
        },
        {
            value:JSON.stringify({orderFieldName:'createdAt',orderValue:'ASC'}),
            label:'Oldest'
        },
    ]

    return <Container>
        <Header>Users</Header>
        <Filters>
            <SearchBar value={search} onConfirmSearch={onConfirmSearch}/>
            <Select
                className="select"
                value={JSON.stringify({orderFieldName,orderValue})}
                onChange={onChangeOrder}
                options={options}>
            </Select>
        </Filters>
        <Divider/>
        <UsersContainer>
            {paginatedUsers?.data.users && paginatedUsers.data.users.map(user => 
            <UserContainer key={user.id}>
                <Avatar src={'http://localhost:4000/' + user.avatar?.path}/>
                <Right>
                    <Name href={routes.users.get({id:user.id.toString()})+'?dir=profile'}>{user.name}</Name>
                    <Location>{user.location}</Location>
                    <Rating>{user.rating}</Rating>
                    <HashTags>
                        {user.createdHashTags?.map(hashTag => 
                            <>
                                <HashTag href={hashTagUrl(hashTag.name)}>{hashTag.name}</HashTag>
                            </>
                        )}
                    </HashTags>
                </Right>
            </UserContainer>)}
        </UsersContainer>

        {total > 36 && <PaginationContainer><Pagination total={total} onChange={onChangePage} pageSize={36} showSizeChanger={false} /></PaginationContainer>}
    </Container>
}