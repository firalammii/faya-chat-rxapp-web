import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../actions/usersAction";

const Login = () => {
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    // const users = useSelector(state => state.users);

    const users = useSelector(state => state.users.users);
    // console.log(users);

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target[0].value.trim();
        const password = e.target[1].value.trim();

        try {
            const user = await users.filter(user => (user.email === email && user.password === password))[0];
            // console.log(user);

            dispatch(login(user));
            navigate('/');
            setError(false);

        } catch (error) {
            setError(true);
            console.log(error);
        }

    }

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <span className='logo'>Lama Chat App</span>
                <span className='title'>Login</span> <hr />
                {error && <div className='error'>
                    <p>Soryy! problem occurred</p>
                </div>}
                <form onSubmit={handleLogin}>

                    <input
                        type='email' placeholder='email' className='inputs'
                    // value={ }
                    // onchange={ }
                    />
                    <input
                        type='password' placeholder='password' className='inputs'
                    // value={ }
                    // onchange={ }
                    />
                    <button>Log in</button>
                </form>
                {error && <div className='error'>
                    <p>Soryy! problem occurred</p>
                </div>}
                <p>have no account ? <Link to='/register'>Create one</Link></p>

            </div>

        </div>
    );
};

export default Login;