import React, {useState, useEffect} from "react";
import "./modal.css";
import { useSelector, useDispatch } from "react-redux";


const Modal = (props) => {
	const dispatch = useDispatch()
	const modal_show = useSelector(state => state.modal_reducer)
	const [show, setShow] = useState(false)

	// useEffect(()=>{
	// 	var element = document.getElementsByClassName('modal')
	// 	if (modal_show==false){
	// 		element.style.display = 'none';
	// 		return null
	// 	}
	// 	else{
	// 		element.style.display = 'block';
	// 	}
	// },[modal_show])

	if (modal_show==false){
		return null
	}

	return (
      	<div className="modal d-block justify-content-center" id="modal">
      		<div className="contentDiv d-block justify-content-center">
		        <div className="content"> Enter your pin </div>
		        <div>
		        	<input type="text" className="pin" id="1"/>
		        	<input type="text" className="pin" id="2"/>
		        	<input type="text" className="pin" id="3"/>
		        	<input type="text" className="pin" id="4"/>
		        </div>
		        <br/>
		        <div className="">
		          	<button className="toggle-button" onClick={() => props.onClose()} id="butClose">
		            	Cancel
		          	</button>
		          	<button className="" onClick={() => props.onContinue()} id="butContinue">
		            	Continue
		          	</button>
		        </div>
	        </div>
      </div>
    );
	}

export default Modal;



