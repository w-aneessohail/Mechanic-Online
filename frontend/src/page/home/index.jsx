import { Col, Container, Row } from "react-bootstrap";
import Header from "../../component/header";
import Banner from "../../component/carousel";
import Footer from "../../component/footer";
import Billboard from "../../component/Billboard";
import Prefooter from "../../component/prefooter";
import Servicelist from "../../component/servicelist";
// import Work from "../../component/work";
// import Layoutone from "../../layout/layoutone";
import Review from "../../component/review";
import { useContext } from "react";
import { UserAuthContext } from "../../context/logincontext";

const Home = () => {
  const { isLoggedIn } = useContext(UserAuthContext);
  console.log(localStorage.getItem("token"));
  console.log(isLoggedIn);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0 fixed top-0 w-full z-50">
            <Header />
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

export default Home;
