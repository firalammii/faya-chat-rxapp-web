
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Search = ({ setFriends }) => {

    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        if (!searchKey) setFriends([]);
        else handleSearch();
    }, [searchKey]);

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const users = useSelector(state => state.users.users);
    const currentUser = useSelector(state => state.users.currentUser)

    const handleSearch = async () => {
        try {
            const withoutCurrentUser = await users.filter(user => user._id !== currentUser._id);
            const withSearchKey = await withoutCurrentUser.filter(user => user.displayName.match(searchKey));
            setFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    }

    return (
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
    );
};

export default Search;