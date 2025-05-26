
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import CareerPage from "./pages/career";
import ScrollTop from "./components/ScrollTop";
import Websiteicons from "./components/Websiteicons";

function App() {
  return (
    <Router>
      <ScrollTop/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage/>}/>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <div className="fixed bottom-60 right-0 z-50">
        <Websiteicons/>
      </div>
    </Router>
  );
}

export default App;
