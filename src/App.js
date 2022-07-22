import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import Header from './components/Header/header';
import CompletedTransactions from './components/Body/completeTransactions';
import Footer from './components/Footer/footer';
import TodayTransact from './components/Body/todayTransactions';
import Welcome from './components/Body/welcome';
import AllTransactions from './components/Body/transactions';
import { useSelector, useDispatch } from "react-redux";
import LoginForm from './components/Body/login';
import Login from './components/Body/login1';
import Registration from './components/Body/registration';
import {Route, Routes} from "react-router-dom";
import Transact from './components/Body/transact';
import DepositTypes from './components/Body/deposit_types';


function App() {
  // //const [user, setUser] = useState("")
   const loggedInUser = useSelector(state => state.loggedInUser)
   const login = useSelector(state => state.login_reducer)
   const dispatch = useDispatch()


  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/completed_transactions" element={<CompletedTransactions/>} />
          <Route path="/today_transactions" element={<AllTransactions/>} />
          <Route path="/all_transactions" element={<AllTransactions/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<Registration/>} />
          <Route path="/transact" element={<Transact/>} />
          <Route path="/deposit_types" element={<DepositTypes/>} />
        </Routes>
        <Footer/>
      </div>
  );
}


export default App;
