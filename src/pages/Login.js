import React, { useState } from 'react'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import axios from 'axios';
import { apiPrefix } from '../env/env';

const Login = ({
    onLogin
}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleClick = (e) => {
        const requestBody = {
            username,
            password
        }
        axios.post(apiPrefix + 'auth/login', requestBody).then(res => {
            const response = res.data
            if (response.errors.length) {
                setErrorMessage(response.errors);
                onLogin(false);
                console.log(response);
            } else {
                onLogin(true);
                navigate('/cars');
            }
        }).catch(err => {
            setErrorMessage("login failed, check username/password");
            console.log(err);
        })

    }


    return (
        <div className="Login">
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleClick(e)
            }}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address / Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter email/username" id="username" required onChange={handleUsernameChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="pass" required onChange={handlePasswordChange} />
                </Form.Group>

                <div className="text-danger f-12">
                    {errorMessage}
                </div>

                <Button variant="primary" className="w-100" id="login-button" type="submit" >
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
