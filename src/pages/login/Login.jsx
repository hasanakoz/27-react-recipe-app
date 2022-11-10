import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.png";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "admin",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>RECIPE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter username" type="text" />
          <StyledInput placeholder="password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
