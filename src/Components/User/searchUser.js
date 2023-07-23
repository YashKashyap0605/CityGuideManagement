import React, { useState, useEffect } from "react";
import AttractionService from "../../AttractionHandler/AttractionService";
import Sidebar from "../Sidebar";
import "./Search.css";
import { Link } from "react-router-dom";
import UserService from "../../UserHandler/UserService";
export default function SearchUserByKeyword() {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in from local storage
    const loginDetails = localStorage.getItem("loginDetails");
    if (loginDetails) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await UserService.searchUserByName(keyword);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="float-containerrr">
      <div className="float-child1">
        <Sidebar />
      </div>
      <div className="float-child2">
          <div className="view">
      <div className="search-container">
        {isLoggedIn ? (
          <React.Fragment>
            <form className="search-form" onSubmit={handleSearch}>
                <h3>Enter the keyword :</h3>
              <input
                type="text"
                placeholder="Enter a keyword..."
                value={keyword}
                onChange={handleInputChange}
              />
              <button className="b" type="submit">
                Search
              </button>
            </form>

            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map(
                    user =>
                    <div className="card" key = {user.id}>
                <div className="card__header">
                 </div>
                <div className="card__body">
                <span className="tag tag-blue">ID : {user.id}</span>
                <hr></hr>
                <h6>FIRST NAME : {user.firstName}</h6>
                <hr></hr>
                <h6>LAST NAME : {user.lastName}</h6>
                <hr></hr>
                
              
    
    
                </div>
                <div className="card__footer">
                  
                   <br></br>
                <div className="user">
                <div className="user__info">
                <h5>Username : {user.userName}</h5>
               
            </div>
          </div>
        </div>
      </div>
      
                )
              ) : (
                <h1>No results found.</h1>
              )}
            </div>
          </React.Fragment>
        ) : (
          <p>Please log in to use the search feature.</p>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}
