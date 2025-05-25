import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../../../component/carousel";
import Servicelist from "../../../../component/servicelist";
import Billboard from "../../../../component/Billboard";
import Mecheader from "../../component/mecheader";
import Mecprefooter from "../../component/mecprefooter";
import Footer from "../../../../component/footer";
import Review from "../../../../component/review";

const Meachanichome = () => {
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
            <Banner />
          </Col>
        </Row>
        <Row>
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
        </Row>
        <Row>
          <Col className="p-0 bg-slate-200">
            <Mecprefooter />
            {/* <Prefooter /> */}
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

export default Meachanichome;
