import { Select, Spin } from "antd"
import { HashTagT } from "../../../../../types/hash-tag"
import { UserT } from "../../../../../types/user"
import { LinkTo } from "../Questions/styles"
import { Item, ItemHeader, Left, Name, ViewAll } from "../styles"
import { Container, Divider, NoTags } from "./styles"
import { TagItem } from "./Tag"
import {Loading3QuartersOutlined} from "@ant-design/icons";

type Props = {
    hashTags:HashTagT[],
    user:UserT,
    isMe:boolean,
    loading:boolean,
    orderRule:string,
    onChangeOrderRule:(value:string) => void
}

export const HashTagsComponent:React.FC<Props> = ({loading,onChangeOrderRule,orderRule,user,hashTags,isMe}) => {
    return <Item>

        <ItemHeader>
            <Left>
                <Name>Tags</Name>
                <ViewAll href={''}>view all {user.numberOfCreatedHashTags}</ViewAll>
            </Left>
            {(!loading && !!hashTags?.length) && <Select className="select" defaultValue={JSON.stringify({fieldName:"createdAt",orderValue:"ASC"})} value={orderRule} onChange={onChangeOrderRule}
                options={[
                    {
                        value:JSON.stringify({fieldName:"rating",orderValue:"ASC"}),
                        label:'by Rating(ASC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"rating",orderValue:"DESC"}),
                        label:'by Rating(DESC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"ASC"}),
                        label:'by Newest'
                    },
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"DESC"}),
                        label:'by Oldest'
                    },
                ]}
            >
            </Select>}
        </ItemHeader>
        <Container>
        {(!loading && !!hashTags?.length) 
            && hashTags.map(hashTag => <>
                                            <TagItem hashTag={hashTag}/>
                                            <Divider/>
                                        </>) 
        }
        {(!loading && !hashTags?.length) 
        &&  <>{isMe 
                    ? <NoTags> You don't have any <LinkTo href={'/create-question'}> created </LinkTo> hash-tags </NoTags> 
                    : <NoTags>This user doesn't have any created hash-tags</NoTags>
                }</>
        }
        {loading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
        </Container>
    </Item>

}