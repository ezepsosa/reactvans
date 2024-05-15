import { useState, ChangeEvent, FormEvent } from "react";
import { Container, ContainerText, Form, Input } from "./styles";
import { Headline, Text } from "../../components/General/styles";
import { Button } from "../../components/Button";
import { useLocation } from "react-router-dom";

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(loginFormData);
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
      </ContainerText>
    </Container>
  );
}
