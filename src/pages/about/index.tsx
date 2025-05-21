
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AboutTop from '../../components/about/AboutTop'
import MissionVisionSection from '../../components/about/MissionVission'
import OurValues from '../../components/about/OurValues'
import CommunitySection from '../../components/home/CommunitySection'
import JourneySection from '../../components/about/AboutUs'

const AboutPage = () => {
  return (
    <>
     <Header/>
     <AboutTop/>
     <JourneySection/>
     <MissionVisionSection/>
     <OurValues/>
     <CommunitySection/>
     <Footer/>
    </>
  )
}

export default AboutPage