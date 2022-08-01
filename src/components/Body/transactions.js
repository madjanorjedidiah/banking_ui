import React, {useState} from 'react';
import { useTable } from "react-table";


function AllTransactions(props){

		
		 return (
		<div className='row col-md-12' style={{width: '70%', margin : '0 270px', marginTop : '50px', backgroundColor : '#b3b3b3', borderRadius : '5px'}}>
			<div className='col-md-4'>
				<button style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Completed Transactions </button>
			</div>

			<div className='col-md-4'>
				<button style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> Pending Transactions </button>
			</div>

			<div className='col-md-4'>
				<button style={{background : '#347ecf', padding : '15px', borderRadius : '5px', color : 'white', fontSize : '20px'}}> All Transactions </button>
			</div>

		</div>
	)}


export default AllTransactions;