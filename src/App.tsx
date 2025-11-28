
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import CareerPage from "./pages/career";
import ScrollTop from "./components/ScrollTop";
import WebsitePage from "./pages/services/websitepage";
import AppdevelopmentPage from "./pages/services/appdevelopment";
import SoftwarePage from "./pages/services/software";
import DigitalMarketingPage from "./pages/services/digitalmarketing";
import VideoEditingPage from "./pages/services/video editing";
import BlogDetailsPage from "./pages/blogs/BlogDetailsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BlogMainPage from "./pages/blogs";
import PricingPage from "./pages/pricing";
// import Websiteicons from "./components/Websiteicons";

function App() {
  return (
    <Router>
      <ScrollTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route>
         <Route path="/services" element={<ServicesPage/>}/>
         <Route path="/services/website_development" element={<WebsitePage/>} />
         <Route path="/services/app_development" element={<AppdevelopmentPage />} />
         <Route path="/services/software_development" element={<SoftwarePage />} />
         <Route path="/services/digital_marketing" element={<DigitalMarketingPage />} />
         <Route path="/services/video_editing" element={<VideoEditingPage />} />
        </Route>
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/contact-us" element={<ContactPage />} />
        {/* <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} /> */}
        <Route path="/blogs" element={<BlogMainPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
      </Routes>
      {/* <div className="fixed bottom-60 right-0 z-50">
        <Websiteicons/>
      </div> */}
      <Footer/>
    </Router>
  );
}

export default App;
