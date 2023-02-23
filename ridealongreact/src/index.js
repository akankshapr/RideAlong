import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import Gallery from "./pages/gallery";
import MustVisitLocations from "./pages/MustVisitLocations";
import Community from "./pages/Community";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AfterLogin from "./pages/afterLogin";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="mustvisitlocations" element={<MustVisitLocations />} />
          <Route path="community" element={<Community />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="afterlogin" element={<AfterLogin />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);