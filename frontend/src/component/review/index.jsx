import { Col, Container, Row } from "react-bootstrap";

const Review = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className=" p-10 ">
            <h1>Our Customer Say</h1>
            <p>
              This is a short description elaborating the reason that you have
              mentioned above. Tell them why you are good!
            </p>
            <div className=" border-4 border-yellow-300 border-spacing-8"></div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="p-4">
            <div className="mb-4 p-4 bg-slate-100 border-b-4 border-yellow-300">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
              <div className="h-[60px] p-2 flex items-center">
                <img
                  src="src\image\carmechanic.png"
                  alt="service icon"
                  className="h-[50px] rounded-full p-2 bg-blue-500 w-[50px]"
                />
                <h4 className="px-4">Anees Sohail</h4>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="p-4">
            <div className="mb-4 p-4 bg-slate-100 border-b-4 border-yellow-300">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
              <div className="h-[60px] p-2 flex items-center">
                <img
                  src="src\image\carmechanic.png"
                  alt="service icon"
                  className="h-[50px] rounded-full p-2 bg-blue-500 w-[50px]"
                />
                <h4 className="px-4">Anees Sohail</h4>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="p-4">
            <div className="mb-4 p-4 bg-slate-100 border-b-4 border-yellow-300">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi at minus incidunt aut labore quidem deserunt voluptate
                quod consequatur, doloribus maiores molestias corrupti, nemo,
                maxime eum sapiente provident nesciunt dolore.
              </p>
              <div className="h-[60px] p-2 flex items-center">
                <img
                  src="src\image\carmechanic.png"
                  alt="service icon"
                  className="h-[50px] rounded-full p-2 bg-blue-500 w-[50px]"
                />
                <h4 className="px-4">Anees Sohail</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Review;
