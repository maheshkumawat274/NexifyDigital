import { Helmet } from "react-helmet"
import Contactform from "../../../components/contact/Contactform"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import AboutApp from "../../../components/services/app/AppAbout"
import AppCommunity from "../../../components/services/app/AppCommunity"
import AppSection1 from "../../../components/services/app/AppSection1"
import AppTopsection from "../../../components/services/app/AppTopsection"


const AppdevelopmentPage = () => {
  return (
    <>
    <Helmet>
        <title>Mobile App Development Services | Nexify Digital</title>
        <meta
          name="description"
          content="Get cutting-edge mobile app development services from Nexify Digital. We build high-performance Android & iOS apps tailored to your business needs."
        />
        <meta
          name="keywords"
          content="mobile app development, Android app, iOS app, app development company, Nexify Digital"
        />
        <meta name="author" content="Nexify Digital" />
        <meta
          property="og:title"
          content="Mobile App Development | Nexify Digital"
        />
        <meta
          property="og:description"
          content="We create scalable and secure mobile apps for startups and enterprises. Get your custom app built with expert developers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nexifydigital.in/services/app_development"
        />
        <meta
          property="og:image"
          content="https://nexifydigital.in/imgs/Importance-of-mobile-apps.jpg"
        />
        <link
          rel="canonical"
          href="https://nexifydigital.in/services/app_development"
        />
      </Helmet>
    <Header/>
    <AppTopsection/>
    <AboutApp/>
    <AppSection1/>
    <AppCommunity/>
    <Contactform/>
    <Footer/>
    </>
  )
}

export default AppdevelopmentPage