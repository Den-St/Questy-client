import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { SearchContainer } from "./styles"

export const Search = () => {
    return <SearchContainer>
        <SearchOutlined/>
        <Input/>
    </SearchContainer>
}