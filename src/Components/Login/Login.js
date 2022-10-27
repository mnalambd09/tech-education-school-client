import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [user, setUser] = useState({});
    const [passwordError, setPasswordError] = useState('')
    const {signIn, registerWithGoogle, registerWithgithub} = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        signIn(email, password)
        console.log(email, password)
        .catch(error => {
            setPasswordError(error.message)
        })
        
    }
    
    const handleGoogleRegister = () => {
        registerWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    const handlegithubRegister = () => {
        registerWithgithub()
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
        })
        .catch(error => {
            console.error(error)
        })
        
    }

    return (
        <div className='w-50 mx-auto mb-5'>
            <h1>Please Login</h1>
            <Form onSubmit={handleSubmit}>
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
                    <p>You don't have an account? <Link to='/register'>Please Register</Link></p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br /><br />
                <p>{user.email}</p>
                <p>{user.displayName}</p>
                <Button onClick={handleGoogleRegister} variant="primary" type="submit">
                    Login With Google <FaGoogle />
                </Button>
                <br /><br />
                <Button onClick={handlegithubRegister} variant="primary" type="submit">
                Login With Github <FaGithub />
                </Button>
            </Form>

        </div>
    );
};

export default Login;