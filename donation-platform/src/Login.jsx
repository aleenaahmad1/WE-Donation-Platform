import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Outlet, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login({loginState, setLoginState, users}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [loginState, setLoginState] = useState(false)
    const [loginAttempt, setLoginAttempt] = useState(false)

    function verifyUser(e){
        e.preventDefault();
        for(let i=0;i<users.length;i++){
            console.log("Checking", users[i].email, users[i].password);
            if(users[i].email==email && users[i].password==password){
                setLoginState(true)
                return;
            }
        }
        setLoginState(false);
        setLoginAttempt(true);
        return;
    }
    
    return(
        <>
        <h1 className="display-5">Login to Donate</h1>
        {loginState ? 
        <h2>You are logged in!</h2>
        : 
        <>
        <Row>
            <Col style={{marginRight: "10%"}}>
                <img src="../images/login.png" width="100%" height="85%" style={{position:'relative', marginTop:'20%'}}></img>
            </Col>
            <Col style={{marginLeft: "5%", marginTop: "5%"}}>
                <div className="my-5 px-3 login border rounded" style={{backgroundColor:"rgb(190, 223, 255)"}}>
                    <div className="login-form">
                        <Form>
                            <Form.Control className="mt-5" type="email" placeholder="Email" required onChange={()=>setEmail(event.target.value)}></Form.Control>
                            <Form.Control className="my-4" type="password" placeholder="Password" required onChange={()=>setPassword(event.target.value)}></Form.Control>
                            <button className="mb-2 border border-dark" type="submit" onClick={verifyUser}>Login</button>
                        </Form>
                        {loginAttempt && <p>Incorrect username or id. Please try again.</p>}
                        <p>Click 
                            <Link to="/Signup"> here </Link>
                        if you are a new user</p>
                    </div>
                </div>
            </Col>
        </Row>
        </>
        }
        </>
    )
}

// email = document.querySelector("input[type=text]").value
// password = document.querySelector("input[type=password]").value

