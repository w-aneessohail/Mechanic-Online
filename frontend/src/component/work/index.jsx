import { Col, Container, NavLink, Row } from "react-bootstrap";

const Work = () => {
  return (
    <>
      <Container className="my-8">
        <Row>
          <Col xs={12} className=" p-10">
            <h1>Why Choose Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Consequuntur distinctio explicabo ratione!
            </p>
            <div className=" border-4 border-yellow-300 border-spacing-8"></div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Expert Engineers</b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Experience Skills </b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Guarantee Service </b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Trusted Work </b>
                <b>Trusted Work </b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;
