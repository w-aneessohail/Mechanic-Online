import { Col, Container, Row } from "react-bootstrap";
import Footer from "../component/footer";
import Header from "../component/header";
import Prefooter from "../component/prefooter";

const Layoutone = ({ children }) => {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col className="p-0">
            <Header />
          </Col>
        </Row>
        {children}
        <Row>
          <Col className="p-0 bg-slate-200">
            <Prefooter />
          </Col>
        </Row>
        <Row>
          <Col className="p-0 bg-slate-200">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layoutone;
