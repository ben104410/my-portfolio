import './Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-header">
      <img src="IMG_20230430_163442_689.jpg" alt="Profile" className="navbar-profile-img" />
      <div className="logo">BENJAMIN</div>
    </div>
    
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;



