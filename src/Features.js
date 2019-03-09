import React from 'react';
import './Features.css';

const Features = (props) => {

  return(
    <ul className="list-group">
      <li className="list-group-item list-group-item1" >
        <i /*onClick={ () =>{ props.deleteanote( todo.id ) } }*/ className="fa fa-trash fa2"  ></i>
      <i /*onClick={ () =>{ props.deleteanote( todo.id ) } }*/ className="fa fa-close fa3"  ></i>
    <i /*onClick={ () =>{ props.deleteanote( todo.id ) } }*/ className="fa fa-eraser fa3"  ></i>
  <i /*onClick={ () =>{ props.deleteanote( todo.id ) } }*/ className="fa fa-rotate-right fa3"  ></i>
<i /*onClick={ () =>{ props.deleteanote( todo.id ) } }*/ className="fa fa-code fa3"  ></i>
  <i /*onClick={ () =>{ props.deleteanote( todo.id ) } }*/ className="fa fa-clock-o fa3"  ></i>
    </li>
    </ul>
  )

}

export default Features;
