import { Col, Container, NavLink, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Prefooter = () => {
  return (
    <>
      <Container fluid>
        <Row className="m-2">
          <Col xs={12} sm={6} md={6} lg={4} className="p-4">
            <div>
              <h3 className=" text-blue-500 font-bold">Mechanic Online</h3>
              <p>
                Maxime modi distinctio beatae sit dignissimos dolorum ratione ad
                facilis soluta? Officia, quis assumenda nostrum magni asperiores
                earum obcaecati.
              </p>
              <div className="flex justify-around">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="p-4  sm:text-center">
            <h3 className=" text-blue-500 font-bold shadow-yellow-500">
              Our Services
            </h3>
            <NavLink to="/service">Mechanical Issue</NavLink>
            <NavLink to="/service">Electrical Issue</NavLink>
            <NavLink to="/service">Out Of Fuel</NavLink>
            <NavLink to="/service">Towing Facility</NavLink>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="p-4">
            <h3 className=" text-blue-500 font-bold shadow-yellow-500">
              Conatct Us
            </h3>
            <p className="m-0">
              <b>Address:</b> Street # 1 ,Office # 44, ModelTown Lahore
            </p>
            <p className="m-0">
              <b>Whatsapp:</b> 0300 0011223
            </p>
            <p className="m-0">
              <b>Email:</b> mechaniconline@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Prefooter;
