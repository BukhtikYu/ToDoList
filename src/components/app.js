import React from 'react';

import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';

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

export default App;