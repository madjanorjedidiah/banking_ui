import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CashDeposit from './cash_deposit';
import ChequeDeposit from './cheque_deposit';
import OwnAccountDeposit from './own_account_deposit';



const DepositTypes = () => {

	const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   function backTo(){
   	return navigate('/transact')
   }

   function getDepositType(){
   	var select_element = document.getElementById('deps')
    // select_element.addEventListener('change', () => {
    var	selected_value = select_element.options[select_element.selectedIndex].value
   	if (selected_value == 'cash'){
   		return <CashDeposit/>;
   	}
   	else if (selected_value == 'cheque'){
   		return <ChequeDeposit/>;
   	}
   	else if (selected_value == 'own_account'){
   		return <OwnAccountDeposit/>;
   	}
   	else {
   		alert("Select a valid deposit type")
   		return false;
   	}
   }
   

   return (
    <>
    <br/>
    <div className="col-md-12 d-flex justify-content-center">
      <div className="row d-flex justify-content-center" style={{width: '70%', marginTop : '50px', backgroundColor : 'transparent', borderRadius : '5px'}}>

        <h2 className="text-center" style={{marginBottom:"50px"}}> Deposits  </h2>

        <div className="d-flex justify-content-center">

        	<select onChange={getDepositType} id="deps" className="d-flex justify-content-center form-control col-md-12" style={{width:"50%"}}>
        		<option value=""> Select a deposit type </option>
        		<option value="cash"> Cash </option>
        		<option value="cheque"> Cheque </option>
        		<option value="own_account"> From own account </option>
        	</select>
        </div>
        <br/>
        <p></p>
        <div style={{width:"50%"}}>
        	<button onClick={backTo} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"100px", float:"left"}}> Back </button>
      	</div>
      </div>
    </div>
    </>
    )
    }



export default DepositTypes;