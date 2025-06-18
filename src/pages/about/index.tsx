
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AboutTop from '../../components/about/AboutTop'
import MissionVisionSection from '../../components/about/MissionVission'
import OurValues from '../../components/about/OurValues'
import CommunitySection from '../../components/home/CommunitySection'
import JourneySection from '../../components/about/AboutUs'
import { Helmet } from 'react-helmet'

const AboutPage = () => {
  return (
    <>
     <Helmet>
        <title>About Us | Nexify Digital - Your Trusted IT Solutions Partner</title>
        <meta
          name="description"
          content="Learn more about Nexify Digital — our mission, vision, values, and journey. We’re dedicated to providing top-notch website, app, and software development services."
        />
        <meta
          name="keywords"
          content="About Nexify Digital, IT company values, software development journey, mission and vision, app development company"
        />
        <meta name="author" content="Nexify Digital" />
        <meta property="og:title" content="About Nexify Digital - Website, App & Software Development Experts" />
        <meta property="og:description" content="Explore who we are, our mission, vision, and what drives us at Nexify Digital." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexifydigital.in/about" />
        <meta property="og:image" content="https://nexifydigital.in/imgs/IT-Infra.jpg" />
        <link rel="canonical" href="https://nexifydigital.in/about" />
      </Helmet>
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