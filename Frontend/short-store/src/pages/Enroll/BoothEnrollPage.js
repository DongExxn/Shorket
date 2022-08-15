import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Input } from "antd";
import { TimePicker, DatePicker, Layout } from "antd";
import { Button } from "antd";
import { Form, AppLayout } from "antd";
import { UserOutlined, ShopOutlined } from "@ant-design/icons";

import axios from "axios";
<<<<<<< HEAD:Frontend/short-store/src/pages/Enroll/BoothEnrollPage.js
import styles from "./BoothEnrollPage.module.css";

=======
import {
  AutoComplete,
  Cascader,
  Checkbox,
  Col,
  InputNumber,
  Row,
  Select
} from "antd";
const { Option } = Select;
>>>>>>> 4da6f23e51d1a79ee596d4d8e086ea7695ee49bb:Frontend/short-store/src/pages/Enroll/BoothEnroll.js
const { TextArea } = Input;
const residences = [
  {
    value: "패션의류/잡화/뷰티",
    label: "패션의류/잡화/뷰티",
    children: [
      {
        value: "패션의류",
        label: "패션의류",
        children: [
          {
            value: "여성의류",
            label: "여성의류"
          }
        ]
      }
    ]
  },
  {
    value: "컴퓨터/디지털/가전",
    label: "컴퓨터/디지털/가전",
    children: [
      {
        value: "디지털",
        label: "디지털",
        children: [
          {
            value: "모바일/태블릿",
            label: "모바일/태블릿"
          }
        ]
      }
    ]
  }
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
const { RangePicker } = DatePicker;

<<<<<<< HEAD:Frontend/short-store/src/pages/Enroll/BoothEnrollPage.js
function BoothEnrollPage() {
  const [inputBoothName, setInputBoothName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputDate2, setInputDate2] = useState("");
  const [inputAbout, setInputAbout] = useState("");
  const [inputSeller, setInputSeller] = useState("");
  const [inputProduct, setInputProduct] = useState("");
  const [inputOpen, setInputOpen] = useState("");
  const [inputClose, setInputClose] = useState("");
=======
function BoothEnroll() {
  const [form] = Form.useForm();
>>>>>>> 4da6f23e51d1a79ee596d4d8e086ea7695ee49bb:Frontend/short-store/src/pages/Enroll/BoothEnroll.js

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="USD">낱개</Option>
        <Option value="CNY">세트</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website
  }));

  return (
<<<<<<< HEAD:Frontend/short-store/src/pages/Enroll/BoothEnrollPage.js
    <div className='area'>
    <Form>
      <div>
        <h2>부스 신청</h2>
        <div>
          <label htmlFor="input_name"></label>
          <Input placeholder="부스 이름" prefix={<ShopOutlined />} />
        </div>
        <div>
          <label htmlFor="input_date">
            부스 기간 : <DatePicker /> ~ <DatePicker />
          </label>
        </div>
        <div>
          <label htmlFor="input_about"></label>
          <Input
            placeholder="판매자 정보(ex: 이름/전화번호)"
            prefix={<UserOutlined />}
            name="input_seller"
            value={inputSeller}
            onChange={handleInputSeller}
          />
        </div>
        <div>
          <label htmlFor="input_about"></label>
          <TextArea
            rows={3}
            placeholder="판매상품목록"
            maxLength={6}
            name="input_seller"
            value={inputProduct}
            onChange={handleInputProduct}
          />
        </div>
        <div>
          <label htmlFor="input_date">운영 시간 : </label>
          <TimePicker.RangePicker />
        </div>
        <div>
          <label htmlFor="input_about"></label>
          <TextArea
            rows={4}
            placeholder="부스 설명"
            maxLength={6}
            onChange={onChange}
          />
        </div>
        <div>
          <Button type="primary onClick={onClickBoothEnroll}">
            부스 목록 보기
          </Button>
          <Button onClick={onClickBoothEnroll}>부스 등록하기</Button>
        </div>
        {/* <Link to="/register">회원가입</Link> */}
      </div>
=======
    <Form
      class="login-form"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86"
      }}
      scrollToFirstError
    >
      <Form.Item
        name="nickname"
        label="판매자 이름"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="boothname"
        label="부스 이름"
        rules={[
          {
            required: true,
            message: "Please input your booth name!",
            whitespace: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="상품 카테고리"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your category!"
          }
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="전화번호"
        rules={[
          {
            required: true,
            message: "Please input your phone number!"
          }
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%"
          }}
        />
      </Form.Item>

      <Form.Item
        name="donation"
        label="수량"
        rules={[
          {
            required: true,
            message: "Please input amount!"
          }
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          style={{
            width: "100%"
          }}
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="참고 사이트"
        rules={[
          {
            required: true,
            message: "Please input website!"
          }
        ]}
      >
        <AutoComplete
          options={websiteOptions}
          onChange={onWebsiteChange}
          placeholder="website"
        >
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="부스 설명"
        rules={[
          {
            required: true,
            message: "Please input Intro"
          }
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="list"
        label="판매 상품 목록"
        rules={[
          {
            required: true,
            message: "Please input product list"
          }
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="time"
        label="부스 운영 시간"
        rules={[
          {
            required: true,
            message: "Please input time"
          }
        ]}
      >
        <TimePicker.RangePicker />
      </Form.Item>

      <Form.Item
        name="date"
        label="부스 운영 기간"
        rules={[
          {
            required: true,
            message: "Please input date"
          }
        ]}
      >
        <DatePicker.RangePicker />
      </Form.Item>

      {/* <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!"
          }
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item> */}

      {/* <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the captcha you got!"
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item> */}
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement"))
          }
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          부스 등록
        </Button>
        <Button>뒤로 가기</Button>
      </Form.Item>
>>>>>>> 4da6f23e51d1a79ee596d4d8e086ea7695ee49bb:Frontend/short-store/src/pages/Enroll/BoothEnroll.js
    </Form>
    </div>
  );
}

export default BoothEnrollPage;
