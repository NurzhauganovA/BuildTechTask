import React, {useState, SyntheticEvent} from 'react';
import { Navigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    function getCookie(name: string): string {
        const nameLenPlus = (name.length + 1);
        // @ts-ignore
        return document.cookie.split(';').map(c => c.trim()).filter(cookie => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
        }).map(cookie => {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null;
    }

    const csrftoken = getCookie('csrftoken');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/api/login', {
            method: "POST",
            mode: 'cors',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }),
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