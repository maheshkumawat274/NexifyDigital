import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ServicesHome from "../../components/home/ServicesHome"
import IndustrySolutions from "../../components/services/Allservices"
import ServicesTop from "../../components/services/ServicesTop"


const ServicesPage = () => {
  return (
    <>
    <Header/>
    <ServicesTop/>
    <IndustrySolutions/>
    <ServicesHome/>
    <Footer/>
    </>
  )
}

export default ServicesPage