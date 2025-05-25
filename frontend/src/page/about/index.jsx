import { Col, Container, Row } from "react-bootstrap";
import Header from "../../component/header";
import Work from "../../component/work";
import Prefooter from "../../component/prefooter";
import Footer from "../../component/footer";
import Aboutbanner from "../../component/aboutbanner";

const About = () => {
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
            <Aboutbanner />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Work />
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

export default About;
