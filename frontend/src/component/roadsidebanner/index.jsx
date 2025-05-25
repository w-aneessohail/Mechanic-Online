import { Col, Container, Row } from "react-bootstrap";

const Roadsidebanner = () => {
  return (
    <>
      <Container fluid>
        <Row className="m-4 border-4 border-yellow-300 px-2">
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
            className="my-2 bg-blue-500 text-center flex flex-col justify-center text-white p-4"
          >
            <h2 className="font-bold">Need a Roadside Assistance?</h2>
            <p>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made. This
              paragraph is also for those who are looking out for a reliable car
              repair.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Roadsidebanner;
