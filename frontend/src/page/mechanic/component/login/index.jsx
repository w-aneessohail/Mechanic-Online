import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuthContext } from "../../../../context/logincontext";

const LoginSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid email").required("Required"),
  Password: Yup.string().required("Required"),
});

const Mecloginform = () => {
  const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(false);
  const { setUserEmail, setIsLoggedIn } = useContext(UserAuthContext);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      console.log("Logging in with:", values);
      //   const userresponse = await axios.post(
      //     "http://localhost:3000/login",
      //     values
      //   );
      //   console.log("User login response:", userresponse.data);

      //   if (userresponse.status === 200) {
      //     setUserEmail(values.Email);
      //     setIsLoggedIn(true);
      //     setSubmitting(false);
      //     navigate("/");
      //     return;
      //   }

      const mechanicresponse = await axios.post(
        "http://localhost:3000/mechLogin",
        values
      );
      console.log("Mechanic login response:", mechanicresponse.data);

      if (mechanicresponse.status === 200) {
        const { data, gettoken } = mechanicresponse.data;
        const { id, Email } = data;

        // console.log("token", mechanicresponse.data.gettoken);
        // console.log("Id", mechanicresponse.data.data.id);
        // console.log("Email", mechanicresponse.data.data.Email);

        localStorage.setItem("token", gettoken);
        localStorage.setItem("mechanicId", id);
        localStorage.setItem("mechanicEmail", Email);
        setUserEmail(values.Email);
        setIsLoggedIn(true);
        setSubmitting(false);
        navigate("/m");
        return;
      }

      alert("Invalid email or password. Please try again.");
    } catch (error) {
      console.error("Error:", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        src="src\image\bgsignup1.png"
        alt="Your Image"
        className="object-cover w-full h-full fixed top-0 left-0 z-0 hidden lg:block"
      />
      <img
        src="src\image\bgsignup2.png"
        alt="Your Image"
        className="object-cover w-full h-full fixed top-0 left-0 z-0 hidden md:block lg:hidden"
      />
      <img
        src="src\image\bgsignup.jpg"
        alt="Your Image"
        className="object-cover w-full h-full fixed top-0 left-0 z-0 block md:hidden"
      />
      <div className="absolute w-100 p-4 md:top-24 border-[0px] h-full overflow-y-scroll no-scrollbar ">
        <Container>
          <Row className="justify-content-start">
            <Col md={6} className="text-white">
              <div className="bg-blue-500 py-2 pr-4 rounded-lg border-4 border-yellow-300 lg:w-3/4">
                <div className="flex justify-center">
                  <NavLink
                    to="/mecsignup"
                    // onClick={() => setShowModal(true)}
                    className="p-2 text-white ml-auto"
                  >
                    Create an account
                  </NavLink>
                  {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
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
                          to="/mecsignup"
                          className="p-2 text-white ml-auto bg-blue-500 no-underline font-bold mx-2 px-4 rounded-lg"
                        >
                          Mechanic
                        </NavLink>
                      </div>
                    </Modal.Body>
                  </Modal> */}
                </div>
                <h1 className="font-bold text-center">Log In </h1>
                <Formik
                  initialValues={{
                    Email: "",
                    Password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={handleLogin}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form className="z-10">
                      <div>
                        <label
                          htmlFor="Email"
                          className="text-lg mx-2 font-bold"
                        >
                          Email
                        </label>
                        <br />
                        <Field
                          type="email"
                          name="Email"
                          className="text-lg m-2 w-100 text-black px-2"
                        />
                        <ErrorMessage
                          name="Email"
                          component="div"
                          className="px-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Password"
                          className="text-lg mx-2 font-bold"
                        >
                          Password
                        </label>
                        <br />
                        <Field
                          type="password"
                          name="Password"
                          className="text-lg m-2 w-100 text-black px-2"
                        />
                        <ErrorMessage
                          name="Password"
                          component="div"
                          className="px-2"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className="border-4 border-white rounded-lg m-2 px-2 py-1 w-[100px] font-bold"
                      >
                        LOG IN
                      </button>
                      <div>
                        <a href="#" className="p-2 text-white">
                          Forget Password
                        </a>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Mecloginform;
