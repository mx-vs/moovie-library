import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 350px;
	width: 100%;
	margin-top: 40px;
`;

const Form = styled.form`
	margin: 0 auto;
	width: 500px;
	height: 330px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
	max-width: 100%;
	padding: 11px 13px;
	background: #f9f9fa;
	color: #24292f;
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

const Register = ({ setCurrentUserEmail }) => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.currentTarget;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const handleRegister = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				localStorage.setItem('currentUser', email);
				setCurrentUserEmail(email);
				navigate('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode) {
					alert(errorMessage);
				}
			});
	};

	return (
		<>
			<Wrapper>
				<Form onSubmit={handleRegister}>
					<Text text="Register" title="true" />
					<Text text="Email" />
					<Input type="email" name="email" value={email} onChange={(e) => handleChange(e)} />
					<Text text="Password" />
					<Input
						type="password"
						name="password"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
					<Button width="100%" height="35px" text="Register" />
					<Link to="/login">
						<Text text="Have an account? Login" />
					</Link>
				</Form>
			</Wrapper>
		</>
	);
};

export default Register;
