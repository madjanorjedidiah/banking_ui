import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


const DepositTypes = () => {
   const [act, setAct] = useState("")
	 const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [accntNumber, setAccntNumber] = useState("")
   const [amount, setAmount] = useState(0)
   const [bankN, setBankN] = useState("")
   const [bankB, setBankB] = useState("")
   const [receipientAccntN, setReceipientAccntN] = useState("")
  const modal_show = useSelector(state => state.modal_reducer)
  const [show, setShow] = useState(false)

   function backTo(){
   	return navigate('/transact')
   }

   function getModal(){
    dispatch({type : "show"})
    return (<Modal/>)
   }

   const CashDeposit = () => {
      return (
        <>
          <br/>
          <div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <h4 className="text-center col-md-12" style={{marginBottom:"20px", width:"100%"}}> Please fill the form  </h4>
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={accntNumber ? accntNumber : "Enter your account number"} style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={amount ? amount : "Enter amount"} style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <button onClick={() => getModal} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"150px", float:"left"}}> Proceed </button>
            </div>
          </div>   
          </>
        )
    }

    const ChequeDeposit = () => {
      return (
        <> 
          <br/>
          <div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <h4 className="text-center col-md-12" style={{marginBottom:"20px", width:"100%"}}> Depositors Details  </h4>
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={accntNumber ? accntNumber : "Enter your account number"} style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <h4 className="text-center col-md-12" style={{marginBottom:"20px", width:"100%"}}> Receipient Details  </h4>
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={bankN ? bankN : "Enter bank name"} style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={bankB ? bankB : "Enter bank branch"} style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={receipientAccntN ? receipientAccntN : "Enter receipient account number"} style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={amount ? amount : "Enter amount"} style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <button onClick={() => getModal} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"150px", float:"left"}}> Proceed </button>
            </div>
          </div>       
          </>
      )
    }

    const OwnAccountDeposit = () => {
      return (
        <>
          <br/>
          <div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <h4 className="text-center col-md-12" style={{marginBottom:"20px", width:"100%"}}> Please fill the form  </h4>
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={accntNumber ? accntNumber : "Enter your account number"} style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" placeholder={amount ? amount : "Enter amount"} style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", float:"left"}} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <button onClick={() => getModal} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"150px", float:"left"}}> Proceed </button>
            </div>
          </div>   
          </>
      )
    }

   function GetDepositType(){
   	var select_element = document.getElementById('deps');
    var	selected_value = select_element.options[select_element.selectedIndex].value
   	if (selected_value == 'cash'){
   		return (<CashDeposit/>);
   	}
   	else if (selected_value == 'cheque'){
   		return (<ChequeDeposit/>);
   	}
   	else if (selected_value == 'own_account'){
   		return (<OwnAccountDeposit/>);
   	}
   	else {
   		alert("Select a valid deposit type")
   		return false;
   	}
   }

   function SetTargetValue(e){
    e.preventDefault();
    setAct(e.target.value)
   }
   

   return (
    <div>
      <div className="col-md-12 d-flex justify-content-center" style={{marginBottom: "40px"}}>
        <div className="d-block p-2 d-flex justify-content-center col-md-12" >
          <div className="row d-flex justify-content-center" style={{width: '70%', marginTop : '50px', backgroundColor : 'transparent', borderRadius : '5px'}}>
            <h2 className="text-center" style={{marginBottom:"50px"}}> Deposits  </h2>
            <div className="d-flex justify-content-center">
              <select onChange={SetTargetValue} id="deps" className="d-flex justify-content-center form-control col-md-12" style={{width:"50%"}}>
                <option value=""> Select a deposit type </option>
                <option value="cash"> Cash </option>
                <option value="cheque"> Cheque </option>
                <option value="own_account"> From own account </option>
              </select>
              <button onClick={backTo} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"100px", marginLeft:"10px"}}> Back </button>
            </div>
          </div>
        </div>
     </div>
     <div className="col-md-12 d-flex justify-content-center">
      <div className="d-block p-2 d-flex justify-content-center">
          {act === "" ? "" : <GetDepositType/>}
      </div>
     </div>
  </div>
    )
    }



export default DepositTypes;