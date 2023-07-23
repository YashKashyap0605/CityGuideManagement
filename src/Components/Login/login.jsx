import { useState } from "react";
import UserService from "../../UserHandler/UserService";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import './Login.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(){
  const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        email:'',
        password:''
      })
      
      const {email,password} = loginDetails;
      
      const changeHandler = e => {
        setLoginDetails({...loginDetails,[e.target.name]:[e.target.value]});
      }
      
      const submitHandler = async (event) => {
        event.preventDefault();
        const e = document.getElementById("email").value;
        const p = document.getElementById("password").value;
      
        try {
          const response = await UserService.loginUser(e, p);
          if (response != null) {
            // Display success toast notification
            toast.success("Login successful!", {
              autoClose: 4000, // Close the notification after 2 seconds
              hideProgressBar: false // Hide the progress bar
            });
      
            // Store login details in local storage
            localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
      
            // Navigate to the profile page
            navigate("/myprofile");
          } else {
            // Display error toast notification
            toast.error("Invalid email or password!", {
              autoClose: 4000, // Close the notification after 2 seconds
              hideProgressBar: false // Hide the progress bar
            });
          }
        } catch (error) {
          toast.error("Invalid email or password!", {
            autoClose: 4000, // Close the notification after 2 seconds
            hideProgressBar: false // Hide the progress bar
          });
        }
      };
      

     

      return (
        <div>
          <div>
            <br></br>
            <Navbar />
          </div>
            {/* Add ToastContainer for displaying notifications */}
            <ToastContainer />
            <div className="logintotal">
           
          <div className="containers" id="containers">
            
	      	<div className="form-containers log-in-containers">
			  <form  onSubmit={submitHandler} autocomplete="off">
				<h1>LOGIN HERE </h1>
			<br></br>
			<br></br>
			
				<input type="text" name="email" id="email" value={email} onChange={changeHandler} placeholder="Email Address" autocomplete="false"/><br/>
				<input type="password" name="password" id="password" value={password} onChange={changeHandler} placeholder="Password" autocomplete="false"/><br/>
				
				<button  type="submit" name="submit">Log In</button>
			</form>
		</div>
		<div className="overlay-containers">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
				<img src="https://www.shutterstock.com/image-vector/welcome-back-decorative-lettering-text-260nw-288670112.jpg"></img>
				</div>
			</div>
		</div>
	</div>
          </div>
        </div>
      );

      
}