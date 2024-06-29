import "./Login.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("收到帳密", values);
    const userInfo = {
      state: {
        id: "1",
        name: "piepie",
        token: "ey3p98urtgoihblkj8pyrowihf2345yerthdgfytguk4erfssdp79wyeirflugkhy8ilu",
      },
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate("/dashboard", userInfo);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onFinish({ username, password });
    }
  };

  return (
    <div className="login__layout">
      <div className="login__card">
        <div className="login__card2">
          <Form
            name="normal_login"
            className="login__form"
            initialValues={{
              remember: true,
            }}
            onFinish={() => onFinish({ username, password })}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="login__icon" />}
                placeholder="Username"
                className="login__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="login__icon" />}
                type="password"
                placeholder="Password"
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Item>
            <Form.Item className="login__options">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="login__checkbox">Remember me</Checkbox>
              </Form.Item>

              <a className="login__forgot">Forgot password</a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login__button">
                Log in
              </Button>
              Or <a>register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
