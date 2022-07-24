import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";



const CheckBalance = () => {
	const [pin, setPin] = useState(0)

	return (
		<>
	    <br/>
	    <div>
		    <div className="col-md-12 d-flex justify-content-center">
		      <div className="row d-flex justify-content-center" style={{width: '70%', marginTop : '50px', backgroundColor : 'transparent', borderRadius : '5px'}}>

		        <h2 className="text-center" style={{marginBottom:"50px"}}> Check Balance  </h2>

		        <div className="d-flex justify-content-center">
		        	<input type="text" placeholder={pin ? pin : "Enter security pin"} style={{padding: "10px", fontSize: "17px", color:"black", float:"left"}} /> 
		        </div>
		        <br/>
		        <p></p>
		        <div className="col-md-6 d-flex justify-content-center">
		        	<button onClick="" style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", float:"left"}}> Proceed </button>
		    	</div>
		        
		      </div>
		    </div>
		    
	    </div>
	    </>
		)
}


export default CheckBalance;
