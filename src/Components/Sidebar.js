import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the login details from local storage
    localStorage.removeItem("loginDetails");

    // Navigate to the login page
    navigate("/");
  };


  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/viewallattractions" className="text-decoration-none" style={{ color: 'inherit' }}>
            Kolkata 
          </a>
        </CDBSidebarHeader>
     
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/viewallattractions" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">View All Attractions</CDBSidebarMenuItem>
            </NavLink>
            <hr></hr>
            <NavLink exact to="/addattraction" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Attraction</CDBSidebarMenuItem>
            </NavLink>
            <hr></hr>
            <NavLink exact to="/searchattraction" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Search Attraction</CDBSidebarMenuItem>
            </NavLink>

            <hr></hr>
            <NavLink exact to="/searchuser" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Search User</CDBSidebarMenuItem>
            </NavLink>
            
            <hr></hr>
            <NavLink exact to="/myprofile"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">My Profile</CDBSidebarMenuItem>
            </NavLink>
            <hr></hr>
           
              <CDBSidebarMenuItem ><button onClick={handleLogout}>LOGOUT</button></CDBSidebarMenuItem>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            By Yash Kashyap
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;