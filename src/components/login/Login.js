import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import './Login.css'

function Login() {
     const [email, setEmail] = useState("")
     const [password, setPassword]  = useState("")


    // first step of redirecting user to the home page after logging in/signing up
     const history = useHistory()

    //  sign in and register button onclick:
    const signIn = e=>{
        e.preventDefault();
        // firebase login :
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        }).catch(error=> alert(error.message))


    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt=""  className="login-logo"/>
            </Link> 

            <div className="login-container">
                <h1>sign in</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {/* set email address */}
                        <Form.Control type="email" placeholder="Enter email"
                         value={email} onChange={e=> setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password must be at least 6 characters"
                        value={password} onChange={e=> setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <Button  type="submit" className="login-btn" onClick={signIn}>
                        Sign in
                    </Button>
                    <p>By signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    </Form>
                     <p className="create-acc-call">Don't have an account yet?</p>

                     <Button  type="submit" className="register-btn" 
                     
                     onClick={e=>history.push('/register')}>
                        Create your amazon account
                    </Button>
            </div>
            
        </div>
    )
}

export default Login
