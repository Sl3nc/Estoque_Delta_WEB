import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styless.css';

export const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [psswrd, setPsswrd] = useState("");
    const [viewPswrd, setViewPswrd] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${email}\nSenha: ${psswrd}`)
        navigate('/')
    }

    return (
        <section id='sectionForm'>
            <Form id='signForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={viewPswrd ? 'text' : 'password'} placeholder="Password"
                        value={psswrd} onChange={(e) => { setPsswrd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" onClick={() => { setViewPswrd(!viewPswrd) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </section>
    );
};