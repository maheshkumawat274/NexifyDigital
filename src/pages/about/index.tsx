
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AboutTop from '../../components/about/AboutTop'
import MissionVisionSection from '../../components/about/MissionVission'
import OurValues from '../../components/about/OurValues'
import CommunitySection from '../../components/home/CommunitySection'

const AboutPage = () => {
  return (
    <>
     <Header/>
     <AboutTop/>
     <MissionVisionSection/>
     <OurValues/>
     <CommunitySection/>
     <Footer/>
    </>
  )
}

export default AboutPage