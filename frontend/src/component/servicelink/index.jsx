import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Servicelink = () => {
  const navigate = useNavigate();
  const [catlist, setcatlist] = useState([]);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/categories", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setcatlist(res.data["getCategories"]);
      console.log(res.data["getCategories"]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className=" p-10 ">
            <h1>What We Do</h1>
            <div className="flex justify-between">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.Consequuntur distinctio explicabo ratione!
              </p>
            </div>
            <div className=" border-4 border-yellow-300 border-spacing-8"></div>
          </Col>
          {catlist.map((data, index) => {
            return (
              <Col xs={12} sm={6} lg={4} key={index} className="p-4">
                <div
                  className="py-4 px-2 rounded-lg text-center cursor-pointerx"
                  onClick={() => {
                    navigate("/serviceform", { state: data.CategoryType });
                  }}
                >
                  <div>
                    <div className="h-[120px] p-2 flex justify-center">
                      <img
                        src="src\image\carmechanic.png"
                        alt="service icon"
                        className="h-100"
                      />
                    </div>
                    <h3>
                      <b>{data.CategoryType}</b>
                    </h3>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 p-2 my-2 rounded-lg text-white font-bold h-10"
                    onClick={() => {
                      navigate(`/serviceform/`, { state: data.CategoryType });
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Servicelink;
