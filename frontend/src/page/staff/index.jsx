import { Col, Container, Row } from "react-bootstrap";
import Header from "../../component/header";
import Staffbanner from "../../component/staffbanner";
import Prefooter from "../../component/prefooter";
import Footer from "../../component/footer";
import Staffmember from "../../component/staffmember";

const Staff = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Staffbanner />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Staffmember />
          </Col>
        </Row>
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

export default Staff;
