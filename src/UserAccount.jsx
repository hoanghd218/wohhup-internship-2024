import PropTypes from 'prop-types'

function UserAccount(props){

   const loginSuccesfull = <h2>Welcome back, {props.username}</h2>

   const loginfailed = <h2>Try again</h2> 

   return(props.isLoggedIn ? loginSuccesfull : loginfailed) 
}

UserAccount.proptypes = {
   isLoggedIn: PropTypes.bool,
   username: PropTypes.string,
}

export default UserAccount