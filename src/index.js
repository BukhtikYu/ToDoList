import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

class App extends React.Component {

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

  render () {
    return (
      <div>
      <AppHeader />
      <SearchPanel />
      <TodoList 
        todos={this.state.todoData}
        onDeleted={this.deleteItem} />
      </div>
    );
  };
  }



   

ReactDom.render(<App />, document.getElementById('root') ) 