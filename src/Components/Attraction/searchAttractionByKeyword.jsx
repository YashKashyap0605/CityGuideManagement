import React, { useState, useEffect } from "react";
import AttractionService from "../../AttractionHandler/AttractionService";
import Sidebar from "../Sidebar";
import "./Search.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SearchAttractionByKeyword() {
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
      const response = await AttractionService.searchAttractionByKeyword(keyword);
      setSearchResults(response.data);
    } catch (error) {
      toast.error("Some error occured", {
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="float-containerrr">
      <div className="float-child1">
        <Sidebar />
      </div>
      <div className="float-child2"></div>
      <div className="search-container">
        {isLoggedIn ? (
          <React.Fragment>
            <form className="search-form" onSubmit={handleSearch}>
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
                    attraction =>
                    <div className="card" key = {attraction.id}>
                <div className="card__header">
                 </div>
                <div className="card__body">
                <span className="tag tag-blue">ID : {attraction.id}</span>
                <span className="tag tag-blue">NAME : {attraction.name}</span>
                <span className="tag tag-blue">Howrah Station : {attraction.distanceFromStation}</span>
                    <br></br>
                 <p> User Rating : {attraction.rating} | | Likes : {attraction.likes} | | Reports : {attraction.reports}  </p>
                <span> 
                <Link to="/viewreviews" state={attraction.id}>
              <button>View All Reviews</button>
            </Link>
                     </span>
    
    
                </div>
                <div className="card__footer">
                  
                   <br></br>
                <div className="user">
                <div className="user__info">
                <h5>Username : {attraction.userOutputModel.userName}</h5>
               
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
  );
}
