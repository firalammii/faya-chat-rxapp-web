import React from 'react';

const Register = () => {
    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <span className='logo'>Lama Chat App</span>
                <span className='title'>Register</span>
                <form>
                    <input
                        type='text' placeholder='display name' className='inputs'
                    // value={ }
                    // onchange={ }
                    />
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
                    <input
                        style={{ display: 'none' }}
                        type='file' id='file' className='inputs'
                    // value={ }
                    // onchange={ }
                    />
                    <label className='inputs' htmlFor='file' style={{ color: '#888', fontSize: 'small', textAlign: 'left' }}>Select Avatar</label>
                    <button>Sign up</button>
                </form>
                <p>have account already? <span>Login</span></p>

            </div>

        </div>
    );
};

export default Register;