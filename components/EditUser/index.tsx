import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Upload, UploadFile, UploadProps } from "antd"
import { RcFile, UploadChangeParam } from "antd/es/upload/interface";
import { useEffect, useState } from "react";
import { beforeUpload, getBase64 } from "../../helpers/avatarUpload";
import { UserT } from "../../types/user"
import { Label } from "../ui-kit/Form/Label"
import { Container } from "./styles"
const {Option} = Select;
import dayjs from "dayjs";
import { SecondStepT } from "../../types/registration";
import { DebouncedFunc } from "lodash";
import { HashTagT } from "../../types/hash-tag";
import { useRouter } from "next/router";
import { routes } from "../../helpers/route";
import { useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
const {TextArea} = Input;
 
type Props = {
    user:UserT,
    onConfirm:(dto:SecondStepT) => void,
    success:boolean,
    search:DebouncedFunc<(value?: string | undefined) => Promise<void>>,
    hashTags:HashTagT[],
    onLogout:() => void,
    isOnLogout:boolean
}

export const EditFormComponent:React.FC<Props>= ({isOnLogout,onLogout,user,onConfirm,success,search,hashTags}) => {
  const router = useRouter();
  const defaultFavoriteHashTags = useAppSelector(user => user).userReducer.user?.favoriteHashTags;


  useEffect(() => {
    isOnLogout && setTimeout(() => router.push('/'),100);
    success && setTimeout(() => router.push(routes.users.get({id:user.id.toString()}) + "?dir=profile"),100);
  },[isOnLogout,success])

  const [imageLoading,setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(user.avatar.path);
  const uploadButton = (
    <div>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setImageLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      console.log('vcvcv',info.file)
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setImageLoading(false);
        setImageUrl(url);
      });
    }
  };

    return <Container>
        <Form
        onFinish={onConfirm}
        
        >
        <Label>Avatar</Label>
          <Form.Item
            name="avatar"
            rules={[{ required: false}]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            </Form.Item>

            <Label>Birth date</Label>
            <Form.Item name="birthdate">
                <DatePicker name="birthdate" />
            </Form.Item>

            <Label>Location</Label>
            <Form.Item name={'location'}>
              <Select
                defaultValue={user.location}
                showSearch
                placeholder="Select a location"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'Ukraine',
                    label: 'Ukraine',
                  },
                  {
                    value: 'Poland',
                    label: 'Poland',
                  },
                  {
                    value: 'Germany',
                    label: 'Germany',
                  },
                  {
                    value: 'USA',
                    label: 'USA',
                  },
                  {
                    value: 'Spain',
                    label: 'Spain',
                  },
                  {
                    value: 'Switzerland',
                    label: 'Switzerland',
                  },
                  {
                    value:'France',
                    label:'France'
                  }
                ]}
              />
            </Form.Item>


        <Label>Name</Label>
        <Form.Item
          name="name"
        >
          <Input defaultValue={user.name} />
        </Form.Item>

        <Label>Gender</Label>
          <Form.Item
            name="gender"
            className="gender-selector"
            style={{'width':'100px'}}
          >
            <Select defaultValue={user.gender}>
                <Option value='male'>male</Option>
                <Option value='female'>female</Option>
                <Option value='other'>other</Option>
            </Select>
          </Form.Item>
      
      <Label>Choose your occasion</Label>
      <Form.Item style={{'width':'300px'}} name={'occasion'}>
        <Select
          style={{ width: '100%' }}
          placeholder="Occasion"
          optionLabelProp="label"
          defaultValue={user.occasion}
        >
            <Option value={'teacher'} label={'teacher'}>
            </Option>
            <Option value={'lawyer'} label={'lawyer'}>
            </Option>
            <Option value={'programmer'} label={'programmer'}>
            </Option>
            <Option value={'engineer'} label={'engineer'}>
            </Option>
            <Option value={'it-sphere'} label={'it-sphere'}>
            </Option>
            <Option value={'politician'} label={'politician'}>
            </Option>
            <Option value={'other'} label={'other'}>
            </Option>
        </Select>
      </Form.Item>

      <Label>Favorite hash-tags</Label>
      <Form.Item name={'favoriteHashTags'}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          optionLabelProp="label"
          onSearch={search}
          defaultValue={defaultFavoriteHashTags?.map(hashTag => hashTag.name)}
        >
        {hashTags && hashTags.map(hashTag => 
          <Option value={hashTag.name} label={hashTag.name}>
          </Option>
        )}
        </Select>
      </Form.Item>

      <Label>About me:</Label>
      <Form.Item style={{"width":"400px",}} name="about">
          <TextArea defaultValue={user.about} style={{"height":"200px"}}/>
      </Form.Item>

      <Form.Item >
        <Button style={{"marginInlineStart":"0px"}} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      </Form>
      <Button onClick={onLogout}>Logout</Button>
    </Container>
}