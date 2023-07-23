import './About.css'
import Navbar from '../Navbar/Navbar.jsx'
export default function About(){
    return(
        <div>
            <Navbar/>
            <div className = "about-wrapper">
      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = "https://static.vecteezy.com/system/resources/previews/003/478/772/original/cute-boy-employee-office-business-man-cartoon-vector.jpg" alt = "about image" />
              </div>
            </div>

            <h2>Yash Kashyap</h2>
            <h3>Java Full Stack Developer</h3>
            <h3>Cognizant</h3>
          </div>
        </div>
        
      </div>

      <div className = "about-right">
        <h1>Hello<span>!</span></h1>
        <h2>WELCOME TO CITY GUIDE MANAGEMENT PROJECT</h2>
        <div className = "about-btns">
       <a href="/register"><button type = "button" className = "btn btn-pink">Register</button></a>
       <a href="/login"><button type = "button" className = "btn btn-pink">Login</button></a>
        </div>

        <div className = "about-para">
            <center>
          <p>City Guide is a Web Based Application by which an individual can access through all the information related to city providing the details of Hotels, Restaurants, Tourist places, Movie theaters, providing functionalities like address and reviews</p>
            <p>BACKEND INVOLVES : SPRING BOOT, JPA AND HIBERNATE, LOGGER, JUNIT</p>
            <p>DATABASE USED : SQL</p>
            <p>FRONTEND INVOLES : REACT JS, CSS, HTML, JS</p>
            </center>
        </div>
      
      </div>
      
    </div>    
        </div>
    )
}