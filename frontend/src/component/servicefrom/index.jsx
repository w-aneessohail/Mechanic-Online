import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuthContext } from "../../context/logincontext";
// import { useLocation } from "react-router-dom";

const validationSchema = Yup.object().shape({
  serviceType: Yup.string().required("Required"),
  Description: Yup.string().required("Required"),
  Name: Yup.string().required("Required"),
  Phone: Yup.string().required("Required"),
  Address: Yup.string().required("Required"),
});

const Serviceform = () => {
  const [showModal, setShowModal] = useState(false);
  const [catlist, setcatlist] = useState([]);
  const navigate = useNavigate();
  // const location = useLocation();
  const [formData, setFormData] = useState({
    serviceType: "",
    Description: "",
    Name: "",
    Phone: "",
    Address: "",
    Location: { latitude: "", longitude: "" },
  });
  const [error, setError] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const CustomerId = localStorage.getItem("userId");
  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/services",
        {
          ...values,
          Location: formData.Location,
          serviceStatus: "Inactive",
          CustomerId: CustomerId,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );

      console.log(response);
      setSubmitting(false);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
      setSubmitting(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            Location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  const { setIsLoggedIn } = useContext(UserAuthContext);

  // useEffect(() => {
  //   const CategoryType = location.state;
  //   console.log(CategoryType);
  // }, [location]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/categories", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setcatlist(res.data["getCategories"]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <Row className="py-4">
        <Col className="py-4">
          <h1 className="text-2xl font-bold mb-4 text-blue-500 text-center border-b-4 border-yellow-300 py-2">
            SERVICE FORM
          </h1>
          <Formik
            initialValues={{
              serviceType: "",
              Description: "",
              Name: "",
              Phone: "",
              Address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
          >
            {({ isSubmitting }) => (
              <Form className="z-10">
                <div>
                  <label
                    htmlFor="serviceType"
                    className="text-md mx-2 font-bold"
                  >
                    Service Type
                  </label>
                  <br />
                  <Field
                    // type="text"
                    // readOnly
                    // value={CategoryType}
                    as="select"
                    name="serviceType"
                    className="text-lg m-2 w-100 text-black px-2"
                  >
                    <option value="" disabled>
                      Select a Category
                    </option>
                    {catlist.map((data, index) => {
                      return (
                        <option key={index} value={data.CategoryType}>
                          {data.CategoryType}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="serviceType"
                    component="div"
                    className="px-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Description"
                    className="text-md mx-2 font-bold"
                  >
                    Service Description
                  </label>
                  <br />
                  <Field
                    type="text"
                    name="Description"
                    className="text-lg m-2 w-100 text-black px-2 border-3 border-blue-400 focus:outline-none"
                  />
                  <ErrorMessage
                    name="Description"
                    component="div"
                    className="px-2"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="text-md mx-2 font-bold">
                    Name
                  </label>
                  <br />
                  <Field
                    type="text"
                    name="Name"
                    className="text-lg m-2 w-100 text-black px-2 border-3 border-blue-400 focus:outline-none"
                  />
                  <ErrorMessage name="name" component="div" className="px-2" />
                </div>
                <div>
                  <label htmlFor="Phone" className="text-md mx-2 font-bold">
                    Phone
                  </label>
                  <br />
                  <Field
                    type="text"
                    name="Phone"
                    className="text-lg m-2 w-100 text-black px-2 border-3 border-blue-400 focus:outline-none"
                  />
                  <ErrorMessage name="Phone" component="div" className="px-2" />
                </div>
                <div>
                  <label htmlFor="Address" className="text-md mx-2 font-bold">
                    Address
                  </label>
                  <br />
                  <Field
                    type="text"
                    name="Address"
                    className="text-lg m-2 w-100 text-black px-2 border-3 border-blue-400 focus:outline-none"
                  />
                  <ErrorMessage
                    name="Address"
                    component="div"
                    className="px-2"
                  />
                </div>
                <div>
                  <label htmlFor="latitude" className="text-md mx-2 font-bold">
                    Latitude
                  </label>
                  <br />
                  <Field
                    type="number"
                    name="latitude"
                    className="text-lg m-2 w-100 text-black px-2 border-3 border-blue-400 focus:outline-none"
                    value={formData.Location.latitude}
                    readOnly
                  />
                  <ErrorMessage
                    name="latitude"
                    component="div"
                    className="px-2"
                  />
                </div>
                <div>
                  <label htmlFor="longitude" className="text-md mx-2 font-bold">
                    Longitude
                  </label>
                  <br />
                  <Field
                    type="number"
                    name="longitude"
                    className="text-lg m-2 w-100 text-black px-2 border-3 border-blue-400 focus:outline-none"
                    value={formData.Location.longitude}
                    readOnly
                  />
                  <ErrorMessage
                    name="longitude"
                    component="div"
                    className="px-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border-4 border-white rounded-lg m-2 px-2 py-1 w-100 font-bold bg-blue-500 text-white"
                >
                  Confirm Request
                </button>
              </Form>
            )}
          </Formik>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your request submitted successfully. A mechanic will reach out to
              you soon.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Serviceform;
