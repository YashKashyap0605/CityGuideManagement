
import './App.css';
import Login from './Components/Login/login.jsx';
import Home from './Components/Home/home.jsx';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Components/About/about.jsx';
import Register from './Components/Register/register';
import ViewAllAttractions from './Components/Attraction/ViewAllAttractions';
import AddAttraction from './Components/Attraction/addattraction';
import AddReview from './Components/Reviews/addReview';
import GetAllReviewUnderAttraction from './Components/Reviews/GetAllReviewUnderAttraction';
import Profile from './Components/User/profile';
import SearchAttractionByKeyword from './Components/Attraction/searchAttractionByKeyword';
import SearchUserByKeyword from './Components/User/searchUser';

function App() {
  return (
    <Router>
    <div></div>
   <Routes >
     <Route path="/" element={ <Home />}></Route>
     <Route path="/login" element={<Login />}></Route>
     <Route path="/register" element={ <Register />}></Route>
     <Route path="/about" element={ <About />}></Route>
     <Route path="/viewallattractions" element={<ViewAllAttractions/>}></Route>
     <Route path="/addattraction" element={<AddAttraction/>}></Route>
     <Route path="/addreview" element={<AddReview/>}></Route>
     <Route path="/viewreviews" element={<GetAllReviewUnderAttraction/>}  ></Route>
     <Route path="/myprofile" element={<Profile/>}></Route>
     <Route path="/searchattraction" element={<SearchAttractionByKeyword/>}></Route>
     <Route path="/searchuser" element={<SearchUserByKeyword/>}></Route>
   </Routes>
</Router>
  );
}

export default App;
