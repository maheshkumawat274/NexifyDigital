import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Websiteicons = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#131831] cursor-pointer rounded-b-lg">
      {/* Call */}
      <a href="tel:+916376228917">
        <button className=" cursor-pointer w-[60px] h-[60px] outline-none border-none shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-green-600 group flex items-center justify-center">
          <FaPhoneAlt className="text-green-600 group-hover:text-white text-2xl " />
        </button>
      </a>

      {/* WhatsApp */}
      <a href="https://wa.me/916376228917" target="_blank" rel="noreferrer">
        <button className=" cursor-pointer w-[60px] h-[60px] outline-none border-none  shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#25D366] group flex items-center justify-center">
          <FaWhatsapp className="text-[#25D366] group-hover:text-white text-3xl " />
        </button>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/nexifydigital.in/" target="_blank" rel="noreferrer">
        <button className=" cursor-pointer w-[60px] h-[60px] outline-none border-none  shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] group flex items-center justify-center">
          <FaInstagram className="text-[#cc39a4] group-hover:text-white text-3xl" />
        </button>
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/profile.php?id=61575985723004" target="_blank" rel="noreferrer">
        <button className=" cursor-pointer w-[60px] h-[60px] outline-none border-none  shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#3b5998] group flex items-center justify-center">
          <FaFacebookF className="text-[#3b5998] group-hover:text-white text-3xl" />
        </button>
      </a>
    </div>
  )
}

export default Websiteicons;
