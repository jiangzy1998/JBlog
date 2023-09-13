import Form, { Field, useForm } from "@/components/Form";
import Input from "@/components/Input";
import { fetchAPI } from "@/utils/apis/fetch";
import { useEffect } from "react";

const emailRules = { required: true, message: "请输入邮箱！" };
const passworRules = { required: true, message: "请输入密码！" };
//TODO csrf

const Login: React.FC = () => {

  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue({ email: 'default' });
  }, []);

  const onFormFinish = async (values: any) => {
    console.log(values.email);
    const bodyValue = {
      email:values.email,
      password:values.password
    }
    const data = await fetchAPI("auth/login", 'POST', bodyValue)
    console.log(data);
  }

  return (
    <Form
      onFinish={onFormFinish}
      onFinishFailed={(err) => {
        console.log("err", err);
      }}
      style={{ display: 'flex' }}
      className="jzy-vertical"
      form={form}
    >
      <Field name={"email"} rules={[emailRules]}>
        <Input placeholder="邮箱" />
      </Field>
      
      <Field name={"password"} rules={[passworRules]}>
        <Input placeholder="密码" />
      </Field>
      <button type="submit">提交</button>
    </Form>
  )
}

export default Login;
