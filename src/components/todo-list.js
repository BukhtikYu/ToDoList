import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, onDeleted }) => {

    /*const elements = todos.map((item) => {
      return (
        <li><TodoListItem 
        label = {item.label} 
        important = {item.important}/></li>
      )
    }); */

    //Переписали тоже самое с использованием Spread Operator : 
    //Взять каждое значение из объекта item и передать его в качестве аттрибута

     const elements = todos.map((item) => {
       const {id, ... itemProps } = item;
      return (
        <li key={id} className = "list-group-item" >
          <TodoListItem 
            { ... itemProps }
            onDeleted = {() => onDeleted(id)}/>
        </li>  
      )
    });

    return (
      <ul className = "list-group todo-list">
       { elements }
      </ul>
    );
  };

 export default TodoList; 