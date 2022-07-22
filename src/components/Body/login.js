import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import AllTransactions from '../../components/Body/transactions';


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("")
  // const isLogIn = useSelector(state => state.logginReducer)
  const dispatch = useDispatch()

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://bankasugo.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({
        		email: email,
          	password: password          
        }),
        headers: {
		    'Content-Type': 'application/json',
		}
      });
      let resJson = await res.json();
      if (res.status === 200) {
      	localStorage.setItem("loggedIn_user", JSON.stringify(resJson))
        setUser(localStorage.getItem("loggedIn_user"));
        dispatch({
          type : 'isLoggedIn',
          payload : {user}
        })
        dispatch({type : 'login'})
        setMessage("User successfully logeed in");
        <div> <AllTransactions/> </div>
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  if (user){
  	return (<div> <AllTransactions/> </div>)
  }

  return (
    <div className="col-md-12">
		<div className="form d-flex justify-content-center col-md-12" style={{marginTop:"50px"}}>     	
	      	<form onSubmit={handleSubmit} style={{backgroundColor : "#e7e7e7", padding:"50px", borderRadius : "5px"}}>
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
			          type="text"
			          value={password}
			          placeholder="Password"
			          onChange={(e) => setPassword(e.target.value)}
			        />
			    </div>
		        <button type="submit">Log In</button>

		        <div className="message">{message ? message : null}</div>
	      	</form>
	    </div>
    </div>
  );
}

export default LoginForm; 




