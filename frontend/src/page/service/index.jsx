// import Layoutone from "../../layout/layoutone";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../component/header";
import Prefooter from "../../component/prefooter";
import Footer from "../../component/footer";
import Servicelink from "../../component/servicelink";
import Servicebanner from "../../component/servicebanner";
import Roadsidebanner from "../../component/roadsidebanner";
import Review from "../../component/review";

const Service = () => {
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
            <Servicebanner />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Servicelink />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Roadsidebanner />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Review />
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

export default Service;
