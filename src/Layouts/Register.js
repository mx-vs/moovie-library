import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Components/Button';
import Label from '../Components/Label';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
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
  margin-bottom: 0.9rem;
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
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData(Object.assign(data, { [name]: value }));
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
            value={data.email}
            onChange={handleChange}
          />
          <Label text="Password"></Label>
          <Input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Button width="100%" height="35px" text="Register"></Button>
          <Label text="Have an account? Login"></Label>
        </Form>
      </Wrapper>
    </>
  );
};

export default Register;