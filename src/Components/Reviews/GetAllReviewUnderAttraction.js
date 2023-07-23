import AttractionService from "../../AttractionHandler/AttractionService";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import AddReview from "../Reviews/addReview";
import ReviewService from "../../ReviewHandler/ReviewService";
import { useLocation } from "react-router";
import './get.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function GetAllReviewUnderAttraction() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const loginDetails = localStorage.getItem("loginDetails");
    if (!loginDetails) {
      navigate("/login"); // Navigate to the login page if the user is not logged in
    } else {
      ReviewService.getAllReviewsUnderAttraction(location.state)
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          toast.error("Error retrieving reviews", {
            autoClose: 2000,
            hideProgressBar: true,
          });
        });
    }
  }, [navigate, location.state]);

  return (
    <div className="float-container">
      <div className="float-child1">
        <Sidebar />
      </div>
      <div className="float-child2"></div>
      <div className="view">
        <div className="containerrr">
          {reviews.length === 0 ? (
            <div className="no-reviews">
              <p>No reviews found.</p>
            </div>
          ) : (
            reviews.map((review) => (
              <div className="card" key={review.id}>
                <div className="card__header"></div>
                <div className="card__body">
                  <span className="tag tag-blue">Review Number : {review.id}</span>
                  <p>Posted At : {review.createdAt}</p>
                  <hr></hr>
                  <h4>{review.userOutputModel.userName} said that :</h4>
                  <p>{review.comments}</p>
                  <hr></hr>
                  <h5>
                    Likes : {review.likes}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reports : {review.reports}
                  </h5>
                </div>
                <div className="card__footer">
                  <br></br>
                  <div className="user">
                    <div className="user__info">
                      <hr></hr>
                      <button
                        style={{ backgroundColor: 'blue' }}
                        onClick={() => {
                          ReviewService.likeReview(review.id, review.userOutputModel.userName);
                          window.location.reload(false);
                        }}
                      >
                        LIKE
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        style={{ backgroundColor: 'red' }}
                        onClick={() => {
                          ReviewService.reportReview(review.id, review.userOutputModel.userName);
                          window.location.reload(false);
                        }}
                      >
                        REPORT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          <br></br>
        </div>
        <br></br>
      </div>
    </div>
  );
}
