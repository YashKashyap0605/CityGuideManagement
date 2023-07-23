import Footer from '../Footer/Footer.jsx'
import './Home.css'
import Navbar from '../Navbar/Navbar.jsx'
export default function Home(){
    return (
        <div>
        <div className="containermain">
       <Navbar/>

        <div className="section-containermain-items">
            <div className="section-items-col-12">
                <div className="section">
                    <h1>WELCOME TO KOLKATA</h1>
                    <h3>Why not visit the city with everybody Online?</h3>
                    <h3>Post what you Feel, React to what others say.</h3>
                    <h3>Let us Manage Our City's Tourism Together</h3>
                    <a className="lin" href="/register"><button className="bt"><i ></i>Register</button></a>
                </div>

                <div className="alta">
                    <img
                        src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/18/ae773653302b113396f8ad6277e145f6_original.jpg" />
                </div>
            </div>
        </div>
       
       
    </div>
    </div>
    
    );
}