import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div className="nav-bar">
      <h1>Welcome</h1>
      <Link to="/">Home</Link> |
      <Link to="/apartments"> Apartments</Link> |
      <Link to="/apartments/create"> Create Apartment</Link> 
    </div>
  )
}

export default NavBar;