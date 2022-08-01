import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import CompletedTransactions from './components/Body/completeTransactions';
import Footer from './components/Footer/footer';
import TodayTransact from './components/Body/todayTransactions';
import Welcome from './components/Body/welcome';
import AllTransactions from './components/Body/transactions';
import LoginForm from './components/Body/login';
import Registration from './components/Body/registration';
import {Route, Routes} from "react-router-dom";
import Transact from './components/Body/transact';
import DepositTypes from './components/Body/deposit_types';
import Withdraw from './components/Body/withdrawal';
import CheckBalance from './components/Body/balance';
import OwnAccountDeposit from './components/Body/own_account_deposit';
import {Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, {useState, useEffect } from 'react';



function App() {
   const [user, setUser] = useState("")
   const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const loggedOut = useSelector(state => state.logout_reducer)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      getUserData();
   }, [])

   // useEffect(() => {
   //    getUserData();
   // }, [])

   function getUserData(){
      const dd = localStorage.getItem('loggedIn_user');
      if (dd !== null) { setUser(JSON.parse(dd))}
   }

   const logout = () => {
    dispatch({
      type : "logout"
    })
    if (loggedOut){
      localStorage.removeItem('loggedIn_user')
      setUser(null)
      return navigate('/')
    }
  }


  return (
      <div className="App">
        <Header logout={() => logout()} user_data={user}/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/completed_transactions" element={<CompletedTransactions user_data={user}/>} />
          <Route path="/today_transactions" element={<AllTransactions user_data={user}/>} />
          <Route path="/all_transactions" element={<AllTransactions user_data={user}/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Registration user_data={user}/>} />
          <Route path="/transact" element={<Transact user_data={user}/>} />
          <Route path="/deposit_types" element={<DepositTypes user_data={user}/>} />
          <Route path="/withdraw" element={<Withdraw user_data={user}/>} />
          <Route path="/balance" element={<CheckBalance user_data={user}/>} />
          // <Route path="/account_dep" element={<OwnAccountDeposit/>} />
        </Routes>
        <Footer/>
      </div>
  );
}


export default App;
