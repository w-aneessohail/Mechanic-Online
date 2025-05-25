import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
  Description: Yup.string().required("Description is required"),
  laborCost: Yup.number()
    .required("Labor cost is required")
    .min(0, "Labor cost must be greater than or equal to 0"),
  serviceCharge: Yup.number()
    .required("Service charge is required")
    .min(0, "Service charge must be greater than or equal to 0"),
});

const Jobcredentials = () => {
  const [accepted, setAccepted] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [jobdetails, setjobdetails] = useState(null);
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const handleAccept = async () => {
    const serviceStatus = {
      serviceStatus: "Active",
    };
    const res = await axios.put(
      `http://localhost:3000/services/${serviceId}`,
      serviceStatus
    );
    console.log(res);
    if (res.status === 200) {
      setAccepted(true);
    } else {
      console.error("Unexpected response status:", res.status);
    }
  };

  const handleDone = async (values, { setSubmitting, resetForm }) => {
    const total =
      parseFloat(values.laborCost) + parseFloat(values.serviceCharge);
    setTotalCost(total.toFixed(2));
    console.log(values);
    setTimeout(() => {
      resetForm();
      setTotalCost(0);
      setSubmitting(false);
    }, 1000);

    try {
      // const MechanicId = localStorage.getItem("mechanicId");
      const MechanicId = parseInt(localStorage.getItem("mechanicId"));
      const requestServiceId = parseInt(serviceId);
      const res = await axios.post(`http://localhost:3000/jobcompletion`, {
        ...values,
        MechanicId: MechanicId,
        requestServiceId: requestServiceId,
      });
      console.log(res);
      navigate("/finished");
      alert("Task Completed Successfully");
    } catch (e) {
      console.log("Error", e);
    }

    try {
      const MechanicId = parseInt(localStorage.getItem("mechanicId"));
      const serviceStatus = {
        serviceStatus: "Completed",
        MechanicId: MechanicId,
      };
      const res = await axios.put(
        `http://localhost:3000/services/${serviceId}`,
        serviceStatus
      );
      console.log(res);
      alert("Task Completed Successfully");
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    const fetchJobdetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/services/${serviceId}`
        );
        setjobdetails(res.data["service"]);
        console.log(jobdetails);
      } catch (e) {
        console.log("Error", e);
      }
    };

    fetchJobdetails();
  }, []);

  if (!jobdetails) {
    return <div>Loading...</div>;
  }

  const location = jobdetails.Location;
  const mapurl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="p-4 bg-blue-500 text-white m-4 border-4 border-yellow-300">
              <p className="md:text-2xl">
                <span className="font-bold">User Contact :-</span>{" "}
                {jobdetails.Phone}
              </p>
              <p className="md:text-2xl">
                <span className="font-bold">User Location :-</span>
                <a href={mapurl} className="px-2 text-white" target="_blank">
                  http://google.map
                </a>
              </p>
              <div>
                <p className="font-bold md:text-2xl">Job Description :-</p>
                <p className="ml-4 pl-4">{jobdetails.Description}</p>
              </div>
              {!accepted && (
                <button
                  onClick={handleAccept}
                  className="bg-blue-500 border-4 border-white text-white p-2 text-md text-center font-bold"
                >
                  Accept
                </button>
              )}
              {accepted && (
                <button
                  disabled
                  className="bg-blue-500 border-4 border-white text-white p-2 text-md text-center font-bold cursor-not-allowed"
                >
                  Accepted
                </button>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          {accepted && (
            <Col>
              <div className="p-4 bg-blue-500 text-white m-4 border-4 border-yellow-300">
                <Formik
                  initialValues={{
                    Description: "",
                    laborCost: "",
                    serviceCharge: "",
                  }}
                  validationSchema={ValidationSchema}
                  onSubmit={handleDone}
                >
                  {({ values, handleChange, isSubmitting }) => (
                    <Form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                      <div className="mb-4">
                        <label
                          htmlFor="Description"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Description
                        </label>
                        <Field
                          type="text"
                          name="Description"
                          id="Description"
                          className="form-input w-full text-gray-700"
                        />
                        <ErrorMessage
                          name="Description"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="laborCost"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Labor Cost
                        </label>
                        <Field
                          type="number"
                          name="laborCost"
                          id="laborCost"
                          className="form-input w-full text-gray-700"
                          onChange={(e) => {
                            handleChange(e);
                            const total =
                              parseFloat(e.target.value) +
                              parseFloat(values.serviceCharge);
                            setTotalCost(total.toFixed(2));
                          }}
                        />
                        <ErrorMessage
                          name="laborCost"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="serviceCharge"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Service Charge
                        </label>
                        <Field
                          type="number"
                          name="serviceCharge"
                          id="serviceCharge"
                          className="form-input w-full text-gray-700"
                          onChange={(e) => {
                            handleChange(e);
                            const total =
                              parseFloat(e.target.value) +
                              parseFloat(values.laborCost);
                            setTotalCost(total.toFixed(2));
                          }}
                        />
                        <ErrorMessage
                          name="serviceCharge"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="totalCost"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Total Cost
                        </label>
                        <input
                          type="text"
                          name="totalCost"
                          id="totalCost"
                          className="form-input w-full text-gray-700"
                          value={totalCost}
                          readOnly
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Jobcredentials;
