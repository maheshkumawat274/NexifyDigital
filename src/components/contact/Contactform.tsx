
import React, { useState } from "react";
import config from "../../../config";
const Contactform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch(`${config.API_BASE_URL}/submit_form.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        setError("");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the server.");
    }
  };

  return (
    
    <section className='min-h-screen pt-6 pb-6 sm:pt-32'>
      <h1 className="text-[50px] sm:text-[70px] mx-[20px] sm:[100px] lg:mx-[270px] font-bold leading-none text-gray-700">CONTACT</h1>
      <div className="  text-gray-700 flex flex-col px-4 justify-center items-center">
        
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
          {success && <p className="bg-green-100 text-green-800 p-2 mb-3 rounded">Your message has been sent ✅</p>}
      {error && <p className="bg-red-100 text-red-800 p-2 mb-3 rounded">{error}</p>}
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
              }}
              className="bg-[#3647AD] text-white border-2 border-transparent hover:border-[#3647AD] rounded-md px-4 py-3 outline-none"
              required
            />
            
            </div>
                       
            
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
              <input
              id="email"
              name="email"
              type="email"
              placeholder="xyz@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#3647AD] text-white border-2 border-transparent hover:border-[#3647AD] rounded-md px-4 py-3 outline-none"
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
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
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
              name="message"
              placeholder="Enter Your Query"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#3647AD] text-white border-2 border-transparent hover:border-[#3647AD] rounded-md px-4 py-3 outline-none resize-none"
              rows={5}
            />

          </div>

          <button
            type="submit"
            className="hover:bg-[#3647AD] hover:text-white text-center cursor-pointer font-bold py-2 rounded-md w-24 text-black border-2 border-[#3647AD] transition"
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
