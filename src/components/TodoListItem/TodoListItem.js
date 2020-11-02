import React from "react";
import "./TodoListItem.scss";

export default class TodoListItem extends React.Component {
    render() {
        const { onDelete,
                onToggleDone,
                onToggleImportant,
                done,
                important,
                label } = this.props;

        let className = "TodoListItem";
        if (important) className += " TodoListItem_important";
        if (done) className += " TodoListItem_done";

        return (
            <span className={className}>
                <span className="TodoListItem__label"
                      onClick={ onToggleDone }>
                    {label}
                </span>
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={ onDelete }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}

// const TodoListItemFunc = ({label, important = false, done = false}) => {
//     let className = "TodoListItem";
//     if (important) className += " TodoListItem_important";
//     if (done) className += " TodoListItem_done";
//
//     return (
//         <span className={className}>
//             <span className="TodoListItem__label">
//                 {label}
//             </span>
//             <button type="button"
//                     className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation" />
//             </button>
//
//             <button type="button"
//                     className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     );
// };
