import React, {useState} from "react";
import "./modal.css";
import (useDispatch, useSelector) from "react-router-dom";
import Modal from './components/Body/modal';



const Modal = props => {
	const dispatch = useDispatch()
	const modal_show = useSelector(state => state.modal_reducer)
	const [show, setShow] = useState(false)

	function onClose(){
		dispatch({
			type : 'hide'
		})
	}

	function onOpen(){
		dispatch({
			type : 'show'
		})
	}

	if (!modal_show){
		return null
	}
	return (
      	<div class="modal" id="modal">
	        <h2>Modal Window</h2>
	        <div class="content">{this.props.children}</div>
	        <div class="actions">
	          	<button class="toggle-button" onClick={onClose}>
	            	Cancel
	          	</button>
	          	<button class="toggle-button" onClick={onOpen}>
	            	Continue
	          	</button>
	        </div>
      </div>
    );
	}