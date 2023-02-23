import { Outlet, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function MyComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand><Link to="/" style={{ textDecoration: 'none',color:'#fff' }}>Ride Along</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>

          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/gallery" className="nav-link-dd">Gallery</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/mustvisitlocations" className="nav-link-dd">Must Visit Locations</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/community" className="nav-link-dd">Community</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/contactus" className="nav-link-dd">Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/aboutus" className="nav-link-dd">About Us</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function MyFooter() {
  return (
    <footer style={{  backgroundColor: "#343a40", left: 0, bottom: 0, width: "100%", color: "#fff", fontSize: "14px", paddingTop: "5px" }}>
      <div className="containerFooter">
        <div className="rowFooter">
          <div className="col-md-6">
            <p>&copy; 2023 Ride Along</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ display: "inline-block", marginRight: "1rem" }}><a href="#privacy" style={{ textDecoration: "none", color: "#fff" }}>Privacy Policy</a></li>
              <li style={{ display: "inline-block", marginRight: 0 }}><a href="#terms" style={{ textDecoration: "none", color: "#fff" }}>Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}



const Layout = () => {
  return (
    <>
      <MyComponent />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default Layout;
