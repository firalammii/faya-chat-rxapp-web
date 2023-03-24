import React from 'react';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <span className='logo'>Lama Chat App</span>
                <span className='title'>Login</span>
                <form>

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
                <p>have no account ? <span>Create one</span></p>

            </div>

        </div>
    );
};

export default Login;