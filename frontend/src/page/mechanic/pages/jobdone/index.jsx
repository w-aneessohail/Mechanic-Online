import { Col, Container, Row } from "react-bootstrap";
import Finished from "../../component/finished";
import Mecheader from "../../component/mecheader";
import Mecprefooter from "../../component/mecprefooter";
import Footer from "../../../../component/footer";

const Finishedjob = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Mecheader />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Finished />
          </Col>
        </Row>
        {/* <Row>
          <Col className="p-0">
            <Servicelist />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Billboard />
          </Col>
        </Row>
        <Row>
          <Col className="p-0 bg-slate-200">
            <Review />
          </Col>
        </Row> */}
        <Row>
          <Col className="p-0 bg-slate-200">
            <Mecprefooter />
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

export default Finishedjob;
