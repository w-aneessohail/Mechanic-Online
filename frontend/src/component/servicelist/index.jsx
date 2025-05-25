import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Servicelist = () => {
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
              <button
                className="bg-blue-500 p-2 rounded-lg text-white font-bold mb-2 mx-8 h-10"
                onClick={() => {
                  navigate("/service");
                }}
              >
                Services
              </button>
            </div>
            <div className=" border-4 border-yellow-300 border-spacing-8"></div>
          </Col>
          {catlist.map((data, index) => {
            return (
              <Col xs={12} className=" text-center" key={index}>
                <div className="flex flex-col items-center">
                  <div className="h-[120px] p-2">
                    <img
                      src="src\image\carmechanic.png"
                      alt="service icon"
                      className="h-100"
                    />
                  </div>
                  <h3>
                    <b key={index}>{data.CategoryType}</b>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi at minus incidunt aut labore quidem deserunt
                    voluptate quod consequatur, doloribus maiores molestias
                    corrupti, nemo, maxime eum sapiente provident nesciunt
                    dolore.
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Servicelist;
