import AttractionService from "../../AttractionHandler/AttractionService";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import AddReview from "../Reviews/addReview";
import GetAllReviewUnderAttraction from "../Reviews/GetAllReviewUnderAttraction";
import { useNavigate } from "react-router";
import { NavigateProps } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ViewAllAttractionList(){

const navigate = useNavigate();
    
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        AttractionService.getAllAttractions().then((response) => {
            setAttractions(response.data);
        })
    }, []);




    
const changeState = (id) => {
    navigate('/viewreviews', { state : id });
}

    return (
        <div className="view">
        <div className="containerrr">
            {
            attractions.map(
                attraction =>
                <div className="card" key = {attraction.id}>
            <div className="card__header">
             </div>
            <div className="card__body">

            <span className="tag tag-blue">ID : {attraction.id}</span>
            <h4><bold>NAME</bold> : {attraction.name}</h4>
            <hr></hr>
            <h6><bold>Distance from Howrah Station</bold> : {attraction.distanceFromStation}km</h6>
            <hr></hr>
             <p> <em>Rating</em> : {attraction.rating}/5 &nbsp; &nbsp; &nbsp; &nbsp; <em>Likes</em> : {attraction.likes} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <em>Reports</em> : {attraction.reports}  </p>
            <hr></hr>
            <span>
            <Link to="/addreview">
          <button  className="but">Add Review (+)</button>
        </Link>
       <hr></hr>
                {/* <a  href="/addreview">ADD A REVIEW</a>&nbsp;  */}
           
            <Link to="/viewreviews" state={attraction.id}>
          <button className="but">View All Reviews</button>
        </Link>
                 </span>
                 <hr></hr>


            </div>
            <div className="card__footer">
              
               <br></br>
            <div className="user">
            <div className="user__info">
            <h4>Given By : {attraction.userOutputModel.userName}</h4>
            <hr></hr>
            <button className="likeb"
            onClick = {() => {
                AttractionService.likeAttraction(attraction.id, attraction.userOutputModel.userName);
               window.location.reload(false);
                }} 
           >LIKE</button>  &nbsp;  &nbsp;  &nbsp; 

            <button className="reportb"
            onClick = {() => {
                AttractionService.reportAttraction(attraction.id, attraction.userOutputModel.userName)
                window.location.reload(false);
                }}
                >Report</button>
        </div>
      </div>
    </div>
  </div>
  
            )
}
  
<br></br>
      </div>
      <br></br>
    </div>

    );
}