import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import Button from '../../components/Button';
import Text from '../../components/Text';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 550px;
	margin: 70px auto;
	padding: 20px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
	background: rgba(255, 255, 255, 0.8);
	border-radius: 20px;
`;

const Input = styled.input`
	height: 20px;
	width: 90%;
	font-size: 18px;
	color: #2a2a29;
	margin-right: 10px;
	border-radius: 20px;
	margin: 10px;
	padding: 10px;
	border: 0;
	text-align: center;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
	:focus,
	:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
		outline: none;
	}
`;

const Register = ({ setCurrentUserEmail }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let navigate = useNavigate();

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
		<StyledForm onSubmit={handleRegister}>
			<Text fontSize="25px" textAlign="center" margin="10px" text="Register" />
			<Text fontSize="20px" textAlign="left" margin="10px" text="Email" />
			<Input type="email" name="email" value={email} onChange={(e) => handleChange(e)} />
			<Text fontSize="20px" textAlign="left" margin="10px" text="Password" />
			<Input type="password" name="password" value={password} onChange={(e) => handleChange(e)} />
			<Button width="60%" height="35px" margin="20px" text="Register" />
			<Link to="/login">
				<Button width="290px" height="35px" margin="10px" text="Have and account? Login" />
			</Link>
		</StyledForm>
	);
};

export default Register;
