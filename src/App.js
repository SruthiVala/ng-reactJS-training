import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import me from './me.JPG';


import TodoItem from './TodoItems.js';

class App extends Component {
      handleClick(){
      alert("I am clicked");
    }
  render() {
    const topics = ['HTML','Node','React'];
    return (
      <div className="App">
      <br/>
      <button onClick={this.handleClick.bind(this)}> Click Me!</button>
      <p>Current time is: {new Date().toTimeString()}</p>
 <Biography/>
       <p> Topics to Study </p>
        {topics[0]}*************
      <ul>  
      {topics.map(topic =><li>{topic}</li>)}
      </ul>
      <hr/>
 <GroceryList/>
 <TodoItem/>
 <p> React Is Awesome</p>
 <p>Copyright © Infinity</p>
      </div>
    );
  }
}

class Biography extends React.Component{
  render(){
    return(
    <div>
<img src={me} style={{width: 100, height: 100}}/>
<p>Name: Vishank Polsani</p>
<p>Hobbies : Sleeping</p>
<hr/>
    </div>
    );
  }
}

class GroceryList extends React.Component{
  render(){
    return(
    <div>
    <h1>Grocery List</h1>

<ul>
  <li>Banana</li>
  <li>Cookies</li>
  <li>Ice Cream</li>
</ul>
<hr/>
 <br/>
    <br/>
    <p> testing</p>
    </div>    );
  }
}

export default App;
