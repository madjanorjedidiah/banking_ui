import React, { useState, useEffect, useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Modal from './modal';
import Withdraw from './withdrawal';


const DepositTypes = (props) => {
   const [act, setAct] = useState("")
   const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [accntNumber, setAccntNumber] = useState("")
   const [amount, setAmount] = useState("")
   const [bankN, setBankN] = useState("")
   const [bankB, setBankB] = useState("")
   const [success, setSuccess] = useState("")
   const [error, setError] = useState("")
   const [fromAccount, setFromAccount] = useState("")
   const [toAccount, setToAccount] = useState("")
   const [receipientAccntN, setReceipientAccntN] = useState("")
  const modal_show = useSelector(state => state.modal_reducer)
  

//  572d5ab4f3a646f9168726c3fc514b933b382da6

   function backTo(){
    return navigate('/transact')
   }

   function getModal(){
    dispatch({type : "show"})
   }

   function onClose(){
    dispatch({
      type : 'hide'
    })
   }

  function onContinue(){
    dispatchSendDeposit()
    onClose()
  }


  function dispatchSendDeposit(){
    var select_element = document.getElementById('deps');
    var selected_value = select_element.options[select_element.selectedIndex].value
    if (selected_value == 'cash'){
      var data = {
        amount : amount,
        account_number : accntNumber
      }
      return sendDeposit("http://bankasugo.herokuapp.com/cash", data);
    }
    else if (selected_value == 'cheque'){
      var data = {
        amount : amount,
        account_number : accntNumber,
        bank_name : bankN,
        bank_branch : bankB,
        bank_account_number : receipientAccntN
      }
      return sendDeposit("http://bankasugo.herokuapp.com/cheque", data);
    }
    else if (selected_value == 'own_account'){
      var data = {
        sender_account_number : fromAccount,
        amount : amount,
        reciever_account_number : toAccount
      }
      return sendDeposit("http://bankasugo.herokuapp.com/wallet_to_wallet", data);
    }
    else{
      return false;
    }
  }

  async function sendDeposit(url, deposit_data){
    try {
      let res = await fetch(url, {
        method : 'POST',
        body : JSON.stringify(deposit_data),
        headers : {'Content-Type': 'application/json', 'Authorization': 'Token 572d5ab4f3a646f9168726c3fc514b933b382da6'}
      }).then(response => {
        if (response.status === 200){
            response.json().then(json => {
            // console.log(json.message);
            setSuccess("Deposit made successfully");
            setAmount("")
            setReceipientAccntN("")
            setBankB("")
            setAccntNumber("")
            setBankN("")
            setFromAccount("")
            setToAccount("")
          })
        }
        setError(response.message)
      })
    }      
    catch (err){
      setError(err)
      // console.log(err);
    }
  }

  function GetDepositType(){    
    var select_element = document.getElementById('deps');
    var selected_value = select_element.options[select_element.selectedIndex].value
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
   
   const CashDeposit = () => {
      return (
        <>
          <br/>
          <div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <h4 className="text-center col-md-12" style={{marginBottom:"20px", width:"100%"}}> Please fill the form  </h4>
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" 
              onMouseEnter={e=>e.target.focus()}
              placeholder="Enter your account number"
              onChange={(event) => setAccntNumber(event.target.value)}  
              value={accntNumber} 
              style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text" 
              onMouseEnter={e=>e.target.focus()}
              placeholder="Enter amount"
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              style={{marginBottom:"10px", padding: "10px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <button onClick={() => getModal()} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"150px", }}> Proceed </button>
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
              <input type="text"
              onMouseEnter={e=>e.target.focus()} 
              value={accntNumber} 
              onChange={(e) => setAccntNumber(e.target.value)}
              placeholder={accntNumber ? accntNumber : "Enter your account number"} 
              style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <h4 className="text-center col-md-12" style={{marginBottom:"20px", width:"100%"}}> Receipient Details  </h4>
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text"
              onMouseEnter={e=>e.target.focus()} 
              value={bankN} 
              onChange={(e) => setBankN(e.target.value)}
              placeholder={bankN ? bankN : "Enter bank name"} 
              style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text"
              onMouseEnter={e=>e.target.focus()} 
              value={bankB} 
              onChange={(e) => setBankB(e.target.value)}
              placeholder={bankB ? bankB : "Enter bank branch"} 
              style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text"
              onMouseEnter={e=>e.target.focus()} 
              value={receipientAccntN} 
              onChange={(e) => setReceipientAccntN(e.target.value)}
              placeholder={receipientAccntN ? receipientAccntN : "Enter receipient account number"} 
              style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input type="text"
              onMouseEnter={e=>e.target.focus()} 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              placeholder={amount ? amount : "Enter amount"} 
              style={{marginBottom:"10px", padding: "15px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <button onClick={() => getModal()} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"150px", }}> Proceed </button>
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
              <input 
              type="text" 
              value={fromAccount}
              onChange={e => setFromAccount(e.target.value)}
              onMouseEnter={e=>e.target.focus()} 
              placeholder="From Account" 
              style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input 
              type="text"
              value={toAccount} 
              onChange={e => setToAccount(e.target.value)}
              onMouseEnter={e=>e.target.focus()} 
              placeholder="To Account "
              style={{marginBottom:"15px", padding: "10px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <input 
              type="text"
              value={amount} 
              onChange={e => setAmount(e.target.value)}
              onMouseEnter={e=>e.target.focus()} 
              placeholder="Enter amount" 
              style={{marginBottom:"10px", padding: "10px", fontSize: "17px", color:"black", }} />
            </div>
            <div className="dd col-md-12 d-flex justify-content-center">
              <button onClick={() => getModal()} style={{backgroundColor:"#347ecf", padding: "10px", fontSize: "25px", color:"white", width:"150px", }}> Proceed </button>
            </div>
          </div>   
          </>
      )
    }   

   return (
    <div style={{marginBottom: '120px'}}>
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
        <div className="d-block  d-flex justify-content-center">
          {act === "" ? "" : <GetDepositType/>}
        </div>
     </div>
     <div className="col-md-12 res d-flex justify-content-center">
       {success ? <div bg-success text-white>{success}</div> : <div bg-danger text-white>{error}</div> }
     </div>
     {modal_show ? <Modal onClose={() => onClose()} onContinue={() => onContinue()} /> : ''}
  </div>
    )
    }



export default DepositTypes;