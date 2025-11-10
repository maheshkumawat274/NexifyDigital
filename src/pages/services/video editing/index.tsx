import { Helmet } from "react-helmet"
import Contactform from "../../../components/contact/Contactform"
import HowItWorksVideo from "../../../components/services/videoediting/HowWorkVideo"
import VideoEditing from "../../../components/services/videoediting/VideoEditing"
import VideoTopSection from "../../../components/services/videoediting/VideoTopSection"
import WhatWeVideo from "../../../components/services/videoediting/WhatWeVideo"
import WhyChooseVideo from "../../../components/services/videoediting/WhyChooseVideo"


const VideoEditingPage
 = () => {
  return (
    <>
    <Helmet>
        <title>Professional Video Editing Services | Nexify Digital</title>
        <meta
          name="description"
          content="Get high-quality video editing services from Nexify Digital. We create engaging, professional videos for your business, brand, or personal use."
        />
        <meta
          name="keywords"
          content="video editing, professional video editing, promo videos, reels editing, YouTube video editing, Nexify Digital"
        />
        <meta name="author" content="Nexify Digital" />
        <meta
          property="og:title"
          content="Video Editing Services | Nexify Digital"
        />
        <meta
          property="og:description"
          content="We offer creative and professional video editing services for businesses, influencers, and content creators. Enhance your visual content today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nexifydigital.in/services/video_editing"
        />
        <meta
          property="og:image"
          content="https://nexifydigital.in/imgs/videoeditor.jpg"
        />
        <link
          rel="canonical"
          href="https://nexifydigital.in/services/video_editing"
        />
      </Helmet>
     <VideoTopSection/>
     <VideoEditing/>
     <WhatWeVideo/>
     <HowItWorksVideo/>
     <WhyChooseVideo/>
     <Contactform/>
    </>
  )
}

export default VideoEditingPage
