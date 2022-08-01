import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './transact.css';
import balance from '../../images/balance.jpg'
import withdrawed from '../../images/withdraw.png'
import enquire from '../../images/enquire.jpg'
import deps from '../../images/deps.jpg'



const Transact = (props) => {

   const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const dispatch = useDispatch()

   return (
    <>
    <br/>
    <div className="col-md-12 d-flex justify-content-center">
      <div className="row d-flex justify-content-center" style={{width: '70%', marginTop : '50px', backgroundColor : 'transparent', borderRadius : '5px'}}>

        <h2 className="text-center"> Transact </h2>
        
        <div className="ron d-inline-block col-md-5">
          <div className="3">
            <img src={deps} width="20%" height="50%"/>
          </div>
          <Link to="/deposit_types"><p className="pgh" >Deposit </p></Link>
        </div>

        <div className="ron d-inline-block col-md-5">
          <div className="3">
            <img src={withdrawed} width="20%" height="50%"/>
          </div>
          <Link to="/withdraw"><p className="pgh" style={{marginTop:"20px"}}> Withdrawal </p></Link>
        </div>

        <div className="ron d-inline-block col-md-5">
          <div className="3">
            <img src={enquire} width="20%" height="50%"/>
          </div>
          <Link to=""><p className="pgh" > Enquiry </p></Link>
        </div>

        <div className="ron d-inline-block col-md-5">
          <div className="3" style={{marginTop:"15px"}}>
            <img src={balance} width="20%" height="50%" style={{height:"100%", marginBottom: "27px"}}/>
          </div>
          <Link to=""><p className="pgh" style={{marginTop:"20px"}}> Check balance </p></Link>
        </div>
      </div>
    </div>
    <br/>
    </>
    )
    }



export default Transact;