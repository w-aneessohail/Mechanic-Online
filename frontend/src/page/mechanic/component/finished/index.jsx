import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Finished = () => {
  const [joblist, setjoblist] = useState([]);

  const fetchJobs = async () => {
    // const serviceStatus = {
    //   serviceStatus: "Inactive",
    // };
    try {
      const res = await axios.get("http://localhost:3000/jobcompletion");
      setjoblist(res.data["jobCompletions"]);
      console.log(res.data["jobCompletions"]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  // console.log()
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Container className="my-4">
        <h1 className="text-center font-bold text-blue-500 border-b-4 border-yellow-300 py-2">
          FINISHED JOBS
        </h1>
        <Row>
          <Col md={1} className="p-0 my-2">
            <div className="no-underline text-white bg-black text-lg font-semibold  m-2 text-center hover:text-xl h-100 flex justify-center items-center">
              Sr
            </div>
          </Col>
          <Col md={8} className="p-0  my-2">
            <div className="no-underline text-white bg-black text-lg font-semibold  m-2 text-center hover:text-xl h-100 flex justify-center items-center">
              Description
            </div>
          </Col>
          <Col md={3} className="p-0 my-2">
            <div className="no-underline text-white bg-black text-lg font-semibold  m-2 text-center hover:text-xl h-100 flex justify-center items-center">
              T.Price
            </div>
          </Col>
        </Row>
        {joblist.map((data, index) => {
          return (
            <Row key={index}>
              <Col md={1} className="p-0 my-2">
                <div className="no-underline text-white bg-black text-lg font-semibold  m-2 text-center hover:text-xl h-100 flex justify-center items-center">
                  {data.id}
                </div>
              </Col>
              <Col md={8} className="p-0  my-2">
                <div className="no-underline text-white bg-black text-lg font-semibold  m-2 text-center hover:text-xl h-100 flex justify-center items-center">
                  {data.Description}
                </div>
              </Col>
              <Col md={3} className="p-0 my-2">
                <div className="no-underline text-white bg-black text-lg font-semibold  m-2 text-center hover:text-xl h-100 flex justify-center items-center">
                  {data.totalBill}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Finished;
