import React from "react";
import "./SearchPanel.scss";

const SearchPanel = ({onChangeText, text}) => {
    const searchText = "Type here to search";

    return (
        <div className="d-flex SearchPanel">
            <input className="form-control SearchPanel__input"
                   type="text"
                   placeholder={searchText}
                   onKeyDown={ e => { if (e.key === "Escape") onChangeText("") } }
                   onChange={ e => onChangeText(e.target.value) }
                   value={text}
            />
            <div className={ `SearchPanel__close d-flex${ text ? "" : " hidden" }` }
                 onClick={ () => onChangeText("") }>
                &#x2715;
            </div>
        </div>
    )
}

export default SearchPanel;
