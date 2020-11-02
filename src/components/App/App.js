import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";
import "./App.scss";

export default class App extends React.Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("drink juice"),
            this.createTodoItem("Learn react"),
            this.createTodoItem("Make awesome app")
        ],
        filter: {
            text: "",
            status: "all"
        }
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    addItem = text => {
        this.setState( ({todoData}) => {
            return {
                todoData: [
                    ...todoData,
                    this.createTodoItem(text)
                ]
            }
        });
    }

    deleteItem = id => {
        this.setState( ({todoData}) => {
            return {
                todoData: todoData.filter(item => item.id !== id)
            }
        });
    }

    toggleProperty = (arr, id, property) => {
        const index = arr.findIndex(item => item.id === id);
        const oldItem = arr[index];
        const newTodoItem = { ...oldItem, [property]: !oldItem[property] };
        const newTodoData = arr.map(item => item.id === id ? newTodoItem : item)

        return {
            todoData: newTodoData
        }
    }

    toggleDone = id => {
        this.setState(
            ({todoData}) => this.toggleProperty(todoData, id, "done")
        );
    }

    toggleImportant = id => {
        this.setState(
            ({todoData}) => this.toggleProperty(todoData, id, "important")
        )
    }

    getDone = () => {
        return this.state.todoData.filter(el => el.done).length;
    }

    getUndone = () => {
        return this.state.todoData.length - this.getDone();
    }

    changeStatus = status => {
        this.setState({
            filter: {
                ...this.state.filter,
                status: status
            }
        })
    }

    changeText = text => {
        this.setState({
            filter: {
                ...this.state.filter,
                text: text
            }
        })
    }

    render() {
        const {status} = this.state.filter;
        let filteredItems = [ ...this.state.todoData];

        // text filter
        filteredItems = filteredItems.filter(item => item.label.match(new RegExp(this.state.filter.text, "i")));

        // status filter
        filteredItems = filteredItems.filter(item => {
            const itemStatus = item.done ? "done" : "active";
            return status === itemStatus || status === "all";
        });

        return (
            <div className="App">
                <AppHeader toDo={this.getUndone()} done={this.getDone()}/>
                <div className="App_panel d-flex">
                    <SearchPanel
                        text={ this.state.filter.text }
                        onChangeText={ this.changeText }
                    />
                    <ItemStatusFilter
                        status={ status }
                        onChangeStatus={ this.changeStatus }
                    />
                </div>
                <TodoList
                    todos={ filteredItems }
                    onDelete={ this.deleteItem }
                    onToggleDone = { this.toggleDone }
                    onToggleImportant = { this.toggleImportant }
                />
                <ItemAddForm onAdd={ this.addItem } />
            </div>
        )
    }
}
