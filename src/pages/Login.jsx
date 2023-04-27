import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { login, logout } from "../actions/usersAction";
import { Context } from "../context-API/ContextProvider";

const Login = () => {

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const { currUser, login, logout } = useContext(Context)

    const users = useSelector(state => state.users.users);
    // const currUser = useSelector(state => state.users.currUser);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (currUser) logout();

        const email = e.target[0].value.trim();
        const pwd = e.target[1].value.trim();

        const user = await users.filter(user => (user.email === email && user.pwd === pwd))[0];
        if (user) {
            login(user);
            navigate('/');
            setError(false);
        } else setError(true);
    }

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <span className='logo'>Faya Chat App</span>
                <span className='title'>Login</span> <hr />
                {error && <div className='error'> <p>Soryy! cannot find you</p> </div>}
                <form onSubmit={handleLogin}>
                    <input type='email' placeholder='email' className='inputs' />
                    <input type='password' placeholder='password' className='inputs' />
                    <button>Log in</button>
                </form>
                {error && <div className='error'>
                    <p>It seems you don't have an account</p>
                </div>}
                <p>have no account ? <Link to='/register'>Create one</Link></p>

            </div>

        </div>
    );
};

export default Login;