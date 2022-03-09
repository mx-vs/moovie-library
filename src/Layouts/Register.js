import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../Components/Button";
import Label from "../Components/Label";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
  width: 100%;
  margin-top: 40px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 30px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label text="Register" title></Label>
          <Label text="Email"></Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <Label text="Password"></Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <Button width="100%" height="35px" text="Register"></Button>
          <Link to="/login">
            <Label text="Have an account? Login"></Label>{" "}
          </Link>
        </Form>
      </Wrapper>
    </>
  );
};

export default Register;
