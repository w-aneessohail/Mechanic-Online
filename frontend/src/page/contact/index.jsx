import Contactbanner from "../../component/contactbanner";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../component/header";
import Prefooter from "../../component/prefooter";
import Footer from "../../component/footer";
import Contactform from "../../component/contactform";

const Contact = () => {
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
            <Contactbanner />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Contactform />
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

export default Contact;
