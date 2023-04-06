import moment from 'moment';

export const MyMessage = ({ message, user }) => {

    return (
        <div className='my-message'>
            <div className='last-message-n-time'>
                <p>{message.message}</p>
                <span className='time'>{moment(message.createdOn).fromNow()}</span>
            </div>
            <img src={user.pp} alt="" />

        </div>
    );
};

export const TheirMessage = ({ message, user }) => {
    return (
        <div className='their-message'>
            <img src={user.pp} alt="" />
            <div className='message-n-time'>
                <p className='message'>{message.message}</p>
                <span className='time'>{moment(message.ceatedOn).fromNow()}</span>
            </div>
        </div>
    );
};
