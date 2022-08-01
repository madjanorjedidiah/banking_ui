import {combineReducers} from "redux";


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
			return true
		default:
		return state;
	}
}


const login_reducer = (state=false, action) => {
	switch(action.type){
		case "login":
			return true
		default:
		return state;
	}
}


const modal_reducer = (state=false, action) => {
	switch(action.type){
		case "show":
			return true
		case "hide":
			return false
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

