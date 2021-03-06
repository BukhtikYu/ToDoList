import React from 'react';

import TodoList from './todo-list';
import './todo-list-item.css';


//компонент -класс

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: true
    };
    
    onLabelClick = () => {
        this.setState ({
            done: true
        });
    };
        
   render() {
        const { label } = this.props  //используем деструктуризацию объекта
        const { done, important } = this.state;   //используем деструктуризацию: получить значение done из state 

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        };

        if (important) {
            classNames += 'important';
        };

           
        return (
            <span className = { classNames }>
                <span
                    className = 'important'
                    onClick={ this.onLabelClick }>
                    { label }
                </span>
    
                <button type ="button" 
                        className = "btn">
                    <i className ="fa fa-exclamation" /> 
                </button>
    
                <button type ="button" 
                        className = "btn">
                    <i className ="fa fa-trash-o" /> 
                </button>
    
    
            </span>
            );
    };
};


// Если компонент-функция

/*const TodoListItem = (props) => {
    return <span>{ props.label }</span>;
};*/

/*const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <span className = "todo-list-item">
            <span
                className = "todo-list-item"
                style = { style }>
                { label }
            </span>

            <button type ="button" 
                    className = "btn">
                <i className ="fa fa-exclamation" /> 
            </button>

            <button type ="button" 
                    className = "btn">
                <i className ="fa fa-trash-o" /> 
            </button>


        </span>
        );
};*/
  
//export default TodoListItem; 