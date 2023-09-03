import Form, { Field, useForm } from "@/components/Form";
import { useEffect } from "react";


const nameRules = { required:true, message:"请输入姓名！" };
const passworRules = { required:true, message:"请输入密码！" };


const Login:React.FC = () => {

  const [ form ] = useForm();

  useEffect(() => {
    form.setFieldsValue({ username:'default' });
  }, []);

  return (
    <Form
      onFinish={(values) => {
        console.log("values", values)
      }}
      onFinishFailed={(err) => {
        console.log("err", err);
      }}
      form={form}
      >
      <Field name={"username"} rules={[nameRules]}>
        <input type="input" placeholder="用户名" />
      </Field>
      <Field name={"password"} rules={[passworRules]}>
        <input placeholder="密码" type="password" />
      </Field>
      <button type="submit">提交</button>
    </Form>
  )
}

export default Login;
