import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createUser } from '../actions/usersAction';

const Register = () => {
    const [user, setUser] = useState({
        username: '', email: '', pwd: '', pp: ''
    });
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        try {
            const { username, email, pwd } = user;
            if (!username || !email || !pwd) {
                throw error;
            }
            dispatch(createUser(user));
            setUser({ username: '', email: '', pwd: '', pp: '' });
            navigate('/login');
            setError(false);
        } catch (err) {
            setError(true);
            console.log(err.message);
        }

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const { username, email, pwd, pp } = user;

    return (
        <div className='form-container'>
            {/* <img src={imgState} alt='' /> */}
            <div className='form-wrapper'>
                <span className='logo'>Lama Chat App</span>
                <span className='title'>Register</span> <hr />
                {error && <div className='error'>
                    <p>Soryy! problem occurred</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <input
                        name='username' type='text' placeholder='username' className='inputs'
                        value={username}
                        onChange={handleChange}
                    />
                    <input
                        name='email'
                        type='email' placeholder='email' className='inputs'
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        name='pwd'
                        type='password' placeholder='password' className='inputs'
                        value={pwd}
                        onChange={handleChange}
                    />

                    <div className='inputs' >
                        <FileBase value={pp} type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, pp: base64 })} />
                    </div>

                    <button>Sign up</button>
                </form>
                {error && <div className='error'>
                    <p>Soryy! problem occurred</p>
                </div>}
                <p>have account already? <Link to='/login'>Login</Link></p>

            </div>

        </div>
    );
};

export default Register;