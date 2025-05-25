import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Service from "../page/service";
import About from "../page/about";
import Staff from "../page/staff";
import Contact from "../page/contact";
import Login from "../page/login";
import Signup from "../page/signup";
import Servicefrompage from "../page/serviceform";
import Meachanichome from "../page/mechanic/pages/home";
import Joblist from "../page/mechanic/pages/joblist";
import Finishedjob from "../page/mechanic/pages/jobdone";
import Jobdetail from "../page/mechanic/pages/detail";
import PrivateRoute from "./PrivateRoute";
import Mecsignup from "../page/mechanic/component/signup";
import Mecloginform from "../page/mechanic/component/login";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/serviceform"
          element={
            <PrivateRoute>
              <Servicefrompage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<div>Page not found</div>} />

        {/* Mechanic Routes */}
        <Route path="/m" element={<Meachanichome />} />
        <Route path="/jobs" element={<Joblist />} />
        <Route path="/jobdetail/:serviceId?" element={<Jobdetail />} />
        <Route path="/finished" element={<Finishedjob />} />
        <Route path="/mecsignup" element={<Mecsignup />} />
        <Route path="/meclogin" element={<Mecloginform />} />
      </Routes>
    </>
  );
};

export default AppRoute;
