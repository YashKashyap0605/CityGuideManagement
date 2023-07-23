import { useState, useEffect } from "react";
import AttractionService from "../../AttractionHandler/AttractionService";
import ReviewService from "../../ReviewHandler/ReviewService";
import UserService from "../../UserHandler/UserService";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar";
import './addReview.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function AddReview(props) {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    uid: '',
    aid: '',
    comments: ""
  });

  const { uid, aid, comments } = details;

  const changeHandler = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const a = document.getElementById("aid").value;
    const r = document.getElementById("comments").value;
    const u = document.getElementById("uid").value;

    try {
      const response = await ReviewService.addReview({
        id: 0,
        aid: a,
        uid: u,
        comments: r
      });
      navigate("/viewallattractions");
    } catch (error) {
      toast.error("Incorrect details", {
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }

  useEffect(() => {
    const loginDetails = localStorage.getItem("loginDetails");
    if (!loginDetails) {
      navigate("/login"); // Navigate to the home page if the user is not logged in
    }
  }, [navigate]);

  return (
    <div className="float-container">
      <div className="float-child1">
        <Sidebar />
      </div>
      <div className="regg float-child2">
        <div className="containerr">
          <ToastContainer />
          <center>
            <div className="title" style={{ color: 'white' }}>Add New Review</div>
          </center>
          <div className="content">
            <form onSubmit={submitHandler}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Enter your User ID</span>
                  <input type="number" name="uid" id="uid" value={uid} onChange={changeHandler} required placeholder="Enter the User id here" />
                </div>
                <div className="input-box">
                  <span className="details">Enter the Attraction ID :</span>
                  <input type="number" name="aid" id="aid" value={aid} onChange={changeHandler} required placeholder="Enter the Attraction id here" />
                </div>
                <div className="input-box" style={{ marginTop: 40 }}>
                  <span className="details">Comment :</span>
                  <textarea rows="8" cols="70" name="comments" id="comments" value={comments} onChange={changeHandler} required placeholder="Thoughts about the place??" />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Add Review" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
