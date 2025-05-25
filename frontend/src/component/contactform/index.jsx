import { Col, Container, Row } from "react-bootstrap";

const Contactform = () => {
  return (
    <>
      <Container className="py-4">
        <Row className=" my-4 border-2 border-yellow-300 px-2">
          <Col xs={12} sm={12} md={6} className="py-2 px-0 ">
            <img
              src="src\image\bg (6-1).jpg"
              alt="Card image"
              className="w-100 h-[556px]"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-2  bg-blue-500 flex flex-col justify-center text-white p-4 "
          >
            <div className="px-4 py-2 rounded bg-slate-200 ">
              <h2 className="font-bold text-center text-blue-500">
                Send Your Queries
              </h2>
              <form className="flex flex-col">
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className=" bg-slate-200 text-black mb-1 rounded p-2 text-sm border-2 border-blue-500"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className=" bg-slate-200 text-black mb-1 rounded p-2 text-sm border-2 border-blue-500"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="contact"
                >
                  Phone No
                </label>
                <input
                  className=" bg-slate-200 text-black mb-1 rounded p-2 text-sm border-2 border-blue-500"
                  type="text"
                  placeholder="Enter Your Phone"
                />
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="3"
                  placeholder="Enter Description"
                  className=" bg-slate-200 text-black mb-1 rounded m-2 text-md p-2 border-2 border-blue-500"
                ></textarea>
                <input
                  className="text-2xl mb-1 rounded border-2 border-white my-2 bg-blue-500 font-bold"
                  type="submit"
                  value={"SUBMIT"}
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contactform;
