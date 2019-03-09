import React from 'react';
import './Display.css';

const Display = (props) => {

  const { todos } = props;
  console.log(todos);
  const new_array = todos.map(todo => {
    return(
    <li className="list-group-item" key={ todo.id } > { todo.name }  <i onClick={ () =>{ props.deleteanote( todo.id ) } } className="fa fa-close"  ></i>  </li>
    )
});
  return(
    <ul className="list-group">
      { new_array }
    </ul>
  );
}

export default Display;


/*
const ninjasList = ninjas.map(ninja => {
    return (
      <div className="Ninjasbody" key={ ninja.id }>
        <div>{ ninja.name }</div>
        <div>{ ninja.age }</div>
      <button onClick={ () => { props.deleteNinja( ninja.id ) }  }>delete</button>
      </div>
    )
  });
*/
