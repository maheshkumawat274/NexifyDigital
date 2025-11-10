import { Helmet } from "react-helmet"
import Contactform from "../../../components/contact/Contactform"
import AboutWebsite from "../../../components/services/website/AboutWebsite"
import TypesWebsite from "../../../components/services/website/TypesWebsites"
import HeroWebsite from "../../../components/services/website/WebsiteDevelopment"
import WhyChooseUsWebsite from "../../../components/services/website/WhyChooseWebsite"
import WhyNeedWebsite from "../../../components/services/website/WhyNeed"


const WebsitePage = () => {
  return (
    <>
    <Helmet>
        <title>Website Development Services | Nexify Digital</title>
        <meta
          name="description"
          content="Nexify Digital offers top-notch website development services tailored to your business. We build responsive, fast, and SEO-friendly websites."
        />
        <meta
          name="keywords"
          content="website development, responsive web design, business website, custom websites, Nexify Digital"
        />
        <meta name="author" content="Nexify Digital" />
        <meta
          property="og:title"
          content="Professional Website Development Services | Nexify Digital"
        />
        <meta
          property="og:description"
          content="Create a powerful online presence with our custom website development services. Mobile-friendly, secure, and fully optimized."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nexifydigital.in/services/website_development"
        />
        <meta
          property="og:image"
          content="https://nexifydigital.in/imgs/home.jpg"
        />
        <link
          rel="canonical"
          href="https://nexifydigital.in/services/website_development"
        />
      </Helmet>
     <HeroWebsite/>
     <AboutWebsite/>
     <TypesWebsite/>
     <WhyNeedWebsite/>
     <WhyChooseUsWebsite/>
     <Contactform/>
    </>
  )
}

export default WebsitePage