import React, {Component} from "react";
import "./ItemStatusFilter.scss";

export default class ItemStatusFilter extends Component {
    render() {
        const { onChangeStatus, status } = this.props;

        return (
            <div className="btn-group ItemStatusFilter">
                {
                    ["all", "active", "done"].map(item => {
                        return (
                            <button type="button"
                                    className={ `btn ${status === item ? "btn-info" : "btn-outline-secondary"}` }
                                    onClick={ () => onChangeStatus(item) }
                                    key={ item }>
                                { [item[0].toUpperCase(), ...item.slice(1)]}
                            </button>
                        )
                    })
                }
            </div>
        )
    }
}
