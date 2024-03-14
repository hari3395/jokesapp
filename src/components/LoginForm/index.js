import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const handleSubmit = event => {
    event.preventDefault()

    if (email === 'srujaya@gmail.com' && password === '8096460264') {
      // Redirect to home page or show success message
      navigate('/home')
      alert('Login successful!')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Login</h2>
          {error && <p>{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className='mt-4'>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm; 