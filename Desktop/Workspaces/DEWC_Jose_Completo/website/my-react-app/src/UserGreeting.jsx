import PropTypes from 'prop-types';

function UserGreeting (props)  {

    const welcomeMessage =<h2 className='welcome-message'>
                            Welcome {props.username}.
                            </h2>;
    const loginPromt = <h2 className='login-promt'>
                        Please log in to continue.
                        </h2>
    return (
        props.isLoggedIn ?  welcomeMessage : loginPromt
                            
    );
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    username:"Guest",
    isLoggedIn: false
}

export default UserGreeting;