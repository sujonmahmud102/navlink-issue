import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handlePasswor = (e) => {
        e.preventDefault();
        const form = e.target;
        const passwordType = form.password.type;
        console.log(passwordType)

    }
    const handlePassType = (e) => {
        e.preventDefault();
        const form = e.target;
        const passwordType = form.password.type;
        if (passwordType === 'password') {
            passwordType = 'text'
        }
    }

    return (
        <Container className='mx-auto w-25'>
            <h3 className='text-center mt-4'>Login your account</h3>
            <Form onSubmit={handlePasswor} className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                    <Form.Text className="">
                        <p onClick={handlePassType} className='mt-2'>Show Password</p>
                    </Form.Text>
                </Form.Group>
                <Button variant="secondary w-100" type="submit">
                    Login
                </Button>
                <br />
                <p className='mt-2 text-center'>
                    Dont't Have An Account ? <Link className='text-danger' to='/register'>Register</Link>
                </p>
                <br />
                <Form.Text className="text-success">
                    ss
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    dd
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;