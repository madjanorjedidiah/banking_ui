import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";



const OwnAccountDeposit = () => {

	return (
		<>
	    <br/>
	    <div className="col-md-12 d-flex justify-content-center">
	      <div className="row d-flex justify-content-center" style={{width: '70%', marginTop : '50px', backgroundColor : 'transparent', borderRadius : '5px'}}>

	        <h2 className="text-center" style={{marginBottom:"50px"}}> Deposits  </h2>

	        <div className="d-flex justify-content-center">

	        	<select id="deps" className="d-flex justify-content-center form-control col-md-12" style={{width:"50%"}}>
	        		<option value=""> Select a deposit type </option>
	        		<option value="cash"> Cash </option>
	        		<option value="cheque"> Cheque </option>
	        		<option value="own_account"> From own account </option>
	        	</select>
	        </div>
	        <br/>
	        <p></p>
	        <h4 className="text-center" style={{marginBottom:"50px"}}> Please fill the form  </h4>

	        <div style={{width:"50%"}}>
	        	<input type="text" style={{padding: "10px", fontSize: "17px", color:"black", width:"100px", float:"left"}} />
	      	</div>
	        <button onClick="" style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"100px", float:"left"}}> Proceed </button>
	      </div>
	    </div>
	    </>
	)
}


export default OwnAccountDeposit;