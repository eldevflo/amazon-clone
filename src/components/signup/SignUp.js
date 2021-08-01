import { Container } from '@material-ui/core'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import './SignUp.css'

function SignUp() {
    const history= useHistory()
    return (
        <div>
            
            <Container fluid="md,sm" className="signup-container">
                <h3>Sign in for the best experience</h3>
             
                <Button className="signup-btn " onClick={e=> history.push('/register')}>Sign in securely</Button>
            </Container>      
        </div>
    )
}

export default SignUp
