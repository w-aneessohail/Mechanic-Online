import { useContext, useState } from "react";
import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../../../context/logincontext";
import axios from "axios";

const Mecheader = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserAuthContext);
  console.log(isLoggedIn);

  const handleLogout = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/logout`);
      console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("mechanicId");
      localStorage.removeItem("mechanicEmail");
      alert("Logged out Successfully.");
      setIsLoggedIn(false);
    } catch (err) {
      console.log("There is an issue is logout", err);
    }

    setIsLoggedIn(false);
    // navigate("/m");
    navigate("/meclogin");
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
              <NavLink to="/m" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Home</b>
              </NavLink>
              <NavLink to="/jobs" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Jobs</b>
              </NavLink>
              <NavLink to="/finished" className="nav-link text-white">
                <b className="hover:border-b-4 border-yellow-300">Finished</b>
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
                <button
                  className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300"
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
                          to="/signup"
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
                // <NavLink to="/meclogin">
                //   <button className="bg-blue-500 py-1 px-2 rounded-lg text-white font-bold mx-8 border-2 border-yellow-300">
                //     Log In
                //   </button>
                // </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Mecheader;
