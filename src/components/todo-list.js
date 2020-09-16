import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css'

const TodoList = ({ todos }) => {

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
      return (
        <li key={item.id} className = "list-group-item" ><TodoListItem { ... item }/></li>
      )
    });

    return (
      <ul className = "list-group todo-list">
       { elements }
      </ul>
    );
  };

 export default TodoList; 