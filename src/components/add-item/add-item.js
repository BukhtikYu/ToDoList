import React from 'react';

import './add-item.css'

export default class AddItem extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value
        });
    };

    onClick = (e) => {
        //e.preventDefault();  //Чтобы страница не перезагружалась
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };


    render() {
        return (
            <div className = "add-item d-flex">
                <input type = "text"
                        className = "form-control"
                        onChange = {this.onLabelChange}
                        placeholder = "What needs to be done?"
                        value = {this.state.label} />
                <button
                    type="button"
                    className = "btn btn-outline-secondary"
                    onClick = {this.onClick}>
                    ADD Item
                </button>  
            </div> 
        );
    };

    /*render() {
        return (
            <form className = "add-item d-flex"
                onSubmit = {this.onSubmit}>

                <input type = "text"
                        className = "form-control"
                        onChange = {this.onLabelChange}
                        placeholder = "What needs to be done?"
                        value = {this.state.label} />
                <button
                    className = "btn btn-outline-secondary">
                    ADD Item
                </button>  
            </form> 
        );
    };*/
};