import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const [friends, setFriends] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        if (!searchKey) setFriends([]);
        else handleSearch();
    }, [searchKey]);

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const users = useSelector(state => state.users.users);
    const currentUser = useSelector(state => state.users.currentUser);

    const handleSearch = async () => {
        try {
            const withoutCurrentUser = await users.filter(user => user._id !== currentUser._id);
            const withSearchKey = await withoutCurrentUser.filter(user => user.displayName.match(searchKey));
            setFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='sidebar'>
            <div className='search-bar'>
                <input
                    className='search-input'
                    type="text"
                    placeholder='search contact'
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className='chat-friends'>
                {
                    friends.length > 0 &&
                    friends.map(user => <div key={user._id} className="chat">
                        <img src={user.pp} alt='' />
                        <div className='username-n-last-message'>
                            <span className='username'>{user.displayName}</span>
                            <p className='last-message'>Hello</p>
                        </div>
                    </div>)
                    //when i have sth to search it overrides the ealier display 
                }
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Taylor</span>
                        <p className='last-message'>hy</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Gray</span>
                        <p className='last-message'>Hello</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Black</span>
                        <p className='last-message'>love ya</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Red</span>
                        <p className='last-message'>see you</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Taylor</span>
                        <p className='last-message'>hy</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Gray</span>
                        <p className='last-message'>Hello</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Black</span>
                        <p className='last-message'>love ya</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Red</span>
                        <p className='last-message'>see you</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Taylor</span>
                        <p className='last-message'>hy</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Gray</span>
                        <p className='last-message'>Hello</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Black</span>
                        <p className='last-message'>love ya</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Red</span>
                        <p className='last-message'>see you</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Taylor</span>
                        <p className='last-message'>hy</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Gray</span>
                        <p className='last-message'>Hello</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Black</span>
                        <p className='last-message'>love ya</p>
                    </div>

                </div>
                <div className="chat">
                    <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>Red</span>
                        <p className='last-message'>see you</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;