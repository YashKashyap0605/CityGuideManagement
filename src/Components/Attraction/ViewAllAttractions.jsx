import AttractionService from "../../AttractionHandler/AttractionService";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import ViewAllAttractionList from "./viewAllAttraction";
import { useNavigate } from "react-router";
import './viewAll.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ViewAllAttractions(){

    const [attractions, setAttractions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is logged in
      
      const isLoggedIn = localStorage.getItem("loginDetails");
  
      if (!isLoggedIn) {
        // User is not logged in, navigate to home page
        navigate("/login");
      } else {
        AttractionService.getAllAttractions()
          .then((response) => {
            setAttractions(response.data);
          })
          .catch((error) => {
            // Handle error
          });
      }
    }, []);

    return (
        <div className="float-container">

        <div className="float-child1">
          <Sidebar/>
        </div>
        
        <div className="float-child2">
         <ViewAllAttractionList/>
        </div>
        
      </div>
    );
}