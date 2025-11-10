
import TopSectionCareer from '../../components/career/TopSectionCareer'
import CareerTop from '../../components/career/CareerTop'
import AboutCareer from '../../components/career/AboutCareer'
import { Helmet } from 'react-helmet'

const CareerPage = () => {
  return (
    <>
    <Helmet>
        <title>Careers at Nexify Digital | Join Our IT & Software Development Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Nexify Digital. Join our team of innovators and work on cutting-edge projects in website, app, and software development."
        />
        <meta
          name="keywords"
          content="Nexify Digital careers, IT jobs, software development jobs, tech company hiring, web development career"
        />
        <meta name="author" content="Nexify Digital" />
        <meta property="og:title" content="Careers at Nexify Digital - Build Your Future With Us" />
        <meta property="og:description" content="Looking for IT career opportunities? Join Nexify Digital's growing team of tech professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexifydigital.in/career" />
        <meta property="og:image" content="https://nexifydigital.in/imgs/IT-Infra.jpg" />
        <link rel="canonical" href="https://nexifydigital.in/career" />
      </Helmet>

     <CareerTop/>
     <AboutCareer/>
     <TopSectionCareer/>
    </>
  )
}

export default CareerPage