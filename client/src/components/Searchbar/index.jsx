import React from "react";

import "./index.css";

const Searchbar = ({handleSubmitSearch}) => {
    return (
        <div className="searchbar" onSubmit={handleSubmitSearch}>
            <form className="searchbar-form">
                <input className="searchbar-input" type="text" name="query" placeholder="z.B. Parkway Drive" autocomplete="off" />
                <button className="searchbar-submit" type="submit">♬</button>
            </form>
        </div>
    )
}

export default Searchbar;