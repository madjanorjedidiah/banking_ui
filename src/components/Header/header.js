import React from 'react';
import './header.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const Header = () => {
	const login = useSelector(state => state.login_reducer)
	const loggedInUser = useSelector(state => state.loggedInUser)
	const loggedOut = useSelector(state => state.logout_reducer)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const logout = () => {
		dispatch({
			type : "logout"
		})
		if (loggedOut){
			return navigate('/')
		}
	}


	console.log(loggedInUser)
	return (
	<div className="header row ">
		<div className="d-inline-block col-md-10" style={{textAlign:'center', color :'white', fontSize: '30px'}}> BankAsUGo </div>
		{login ? loggedInUser.map(user => <span className="d-inline-block col-md-1"> {user.user} </span>) : <Link to="/login">Login</Link>}
		{login ? <span className="d-inline-block col-md-2" onClick={ logout }>Logout</span> : ""}
	</div>
	)
	}

export default Header;