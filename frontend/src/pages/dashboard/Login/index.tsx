import Form, { Field, useForm } from "@/components/Form";
import Input from "@/components/Input";
import { useEffect } from "react";

const emailRules = { required: true, message: "请输入邮箱！" };
const nameRules = { required: true, message: "请输入用户名！" };
const passworRules = { required: true, message: "请输入密码！" };

const Login: React.FC = () => {

  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue({ email: 'default' });
  }, []);

  const onFormFinish = (values: any) => {
    console.log(values.email);
    const bodyValue = {
      email:values.email,
      name:values.name,
      password:values.password
    }
    fetch("http://127.0.0.1:4000/api/v1/auth/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyValue)
    }).then(
      (response) => {
        return response.json();
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch(() => {

    })
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
      <Field name={"name"} rules={[nameRules]}>
        <Input placeholder="用户名" />
      </Field>
      <Field name={"password"} rules={[passworRules]}>
        <Input placeholder="密码" />
      </Field>
      <button type="submit">提交</button>
    </Form>
  )
}

export default Login;
