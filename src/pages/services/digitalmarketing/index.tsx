import { Helmet } from "react-helmet"
import Contactform from "../../../components/contact/Contactform"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import DigitalSection1 from "../../../components/services/digitalmarketing/DigitalSection1"
import WhyPartner from "../../../components/services/digitalmarketing/DigitalSection2"
import DigitalTopsection from "../../../components/services/digitalmarketing/TopDigitalSection"
import WhyNeedSEO from "../../../components/services/digitalmarketing/WhyNeedSEO"


const DigitalMarketingPage = () => {
  return (
    <>
     <Helmet>
        <title>Digital Marketing Services | Nexify Digital</title>
        <meta
          name="description"
          content="Boost your online presence with Nexify Digital's digital marketing services including SEO, social media marketing, and online advertising."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO services, social media marketing, online marketing, Nexify Digital"
        />
        <meta name="author" content="Nexify Digital" />
        <meta
          property="og:title"
          content="Best Digital Marketing Company | Nexify Digital"
        />
        <meta
          property="og:description"
          content="Grow your business online with expert SEO and digital marketing services. Increase visibility, traffic, and leads with Nexify Digital."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nexifydigital.in/services/digital_marketing"
        />
        <meta
          property="og:image"
          content="https://nexifydigital.in/imgs/img-main-careers-2018_1.webp"
        />
        <link
          rel="canonical"
          href="https://nexifydigital.in/services/digital_marketing"
        />
      </Helmet>
     <Header/>
     <DigitalTopsection/>
     <DigitalSection1/>
     <WhyNeedSEO/>
     <WhyPartner/>
     <Contactform/>
     <Footer/>
    </>
  )
}

export default DigitalMarketingPage