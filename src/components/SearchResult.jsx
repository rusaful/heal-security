import React from "react";

import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    return (
    <div 
        className="search-result"
        //Use `` inside template literals to display input 
        onClick={(e) => alert(`You clicked on ${result.name}`)}
    >
        {result.name}
    </div>
    );
};