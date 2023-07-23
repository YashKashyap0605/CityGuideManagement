import AttractionService from "../../AttractionHandler/AttractionService";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import ViewAllAttractionList from "./viewAllReviews";
import './viewAll.css'
import GetAllReviewUnderAttraction from "./GetAllReviewUnderAttraction";
import { useNavigate } from "react-router";

export default function ViewAllReviews() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginDetails = localStorage.getItem("loginDetails");
    if (!loginDetails) {
      // User is not logged in, navigate back to the home page or login page
      navigate("/"); // Replace "/" with the appropriate path
    }
  }, [navigate]);

  return (
    <div className="float-container">
      <div className="float-child1">
        <Sidebar/>
      </div>
      <div className="float-child2">
        <GetAllReviewUnderAttraction/>
      </div>
    </div>
  );
}
