import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


const Welcome = () => {

   const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const dispatch = useDispatch()

   return (
    <div className="col-md-12 d-flex justify-content-center">
      <div style={{width: '70%', marginTop : '50px', backgroundColor : '#b3b3b3', borderRadius : '5px'}}>
        <div>
          <h2 style={{ padding : '20px', color : 'white'}}> Welcome to Bank As You Go where banking is made easy.</h2>
        </div>

        <div>
          <span style={{ padding : '20px', color : 'white'}}>We have your needs at heart.</span>
        </div>

        <div>
          <p style={{ padding : '20px', color : 'white'}}>Click on the button below to start processing transactions.<br/><br/>
          {login ? <Link to="/all_transactions" style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Go to Transactions </Link> : <Link to="/login" style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Log In </Link>}
          </p>
        </div>
      </div>
    </div>
    )
    }



export default Welcome;