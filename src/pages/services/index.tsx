import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ServicesHome from "../../components/home/ServicesHome"
import IndustrySolutions from "../../components/services/Allservices"
import PricingInfo from "../../components/services/PricingInfo"
import ServicesTop from "../../components/services/ServicesTop"
import { Helmet } from 'react-helmet'

const ServicesPage = () => {
  return (
    <>
    <Helmet>
        <title>Our Services | Website, App & Software Development - Nexify Digital</title>
        <meta
          name="description"
          content="Explore Nexify Digital's full range of IT services including website development, mobile app development, custom software solutions, and more tailored to your business needs."
        />
        <meta
          name="keywords"
          content="IT services, website development, app development, custom software, tech solutions, Nexify Digital services"
        />
        <meta name="author" content="Nexify Digital" />
        <meta property="og:title" content="IT Services by Nexify Digital - Website, App & Software Development" />
        <meta property="og:description" content="Discover our web, app, and software development services crafted for startups and enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexifydigital.in/services" />
        <meta property="og:image" content="https://nexifydigital.in/imgs/IT-Infra.jpg.jpg" />
        <link rel="canonical" href="https://nexifydigital.in/services" />
      </Helmet>

    <Header/>
    <ServicesTop/>
    <IndustrySolutions/>
    <ServicesHome/>
    <PricingInfo/>
    <Footer/>
    </>
  )
}

export default ServicesPage