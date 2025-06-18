
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ContactSection from '../../components/contact/ContactSection'
import ContactSection2 from '../../components/contact/ContactSection2'
import ContactSection3 from '../../components/contact/ContactSection3'
import Contactform from '../../components/contact/Contactform'
import { Helmet } from 'react-helmet'

const ContactPage = () => {
  return (
    <>
    <Helmet>
        <title>Contact Us | Nexify Digital - Let's Build Your Next Project</title>
        <meta
          name="description"
          content="Get in touch with Nexify Digital for custom website, mobile app, and software development services. Let's turn your ideas into reality."
        />
        <meta
          name="keywords"
          content="Contact Nexify Digital, IT services inquiry, website development support, app development contact"
        />
        <meta name="author" content="Nexify Digital" />
        <meta property="og:title" content="Contact Nexify Digital - Your IT Development Partner" />
        <meta property="og:description" content="Need help with a project or want to know more about our services? Contact Nexify Digital today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexifydigital.in/contact" />
        <meta property="og:image" content="https://nexifydigital.in/imgs/IT-Infra.jpg" />
        <link rel="canonical" href="https://nexifydigital.in/contact" />
      </Helmet>
     <Header/>
     <ContactSection/>
     <ContactSection2/>
     <Contactform/>
     <ContactSection3/>
     <Footer/>
    </>
  )
}

export default ContactPage