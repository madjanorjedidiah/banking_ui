import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/header';
import CompletedTransactions from './components/Body/completeTransactions';
import Footer from './components/Footer/footer';
import TodayTransact from './components/Body/todayTransactions';
import AllTransactions from './components/Body/allTransactions';





function App() {
  var [but, setBut] = useState('Welcome')

  const Welcome = () => (
    <div style={{width: '70%', margin : '0 270px', marginTop : '50px', backgroundColor : '#b3b3b3', borderRadius : '5px'}}>
      <div>
        <h2 style={{ padding : '20px', color : 'white'}}> Welcome to Bank As You Go where banking is made easy.</h2>
      </div>

      <div>
        <span style={{ padding : '20px', color : 'white'}}>We have your needs at heart.</span>
      </div>

      <div>
        <p style={{ padding : '20px', color : 'white'}}>Click on the button below to start processing transactions.<br/><br/>
        <button onClick={()=> setBut('Login')} style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Log In </button></p>
      </div>
    </div>
  )

  const Transactions = () => (
    <div className='row col-md-12' style={{paddingTop:'50px', paddingBottom:'50px', width: '70%', margin : '0 270px', marginTop : '50px', backgroundColor : '#b3b3b3', borderRadius : '5px'}}>
      <div className='col-md-4'>
        <button onClick={()=> setBut('TodayTransact')} style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Today Transactions </button>
      </div>

      <div className='col-md-4'>
        <button onClick={()=> setBut('CompletedTransactions')} style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Completed Transactions </button>
      </div>

      <div className='col-md-4'>
        <button onClick={()=> setBut('AllTransactions')} style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> All Transactions </button>
      </div>
    </div>
  )

  return (
    <div className="App">
      <Header/>
      {(() => {
            if (but === 'Welcome') {
              return (
                <div>{Welcome()}</div>
              )
            } else if (but === 'Transactions') {
              return (
                <div>{Transactions()}</div>
              )
            }
              else if (but === 'TodayTransact') {
              return (
                <TodayTransact/>
              )
            } else if (but === 'CompletedTransactions') {
              return (
                <CompletedTransactions/>
              )
            } else {
              return (
                <AllTransactions/>
              )
            }
        })()}
      <Footer/>
    </div>
  );
}



export default App;
