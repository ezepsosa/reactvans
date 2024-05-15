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
import { FormData } from "./types";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const shouldLogin = useLocation().state;
  const navigate = useNavigate();
  const [errors, setErrors] = useState<boolean>();
  const [buttonMessage, setButtonMessage] = useState<string>("Sign in");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setButtonMessage("Loggin in ...");
    e.preventDefault();
    try {
      const result = await loginUser(loginFormData);
      localStorage.setItem("usertokenlogged", result.token);
      setErrors(false);
      navigate(shouldLogin.location ? shouldLogin.location : "/host", {
        replace: true,
      });
    } catch (err) {
      setErrors(true);
      console.log(err);
    } finally {
      setButtonMessage("Sign in");
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
      {shouldLogin.message && (
        <Text color="#ff5959">{shouldLogin.message}</Text>
      )}
      <Headline>Sign in to your account</Headline>
      {errors && (
        <Text color="#ff3838">No user found with those credentials !</Text>
      )}
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
        <Button
          text={buttonMessage}
          mediaheight="3rem"
          mediawidth="14rem"
          backgroundcolor={buttonMessage == "Sign in" ? "#ff8c38" : "#ea6707"}
          hoverbackgroundcolor={
            buttonMessage == "Sign in" ? "#ff8c38" : "#ea6707"
          }
        ></Button>
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
