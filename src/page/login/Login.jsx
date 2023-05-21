import { Button, Card, Checkbox, Form, Input, Space } from "antd";

export function Login() {
  function onFinish(val) {
    console.log(val);
  }
  return (
    <>
      <div className={"flex items-center justify-center bg-blue-300 h-screen"}>
        <div
          className={
            "w-1/3 text-center h-96 container mx-auto transform translate-y-1/5"
          }
        >
          <Card className={"h-full shadow-2xl"}>
            <div className={"text-4xl text-amber-400 font-bold"}>LOGO</div>
            <Form
              onFinish={onFinish}
              className={"pt-7"}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名",
                  },
                ]}
              >
                <Input size={"large"} placeholder={"请输入用户名"}></Input>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ]}
              >
                <Input.Password
                  size={"large"}
                  placeholder={"请输入密码"}
                ></Input.Password>
              </Form.Item>
              <Form.Item name={"remember"} valuePropName={"checked"}>
                <Checkbox className={"text-blue-500"}>
                  我已阅读并同意「用户协议」和「隐私条款」
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  className={"bg-blue-500 text-white"}
                  htmlType={"submit"}
                  size={"large"}
                  block
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}
