import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { Navigate } from "react-router-dom";

const Register = () => {
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState(false)
    const {createUser, registerWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(name, email, password);

        if(password.length < 6 ) { 
            setPasswordError('Please provide at least 6 character')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at lease two uppercase');
            return;
        }
       
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('Please provide at least one special character');
            return;
        }
        setPasswordError('');

        createUser(email, password)
        .then(result => {
            const user = result.user;
            setSuccess(true)
            console.log(user)
        })
        .catch(error => {
            console.error('Register error', error);
            setPasswordError(error.message)
            
        })
    }

    const handleGoogleRegister = () => {
        registerWithGoogle()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error('error', error)
        })
        navigate('/home')
    }
    return (
        <div className='w-50 mx-auto mb-5'>
            <h1>Please Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>Already have an account? <Link to='/login'>Please Login</Link></p>
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>Registered Successfully</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button><br /><br />
                <Button onClick={handleGoogleRegister} variant="primary" type="submit">
                        Register With Google
                </Button>
            </Form>

        </div>
    );
};

export default Register;