import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import './Register.css'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword]  = useState("")
    const history = useHistory()

        const Register = e =>{
        e.preventDefault();
        // firebase login :
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            // if succesfully created a new acc
            console.log('auth');
         // 2nd step of redirecting user to the home page after logging in/signing up

            if (auth){
                history.push('/')
            }
        })
        .catch(error=> alert(error.message))

    }


    return (
        <div className="register">
            <Link to="/">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt=""  className="login-logo"/>
            </Link>
            <div className="register-container">
        
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
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Set a password</Form.Label>
                        {/* set email address */}
                        <Form.Control type="password" placeholder="Enter password"
                         value={password} onChange={e=> setPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                        "Password must be at least 6 characters"
                        </Form.Text>
                        
                    </Form.Group>
   
                    <Button type="submit"
                    onClick={Register}>Register</Button>
        </Form>
        </div>
            
        </div>
    )
}

export default Register
