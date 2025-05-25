import { Col, Container, Row } from "react-bootstrap";

const Staffmember = () => {
  return (
    <>
      <Container>
        <Row className="m-2">
          <Col xs={12} sm={12} md={6} className="py-2 px-0">
            <img
              src="src\image\bg (8).jpg"
              alt="Card image"
              className="w-100"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-2 bg-blue-500 flex flex-col justify-center text-white p-4"
          >
            <h2 className="font-bold">Tony Adam</h2>
            <h5>Business Owner</h5>
            <p>
              This is a short description elaborating the service you have
              mentioned above.​​
            </p>
          </Col>
          <div className="border-b-4 border-yellow-300 mt-2"></div>
        </Row>
        <Row className="m-2">
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\bg (8).jpg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Need a Roadside Assistance?</h5>
                  <p>
                    A descriptive paragraph that tells clients how good you are
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\bg (8).jpg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Need a Roadside Assistance?</h5>
                  <p>
                    A descriptive paragraph that tells clients how good you are
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <div className="border-b-4 border-yellow-300 my-2"></div>
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Need a Roadside Assistance?</h5>
                  <p>
                    A descriptive paragraph that tells clients how good you are
                  </p>
                </Col>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\bg (8).jpg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Need a Roadside Assistance?</h5>
                  <p>
                    A descriptive paragraph that tells clients how good you are
                  </p>
                </Col>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\bg (8).jpg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Staffmember;
