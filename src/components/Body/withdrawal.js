import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PostData from '../../components/actions/utils';


const Withdraw = (props) => {
	const [amount, setAmount] = useState(0)
	const dispatch = useDispatch()

	const dispatchPostData = () => {PostData("http://bankasugo.herokuapp.com/withdraw", {amount : amount})}

	

	return (
		<>
	    <br/>
	    <div>
		    <div className="col-md-12 d-flex justify-content-center">
		      <div className="row d-flex justify-content-center" style={{width: '70%', marginTop : '50px', backgroundColor : 'transparent', borderRadius : '5px'}}>

		        <h2 className="text-center" style={{marginBottom:"50px"}}> Withdrawal  </h2>

		        <div className="d-flex justify-content-center">
		        	<input 
		        	value={amount}
		        	onChange={e => setAmount(e.target.value)}
		        	type="text" 
		        	placeholder="Enter amount" 
		        	style={{padding: "10px", fontSize: "17px", color:"black"}} 
		        	/> 
		        </div>
		        <br/>
		        <p></p>
		        <div className="col-md-6 d-flex justify-content-center">
		        	<button onClick={() => dispatchPostData()} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", float:"left"}}> Proceed </button>
		    	</div>
		        
		      </div>
		    </div>
		    
	    </div>
	    </>
		)
}


export default Withdraw;
