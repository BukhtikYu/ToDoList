import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
      {label: "Drink Coffe", important: false, id:1},
      {label: "Study React", important: true, id:2},
      {label: "Study Css", important: false, id:3},
    ];
    
    return (
      <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
    );
  };

ReactDom.render(<App />, document.getElementById('root') ) 