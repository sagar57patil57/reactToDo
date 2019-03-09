import React, { Component } from 'react';
import './Addtodo.css';

class Addtodo extends Component{

  state = {
    id : null,
    name : null
  }

  addme = (e) => {
    var x = e.target.value;
    this.setState({
      name : x
    })
  }

  handlesubmit = (e) => {
    e.preventDefault();
    this.props.addanote(this.state);
  }

  render(){
    return(
      <form onSubmit={ this.handlesubmit }>
        <input type="text" className="todo" onChange={ this.addme } placeholder="Add a note..." />
  </form>
    )
  }

}

export default Addtodo;
