import UserService from "../../UserHandler/UserService";
import Sidebar from "../Sidebar";
import './profile.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loginDetails"));
  const u = user.email[0];

  const [us, setUs] = useState([]);

  useEffect(() => {
    const loginDetails = localStorage.getItem("loginDetails");
    if (!loginDetails) {
      navigate("/login"); // Navigate to the login page if the user is not logged in
    } else {
      UserService.searchUserByEmail(u).then((response) => {
        setUs(response.data);
      });
    }
  }, [navigate, u]);

  return (
    <div className="float-container">
      <div className="float-child1">
        <Sidebar />
      </div>
      <div className="float-child2">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25">
                          <img src="https://cdn.dribbble.com/userupload/5179787/file/original-a58fd876a559b8a04468770c7d9bc6cc.png?compress=1&resize=400x300&vertical=top" className="img-radius" alt="User-Profile-Image" />
                        </div>
                        <p>USER </p>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Access Info</h6>
                        <div className="row">
                          <div className="col-sm-12">
                            <p className="m-b-10 f-w-600">Email : </p>
                            <h6 className="text-muted f-w-400">{user.email}</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">ID : </p>
                            <h6 className="text-muted f-w-400">{us.id}</h6>
                          </div>
                        </div>
                        <hr></hr>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Other Information</h6>
                        <div className="row">
                          <div className="col-sm-12">
                            <p className="m-b-10 f-w-600">Name</p>
                            <h6 className="text-muted f-w-400">{us.firstName} {us.lastName}</h6>
                          </div>
                          <div className="col-sm-12">
                            <p className="m-b-10 f-w-600">Username</p>
                            <h6 className="text-muted f-w-400">{us.userName}</h6>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
