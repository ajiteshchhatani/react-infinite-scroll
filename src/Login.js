import * as React from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router';

export function Login() {
    const navigate = useNavigate();
    const { authed, login } = useAuth();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        if(username === 'foo' && password==='bar') {
            login().then(() =>  {
                navigate("/home");
            });
        }
    }

    return (
        <div className="form-wrapper">
        <form className="login">
            <input type="text" placeholder="Username" name="username" value={username} onChange={handleUsernameChange} />
            <input type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />
            <button type="button" onClick={handleSubmit}>Login</button>
        </form>
        </div>
    )
}