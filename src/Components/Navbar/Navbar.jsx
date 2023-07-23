import './Navbar.css'
export default function Navbar(){
    return (
        <header className="nav" id="and_menor">
        <div className="nav-container-content">
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/login">LOGIN</a>
                <a href="/register">REGISTER</a>
                <a href="/about">ABOUT</a>
            </nav>
        </div>
    </header>
    );
}