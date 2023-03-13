import React,{useState} from "react";

import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    //custom asynchronous function
    const fetchData = async (value) => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users");
    const json = await response.json();
    const results = json.filter((user) => {
        return ( 
        //filtering done in backend typically
        value && 
        user && 
        user.name && 
        user.name.toLowerCase().includes(value)
        );
    });
        setResults(results);
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return  <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Search" 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}/>
    </div>;
}