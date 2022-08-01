import React, {useEffect, useState} from 'react';
import './header.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const Header = (props) => {

	return (
		<div className="header row ">
			<div className="d-inline-block col-md-10" style={{textAlign:'center', color :'white', fontSize: '30px'}}> BankAsUGo </div>
			{props.user_data ? <div className="d-inline-block col-md-2"><span > {props.user_data['user']} </span> <span className="d-inline-block col-md-2" onClick={() => props.logout() }>Logout</span></div> : <Link to="/login">Login</Link>}
		</div>
		)
	}

export default Header;