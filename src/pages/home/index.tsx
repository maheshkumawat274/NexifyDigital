
import Contactform from '../../components/contact/Contactform'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CommunitySection from '../../components/home/CommunitySection'
import ProcessSection from '../../components/home/Process'
import ServicesHome from '../../components/home/ServicesHome'
import TopSection1 from '../../components/home/TopSection1'
import WelcomePage from '../../components/home/Welcomepage'
import WhyChoose from '../../components/home/WhyChoose'
import PortfolioSection from '../../components/home/WorkPortfolio'

const HomePage = () => {
  return (
    <>
    <Header/>
    <TopSection1/>
    <WelcomePage/>
    <ServicesHome/>
    <ProcessSection/>
    <PortfolioSection/>
    <WhyChoose/>
    <CommunitySection/>
    <Contactform/>
    <Footer/>
    </>
  )
}

export default HomePage