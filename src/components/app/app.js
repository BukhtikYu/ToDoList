import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';

export default class App extends React.Component {

  maxId =100

  state = {
    todoData: [
      {label: "Drink Coffe", important: false, id:1},
      {label: "Study React", important: true, id:2},
      {label: "Study Css", important: false, id:3},
    ]
  };

  deleteItem = (id) => {
    this.setState (( { todoData }) => {
      const idx = todoData.findIndex ((el) => el.id === id );

      const newArray = [
        ... todoData.slice(0, idx),  //before
        ... todoData.slice(idx +1)   //after
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    //console.log ('added',text)  Для проверки работы кнопки
    const newItem = {
      label: text, 
      important: false, 
      id: this.maxId++
    };

    this.setState (({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };
 
  render () {
    return (
      <div>
        <AppHeader />
        <AddItem onItemAdded={this.addItem} />
        <TodoList 
          todos={this.state.todoData}
          onDeleted={this.deleteItem} />
      </div>
    );
  };
};