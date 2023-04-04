import moment from 'moment';

const Message = ({ message, user }) => {

    return (
        <div className='message-obj'>
            <img src={user.pp} alt="" />
            <div className='message-n-time'>
                <p className='message'>{message.message}</p>
                <span className='time'>{moment(message.ceatedOn).fromNow()}</span>
            </div>
        </div>
    );
};

export const Message2 = ({ message, user }) => {
    return (
        <div className='message1'>
            <div className='last-message-n-time'>
                <p>{message.message}</p>
                <span className='time'>{moment(message.createdOn).fromNow()}</span>
            </div>
            <img src={user.pp} alt="" />
        </div>
    );
};

export default Message;