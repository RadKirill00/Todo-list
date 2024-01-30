import React from "react";


const Task = (props) => {
  return (
    <div id={props.id} className="container2">
      <input
        type="checkbox"
        onClick={() => props.toggleTask(props.id)}
        checked={props.status}
        className="container2__input"
      />
      <p style={props.status ? { textDecoration: "line-through" } : {}} className="p">
        {props.value} 
      </p>
      <button onClick={() => props.deleteTask(props.id)} className="b">X</button>
    </div>
  );
};

export default Task;
