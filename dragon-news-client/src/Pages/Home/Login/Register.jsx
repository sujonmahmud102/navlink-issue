import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='mx-auto w-25'>
            <h3 className='text-center mt-4'>Register your account</h3>
            <Form className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accecpt Terms & Conditions" />
                </Form.Group>
                <Button variant="secondary w-100" type="submit">
                    Register
                </Button>
                <br />
                <p className='mt-2 text-center'>
                    Already Have An Account ? <Link className='text-danger' to='/login'>Login</Link>
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

export default Register;