import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SignUpSchema = Yup.object().shape({
  FirstName: Yup.string().min(3).max(30).required("Required"),
  LastName: Yup.string().min(3).max(30).required("Required"),
  Username: Yup.string().min(3).max(20).required("Required"),
  Email: Yup.string()
    .min(10)
    .max(30)
    .email("Invalid email")
    .required("Required"),
  Password: Yup.string().min(8).max(15).required("Required"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Passwords must match")
    .required("Required"),
  Phone: Yup.string().min(11).max(15).required("Required"),
  CNIC: Yup.string().min(12).max(15).required("Required"),
  Address: Yup.string().required("Required"),
  // CategoryId: Yup.string().required("Required"),
});

const Mecsignup = () => {
  const navigate = useNavigate();
  // const [catlist, setcatlist] = useState([]);

  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      // Validate with Yup schema
      await SignUpSchema.validate(values, { abortEarly: false });

      // Exclude ConfirmPassword field and parse CategoryId to an integer
      const { ConfirmPassword, ...formData } = values;
      // const categoryId = parseInt(CategoryId, 10);

      // console.log("Signing in with:", { ...formData, CategoryId: categoryId });

      // Make API call with CategoryId as an integer
      const response = await axios.post(
        "http://localhost:3000/mechanic",
        formData
        // CategoryId: categoryId,
      );

      console.log(response);

      setSubmitting(false);

      navigate("/meclogin");
    } catch (error) {
      console.error("Error:", error);
      setSubmitting(false);
    }
  };

  // const fetchCategories = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/categories");
  //     setcatlist(res.data["getCategories"]);
  //   } catch (e) {
  //     console.log("Error", e);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  return (
    <>
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
        <div className="absolute w-100 p-4 border-[0px] h-full overflow-y-scroll no-scrollbar ">
          <Container>
            <Row className="justify-content-start">
              <Col md={6} className="text-white">
                <div className="bg-blue-500 py-2 pr-4 rounded-lg border-4 border-yellow-300 lg:w-3/4">
                  <div className="flex justify-center">
                    <NavLink to="/meclogin" className="p-2 text-white ml-auto">
                      Already have an account? Log In
                    </NavLink>
                  </div>
                  <h2 className="font-bold text-center">Sign Up</h2>
                  <Formik
                    initialValues={{
                      FirstName: "",
                      LastName: "",
                      Username: "",
                      Email: "",
                      Password: "",
                      ConfirmPassword: "",
                      Phone: "",
                      CNIC: "",
                      Address: "",
                      // CategoryId: "",
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSignUp}
                  >
                    {({ isSubmitting }) => (
                      <Form className="z-10">
                        <div>
                          <label
                            htmlFor="FirstName"
                            className="text-md mx-2 font-bold"
                          >
                            First Name
                          </label>
                          <br />
                          <Field
                            type="text"
                            name="FirstName"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="FirstName"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="LastName"
                            className="text-md mx-2 font-bold"
                          >
                            Last Name
                          </label>
                          <br />
                          <Field
                            type="text"
                            name="LastName"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="LastName"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Username"
                            className="text-md mx-2 font-bold"
                          >
                            Username
                          </label>
                          <br />
                          <Field
                            type="text"
                            name="Username"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="Username"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Email"
                            className="text-md mx-2 font-bold"
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
                            className="text-md mx-2 font-bold"
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
                        <div>
                          <label
                            htmlFor="ConfirmPassword"
                            className="text-md mx-2 font-bold"
                          >
                            Confirm Password
                          </label>
                          <br />
                          <Field
                            type="password"
                            name="ConfirmPassword"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="ConfirmPassword"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Phone"
                            className="text-md mx-2 font-bold"
                          >
                            Phone
                          </label>
                          <br />
                          <Field
                            type="text"
                            name="Phone"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="Phone"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="CNIC"
                            className="text-md mx-2 font-bold"
                          >
                            CNIC
                          </label>
                          <br />
                          <Field
                            type="text"
                            name="CNIC"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="CNIC"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Address"
                            className="text-md mx-2 font-bold"
                          >
                            Address
                          </label>
                          <br />
                          <Field
                            type="text"
                            name="Address"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <ErrorMessage
                            name="Address"
                            component="div"
                            className="px-2"
                          />
                        </div>
                        {/* <div>
                          <label
                            htmlFor="CategoryId"
                            className="text-md mx-2 font-bold"
                          >
                            Category
                          </label>
                          <br />
                          <Field
                            as="select"
                            name="CategoryId"
                            className="text-lg m-2 w-100 text-black px-2"
                          >
                            <option value="" disabled>
                              Select a Category
                            </option>
                            {catlist.map((data, index) => {
                              return (
                                <option key={index} value={data.id}>
                                  {data.CategoryType}
                                </option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="CategoryId"
                            component="div"
                            className="px-2"
                          />
                        </div> */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="border-4 border-white rounded-lg m-2 px-2 py-1 w-[100px] font-bold"
                        >
                          Sign Up
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Mecsignup;
