import { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  ContainerText,
  Form,
  Info,
  InfoContainer,
  InfoMessage,
  Input,
} from "./styles";
import { Headline, Text } from "../../components/General/styles";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../components/api";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const shouldLogin = useLocation().state;
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const result = await loginUser(loginFormData);
      localStorage.setItem("usertokenlogged", result.token);
      navigate("/host");
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Container>
      {shouldLogin && <Text color="#ff5959">{shouldLogin}</Text>}
      <Headline>Sign in to your account</Headline>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          value={loginFormData.email}
          placeholder="Email address"
        />
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          value={loginFormData.password}
          placeholder="Password"
        />
        <Button text="Sign in" mediaheight="3rem" mediawidth="14rem"></Button>
      </Form>
      <ContainerText>
        <Text>Don't have an account?</Text>
        <Text color="#ff8c38">Create one now</Text>
        <InfoContainer>
          <Info></Info>
          <InfoMessage>User: john@doe.com{"\n"}Password: Jd123</InfoMessage>
        </InfoContainer>
      </ContainerText>
    </Container>
  );
}
