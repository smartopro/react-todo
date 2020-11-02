import React, {Component} from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.scss";

export default class TodoList extends Component {
    render() {
        const {onDelete, onToggleDone, onToggleImportant, todos} = this.props;
        return (
            <ul className="list-group TodoList">
                {
                    todos.map(
                        item => {
                            const { id, ...itemWithoutId } = item;

                            return (
                                <li className="list-group-item TodoList__item" key={id}>
                                    <TodoListItem
                                        { ...itemWithoutId }
                                        onDelete = { () => onDelete(id) }
                                        onToggleDone = { () => onToggleDone(id) }
                                        onToggleImportant = { () => onToggleImportant(id) }
                                    />
                                </li>
                            )
                        }
                    )
                }
            </ul>
        )
    }
};
