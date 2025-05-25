import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  const [joblist, setjoblist] = useState([]);

  const fetchJobs = async () => {
    // const serviceStatus = {
    //   serviceStatus: "Inactive",
    // };
    try {
      const res = await axios.get("http://localhost:3000/servicesw");
      setjoblist(res.data["services"]);
      console.log(res.data["services"]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <>
      <Container className="pb-4">
        <Row>
          <Col>
            <h1 className="text-blue-500 font-bold text-center m-4 border-b-4 border-yellow-300">
              JOB LIST
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="p-0">
              {joblist.map((data, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={`/jobdetail/${encodeURIComponent(data.id)}`}
                      className="no-underline  text-blue-500 border-2 border-blue-500 bg-slate-200 block text-lg font-bold p-2 m-2 text-center hover:text-xl"
                    >
                      Job Responsibilty {index}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
