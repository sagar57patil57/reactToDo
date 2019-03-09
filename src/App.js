import React, { Component } from 'react';
import './App.css';
import Addtodo from './Addtodo';
import Display from './Display';
import Features from './Features';

class App extends Component {

  state = {
    todos : [
      {
        id : 1,
        name : 'Eat Sleep'
      },
      {
        id : 2,
        name : 'Conquer Repeat'
      }
    ]
  }

  addanote = (todo) => {
    todo.id = Math.random()*100;
    const temparr = this.state.todos.slice();
    temparr.push(todo);
    this.setState({
      todos :temparr
    });
  }

  deleteanote = (n_id) => {
    var index = this.state.todos.indexOf(n_id);
    var new_array = this.state.todos.slice();  //makes copy of ninjas array
    new_array.splice(index,1);    //delete element
    this.setState({
      todos : new_array
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <Addtodo addanote = { this.addanote } />
            <br></br>
          <Features />
          <br></br>

          <Display deleteanote = { this.deleteanote } todos = { this.state.todos }/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
