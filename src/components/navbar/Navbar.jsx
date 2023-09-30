import "./Navbar.css";

function Navbar() {
  return (
    <div className="navSection">
      <div className="navBar">
        <h3>Booking.com</h3>
        <div className="navButton">
          <button className="navbtn">Register</button>
          <button className="navbtn">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
