import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const Registration = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()

	const register = (e) => {
		e.preventDefault();
		dispatch({
			type : 'register',
			payload : {id:'1',name, email, password}
		})
	}

	return (
			<form style={{backgroundColor : "#e7e7e7", padding:"50px", borderRadius : "5px"}}>
		        <div className="input-container">
		         	<label style={{margin:"15px"}}>Name </label>
			        <input
			          type="text"
			          value={name}
			          placeholder="Full Name"
			          onChange={(e) => setName(e.target.value)}
			        />
				</div>
				<div className="input-container">
		         	<label style={{margin:"15px"}}>Email </label>
			        <input
			          type="text"
			          value={email}
			          placeholder="Email"
			          onChange={(e) => setEmail(e.target.value)}
			        />
				</div>
				<div className="input-container">
		         	<label style={{margin:"15px"}}>Password </label>
			        <input
			          type="password"
			          value={password}
			          placeholder="Password"
			          onChange={(e) => setPassword(e.target.value)}
			        />
			    </div>
			    <div className="input-container">
		         	<label style={{margin:"15px"}}>Confirm Password </label>
			        <input
			          type="password"
			          value={confirmPassword}
			          placeholder="Password"
			          onChange={(e) => setConfirmPassword(e.target.value)}
			        />
			    </div>
		        <button onClick={register}>Sign Up</button>
		    </form>
		    
		)
}


export default Registration;