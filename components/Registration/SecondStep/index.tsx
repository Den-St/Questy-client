import { AutoComplete, Button, DatePicker, Form, Input, Select, Spin, Upload, UploadFile, UploadProps } from "antd"
import { UploadChangeParam, RcFile } from "antd/es/upload";
import { DebouncedFunc } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HashTagT } from "./../../../types/hash-tag";
import { SecondStepT } from "./../../../types/registration";
import { Container } from './../../ui-kit/Form/InputsContainer'
import { Label } from "./../../ui-kit/Form/Label";
const {Option} = Select;
import {beforeUpload, getBase64} from './../../../helpers/avatarUpload';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { FormHorizontal, FormVertical } from "./styles";

type Props = {
    onConfirm:(dto:SecondStepT) => void,
    search:DebouncedFunc<(value?: string | undefined) => Promise<void>>,
    hashTags:HashTagT[],
    loading:boolean,
    success:boolean;
}

export const SecondStepComponent:React.FC<Props> = ({onConfirm,search,hashTags,loading,success}) => {
  const router = useRouter();
  useEffect(() => {
    success && setTimeout(() => router.push("/"),100);
  },[success])
  const [imageLoading,setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
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
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onConfirm}
      autoComplete="off"
    >
      <FormHorizontal gap={'40px'}>
        <FormVertical>
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
        </FormVertical>

        <FormVertical>
          <FormVertical>
            <Label>Birth date</Label>
            <Form.Item name="birthdate" >
                <DatePicker/>
            </Form.Item>
          </FormVertical>

          <FormVertical>
            <Label>Location</Label>
            <Form.Item name={'location'}>
              <Select
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
          </FormVertical>
        </FormVertical>

      </FormHorizontal>

      <FormHorizontal gap="40px" >
        <FormVertical>
        <Label>Name</Label>
        <Form.Item
          name="name"
        >
          <Input  />
        </Form.Item>
        </FormVertical>

        <FormVertical>
        <Label>Gender</Label>
          <Form.Item
            name="gender"
            className="gender-selector"
          >
            <Select>
                <Option value='male'>male</Option>
                <Option value='female'>female</Option>
                <Option value='other'>other</Option>
            </Select>
          </Form.Item>
        </FormVertical>
      </FormHorizontal>
      
      <Label>Choose your occasion</Label>
      <Form.Item 
       name={'occasion'}>
        <Select
          placeholder="Occasion"
          optionLabelProp="label"
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
          optionLabelProp="label"
          onSearch={search}
        >
        {hashTags && hashTags.map(hashTag => 
          <Option value={hashTag.name} label={hashTag.name}>
          </Option>
        )}
        </Select>
      </Form.Item>

      <Form.Item 
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  </Container>
}