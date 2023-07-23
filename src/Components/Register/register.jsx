import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserService from "../../UserHandler/UserService";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: '',
    password: '',
    dob: '',
    firstName: '',
    lastName: '',
    userName: ''
  });

  const { email, password, dob, firstName, lastName, userName } = details;

  const changeHandler = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const e = document.getElementById("email").value;
    const p = document.getElementById("password").value;
    const fn = document.getElementById("firstName").value;
    const ln = document.getElementById("lastName").value;
    const u = document.getElementById("userName").value;
    const d = document.getElementById("dob").value;
    const today = new Date();
    var currentdate = new Date();

    try {
      const response = await UserService.registerUser({
        id: 0,
        email: e,
        password: p,
        firstName: fn,
        lastName: ln,
        userName: u,
        dob: d,
        isAdmin: false,
        createdAt: currentdate
      });
      toast.success("Registration successful. Please log in.", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message, {
          autoClose: 2000,
          hideProgressBar: true,
        });
      } else {
        toast.error("Incorrect details.", {
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <div className="reg">
      <Navbar />
      <div className="containerr">
        <ToastContainer />
        <center>
        <div className="title" style={{color: 'white'}}>Please Register Here</div></center>
        <div className="content">
          <form onSubmit={submitHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email : </span>
                <input type="text" name="email" id="email" value={email} onChange={changeHandler} placeholder="Enter your Email" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" name="userName" id="userName" value={userName} onChange={changeHandler} required placeholder="Choose Username" />
              </div>
              <div className="input-box">
                <span className="details">First Name</span>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={changeHandler} required placeholder="Enter your First Name"/>
              </div>
              <div className="input-box">
                <span className="details">Last Name : </span>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={changeHandler} placeholder="Enter your Last Name" />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" name="password" id="password" value={password} onChange={changeHandler} placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Date Of Birth  : </span>
                <input type="date" name="dob" id="dob" value={dob} onChange={changeHandler}placeholder="01/03/2001" required />
              </div>
            </div>
           
            <div className="button">
              <input type="submit" value="Register" name="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



