import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../context/logincontext";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserAuthContext);
  console.log(isLoggedIn);

  const handleLogout = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/logout`);
      console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      alert("Logged out Successfully.");
      setIsLoggedIn(false);
    } catch (err) {
      console.log("There is an issue is logout", err);
    }

    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Navbar expand="sm" className="bg-blue-500 ">
        <Container fluid>
          <NavLink to="/" className="nav-link text-white font-bold">
            <div className="flex items-center font-bold">
              <span>Mechanic</span>
              <img
                src="src\image\logowhite.png"
                alt="Image Loading Error"
                className="w-[35px] h-[35px] mx-1"
              />
              <span>Online</span>
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Home</b>
              </NavLink>
              <NavLink to="/about" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">About</b>
              </NavLink>
              <NavLink to="/service" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Services</b>
              </NavLink>
              <NavLink to="/staff" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Our Staff</b>
              </NavLink>
              <NavLink to="/contact" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Contact Us</b>
              </NavLink>
            </Nav>
            <Nav className="ml-auto">
              {/* <button
                className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </button> */}
              {isLoggedIn ? (
                <>
                  <button
                    className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                  {/* <button
                    className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300"
                    onClick={() => navigate("/UserProfile")}
                  >
                    Profile
                  </button> */}
                </>
              ) : (
                // <NavLink to="/login">
                <>
                  <button
                    className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300"
                    onClick={() => setShowModal(true)}
                  >
                    Log In
                  </button>

                  <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>User or Mechanic?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="flex justify-center">
                        <NavLink
                          to="/login"
                          className="p-2 text-white ml-auto bg-blue-500 no-underline font-bold mx-2 px-4 rounded-lg"
                        >
                          User
                        </NavLink>
                        <NavLink
                          to="/meclogin"
                          className="p-2 text-white ml-auto bg-blue-500 no-underline font-bold mx-2 px-4 rounded-lg"
                        >
                          Mechanic
                        </NavLink>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
                // </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
