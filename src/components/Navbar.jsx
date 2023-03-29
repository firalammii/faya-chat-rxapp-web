
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/usersAction';

const Navbar = () => {

    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="display-name-n-btn">
                <img src={currentUser.pp} alt="m" />
                <p className="username">{currentUser.displayName}</p>
                <button className="logout" onClick={() => dispatch(logout())}>Log out</button>
            </div>
        </div>
    );
};

export default Navbar;