import React, {SyntheticEvent, useState} from 'react';
import { Navigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/api/authorization/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        setRedirect(true);
    }

    if(redirect) {
        return <Navigate to="/" />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Sign In</h1>

            <input type="email" className="form-control" placeholder="Email" required
                   onChange={e => setEmail(e.target.value)}
            />
            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
        </form>
    )
};

export default Login;