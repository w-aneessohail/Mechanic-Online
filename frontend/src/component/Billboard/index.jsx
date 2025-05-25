import { Card, Col, Container, Row } from "react-bootstrap";

const Billboard = () => {
  return (
    <>
      <Container fluid>
        <Row className="m-4 border-4 border-yellow-300 px-2">
          <Col xs={12} sm={12} md={6} className="py-2 px-0">
            <img
              src="src\image\roadside.jpg"
              alt="Card image"
              className="w-100"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-2 bg-blue-500 text-center flex flex-col justify-center text-white py-4"
          >
            <h4 className="font-bold pb-2">Your Trusted Trouble Solver!</h4>
            <p className="md:px-4">
              Welcome to Your Mechanic On Road! We're your go-to team for
              automotive emergencies. From flat tires to engine issues, we'll
              get you back on track quickly and safely.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Billboard;
