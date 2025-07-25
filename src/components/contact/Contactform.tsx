
import React from 'react';

const Contactform: React.FC = () => {
  return (
    
    <section className='min-h-screen  py-8'>
      <h1 className="text-[50px] sm:text-[70px] mx-[20px] sm:[100px] lg:mx-[270px] font-bold leading-none text-gray-700">CONTACT</h1>
      <div className="  text-gray-700 flex flex-col px-6 py-12 justify-center items-center">
        
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 mt-10 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <button className="flex items-center gap-2 bg-[#3647AD] px-4 py-2 rounded-full text-sm border border-white text-white">
            <span className="h-2 w-2 bg-[#3647AD] rounded-full"></span>
            BOOK A CALL
          </button>
          <h2 className="text-4xl md:text-5xl font-semibold">
            I'd love to hear<br />from you!
          </h2>
        </div>

        {/* Right Section - Form */}
        <form className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              type="text"
              onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
                  }}

              className="bg-[#3647AD] text-white border-2 border-transparent hover:border-2 hover:border-[#3647AD] rounded-md px-4 py-3 outline-none"
              required
            />
          </div>
           

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
            <input
              id="email"
              type="email"
              className="bg-[#3647AD] text-white border-2 border-transparent hover:border-2 hover:border-[#3647AD] rounded-md px-4 py-3 outline-none"
              required
            />
          </div>
          {/* Mobile Number Field */}
  <div className="flex flex-col gap-1">
  <label className="text-sm" htmlFor="mobile">Mobile Number <span className="text-red-500">*</span></label>
  <div className="flex">
    <span className="bg-[#3647AD] text-white border-2 border-transparent rounded-l-md px-4 py-3 flex items-center">+91</span>
    <input
      id="mobile"
      type="tel"
      min="0"
      max="9999999999"
      onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                  }}
      className="bg-[#3647AD] text-white border-2 border-transparent hover:border-[#3647AD] rounded-r-md px-4 py-3 outline-none w-full"
      placeholder="Enter 10-digit number"
      required
    />
  </div>
</div>


         

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={5}
              className="bg-[#3647AD] text-white border-2 border-transparent hover:border-2 hover:border-[#3647AD] rounded-md px-4 py-3 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#3647AD] text-white cursor-pointer font-bold px-6 py-2 rounded-full w-24 hover:bg-[#3648adc8]"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contactform;