import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const { push } = useHistory();

	const [formValues, setFormValues] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const login = e => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', formValues)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				push('/bubblepage');
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<form onSubmit={login}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" name="username" value={formValues.user} onChange={handleChange} />
				<label htmlFor="password">Password</label>
				<input type="text" id="password" name="password" value={formValues.password} onChange={handleChange} />
				<button type="submit">login</button>
			</form>
		</>
	);
};

export default Login;
