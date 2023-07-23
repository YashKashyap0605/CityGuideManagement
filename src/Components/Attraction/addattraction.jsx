import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AttractionService from "../../AttractionHandler/AttractionService";
import UserService from "../../UserHandler/UserService";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar";
import './addAttraction.css'
import { useNavigate } from "react-router";

export default function AddAttraction() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: '',
    distanceFromStation: '',
    tid: '',
    rating: '',
    uid: ''
  });

  const { name, distanceFromStation, tid, rating, uid } = details;

  const changeHandler = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const n = document.getElementById("name").value;
    const d = document.getElementById("distanceFromStation").value;
    const t = document.getElementById("tid").value;
    const r = document.getElementById("rating").value;
    const u = document.getElementById("uid").value;

    try {
      const response = await AttractionService.addAttraction({
        id: 0,
        name: n,
        distanceFromStation: d,
        tid: t,
        rating: r,
        uid: u
      });
      navigate("/viewallattractions");
    } catch (error) {
      toast.error("Incorrect details", {
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  // Check if the user is logged in
  useEffect(() => {
    const loginDetails = localStorage.getItem("loginDetails");
    if (!loginDetails) {
      // User is not logged in, navigate back to the login page
      navigate("/login");
    }
  }, []);

  return (
    <div className="float-container">
      <div className="float-child1">
        <Sidebar />
      </div>
      <div className="regg float-child2">
        <div className="containerr">
          <ToastContainer />
          <center>
        <div className="title" style={{color: 'white'}}>Add New Attraction</div></center>
        <br></br>
        <div className="content">
          <form onSubmit={submitHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name : </span>
                <input type="text" name="name" id="name" value={name} onChange={changeHandler} placeholder="Enter Name of Attraction" required />
              </div>
              <div className="input-box">
                <span className="details">Distance from Howrah Station :</span>
                <input type="number" name="distanceFromStation" id="distanceFromStation" value={distanceFromStation} onChange={changeHandler} required placeholder="Eg. 8.2km" />
              </div>
              <div className="input-box">
                <span className="details">1 for Museum, 2 for String, 3 for Park</span>
                
                <input type="number" name="tid" id="tid" value={tid} onChange={changeHandler} required placeholder="Enter the type id here"/>
              </div>
              <div className="input-box">
                <span className="details">Rating : </span>
                <input type="number" name="rating" id="rating" value={rating} onChange={changeHandler} placeholder="Enter your Last Name" />
              </div>
              <div className="input-box">
                <span className="details">Enter your User ID</span>
                
                <input type="number" name="uid" id="uid" value={uid} onChange={changeHandler} required placeholder="Enter the User id here"/>
              </div>
            </div>
           
            <div className="button">
              <input type="submit" value="Add" name="submit" />
            </div>
          </form>
        </div>
      </div>
        </div>
      </div>
  );
}













