
import Contactform from '../../components/contact/Contactform'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CommunitySection from '../../components/home/CommunitySection'
import ProcessSection from '../../components/home/Process'
import ServicesHome from '../../components/home/ServicesHome'
import TopSection1 from '../../components/home/TopSection1'
import WelcomePage from '../../components/home/Welcomepage'
import WhyChoose from '../../components/home/WhyChoose'
// import PortfolioSection from '../../components/home/WorkPortfolio'
import { Helmet } from 'react-helmet'
import MainServices from '../../components/services/MainServices'
const HomePage = () => {
  return (
    <>
    <Helmet>
        <title>Nexify Digital | Best Website, App & Software Development Company</title>
        <meta
          name="description"
          content="Nexify Digital is a leading IT company offering website development, mobile app development, and custom software solutions."
        />
        <meta name="keywords" content="IT services, website development, app development, software company, Nexify Digital" />
        <meta name="author" content="Nexify Digital" />
        <meta property="og:title" content="Nexify Digital | Website, App & Software Development Services" />
        <meta property="og:description" content="Your one-stop solution for website, app, and software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexifydigital.in" />
        <meta property="og:image" content="https://nexifydigital.in/imgs/IT-Infra.jpg" />
        <link rel="canonical" href="https://nexifydigital.in" />
      </Helmet>
    <Header/>
    <TopSection1/>
    <WelcomePage/>
    <MainServices/>
    <ServicesHome/>
    <ProcessSection/>
    {/* <PortfolioSection/> */}
    <WhyChoose/>
    <CommunitySection/>
    <Contactform/>
    <Footer/>
    </>
  )
}

export default HomePage