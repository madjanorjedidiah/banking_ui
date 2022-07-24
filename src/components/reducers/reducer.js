import {combineReducers} from "redux";
import CashDeposit from '../../components/Body/cash_deposit';



const user = []

const errMsg_reducer = (state="", action) => {
	switch(action.type){
		case "error":
			return {
				error : [action.payload]
			}
		default:
		return state;
	}
}

const loggedInUser = (state=user, action) => {
	switch(action.type){
		case "isLoggedIn":
			return {
				user : [action.payload]
			}
		default:
		return state;
	}
}

const logout_reducer = (state=false, action) => {
	switch(action.type){
		case "logout":
			return !state
		default:
		return state;
	}
}


const login_reducer = (state=false, action) => {
	switch(action.type){
		case "login":
			return !state
		default:
		return state;
	}
}


const modal_reducer = (state=false, action) => {
	switch(action.type){
		case "show":
			return !state
		case "hide":
			return state
		default:
		return state;
	}
}

const register_reducer = (state=user, action) => {
	switch(action.type){
		case "cash":
			return {
				...state,
				user : [action.payload]
			}
		default:
		return state;
	}
}




const rootReducer = combineReducers(
	{
		errMsg_reducer,
		register_reducer,
		logout_reducer,
		login_reducer,
		modal_reducer,
		loggedInUser
	})


export default rootReducer;

