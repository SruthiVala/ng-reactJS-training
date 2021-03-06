import React, { Component } from 'react';

export default  class extends Component{

constructor(){
	super();
	this.state ={
		todoItems:[]
	}
}
	    handleClick(){
	    	const todoItems = this.state.todoItems;
	    	todoItems.push(this.textbox.value);
	    	this.textbox.value="";

	    	this.setState({
	    		todoItems:todoItems
	    	});
    }

    removeItem(data){
    	console.log(data.item);
    	const todoItems = this.state.todoItems;
    	var index = todoItems.indexOf(data.item);
    	if (index !== -1) todoItems.splice(index, 1);
    	console.log("indexof --->"+index);
    	this.setState({
    		todoItems:todoItems
    	});
      }
    render(){
    	return(
    		<div className="todo">
    		 <input type="text" ref={textbox => this.textbox = textbox}/>
    		 <button onClick={this.handleClick.bind(this)}> Add Item</button>

    		 <p> Todo Items</p>
    		 <ul>
    		 {this.state.todoItems.map(item => <li>{item}<button onClick={this.removeItem.bind(this,{item})}> Remove</button> </li>)}
    		 </ul>
    		 </div>);
    	}


    }
