import React from "react";
import "./ItemAddForm.scss";

export default class ItemAddForm extends React.Component {
    initialState = {
        text: ""
    }

    state = this.initialState;

    onLabelChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState(this.initialState);
    }

    render() {
        return (
            <form className="ItemAddForm d-flex" onSubmit={ this.onSubmit }>
                <input type="text"
                       className="ItemAddForm__input form-control"
                       onChange={ this.onLabelChange }
                       placeholder="What needs to be done?"
                       value={ this.state.text } />
                <button
                    className="ItemAddForm__add btn btn-outline-secondary"
                    // onClick={ () => {
                    //         const text = document.getElementsByClassName("ItemAddForm__input")[0].value;
                    //         onAdd(text);
                    //     }
                    // }
                >Add</button>
            </form>
        )
    }
}
