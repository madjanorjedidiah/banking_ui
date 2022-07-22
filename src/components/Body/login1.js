import {useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import React from "react";


const Login = () => {
	const userRef = useRef()
	const errRef = useRef()

	const [email, setEmail] = useState();
	const [password, setPassword] = useState("");
  	const [errMsg, setErrMsg] = useState("");
  	const [success, setSuccess] = useState(false);

  	useEffect(() => {
  		userRef.current.focus();
  	})

  	useEffect(() => {
  		setErrMsg('')
  	}, [email, password])

  	return (
  		<section>
  			<p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

  			<h2> Sign In </h2>
  			<form onSubmit={"handleSubmit"} style={{backgroundColor : "#e7e7e7", padding:"50px", borderRadius : "5px"}}>
		        <div className="input-container">
		         	<label style={{margin:"15px"}}>Email </label>
			        <input
			          type="text"
			          value={email}
			          ref = {userRef}
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
			          ref = {userRef}
			          onChange={(e) => setPassword(e.target.value)}
			        />
			    </div>
		        <button type="submit">Log In</button>

		        
	      	</form>
	      	<p>
	      	Need an Account?<br/>
	      	<span className="line"><Link to="/signup">Sign Up</Link></span>
	      	</p>
  		</section>

  		)
}


export default Login;