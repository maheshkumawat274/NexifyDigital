import { Helmet } from "react-helmet"
import Contactform from "../../../components/contact/Contactform"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import SoftwareSection1 from "../../../components/services/software/SoftwareSection1"
import SoftwareTopsection from "../../../components/services/software/TopSoftware"
import WhyChooseSoftware from "../../../components/services/software/WhyChooseSoftware"
import WhySoftware from "../../../components/services/software/WhyNeedSoftware"


const SoftwarePage = () => {
  return (
    <>
    <Helmet>
        <title>Custom Software Development Services | Nexify Digital</title>
        <meta
          name="description"
          content="Nexify Digital offers reliable and scalable custom software development solutions to help streamline your business operations."
        />
        <meta
          name="keywords"
          content="custom software development, business software solutions, software company, Nexify Digital"
        />
        <meta name="author" content="Nexify Digital" />
        <meta
          property="og:title"
          content="Software Development Company | Nexify Digital"
        />
        <meta
          property="og:description"
          content="Build efficient and secure software with Nexify Digital's expert development services. From ERP to CRM, we cover it all."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nexifydigital.in/services/software_development"
        />
        <meta
          property="og:image"
          content="https://nexifydigital.in/imgs/images.jpeg"
        />
        <link
          rel="canonical"
          href="https://nexifydigital.in/services/software_development"
        />
      </Helmet>
     <Header/>
     <SoftwareTopsection/>
     <SoftwareSection1/>
     <WhySoftware/>
     <WhyChooseSoftware/>
     <Contactform/>
     <Footer/>
    </>
  )
}

export default SoftwarePage