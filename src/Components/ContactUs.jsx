import React, { useState } from 'react';
import One from '../images/first.jpeg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dust-stokes.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully');
      } else {
        // Handle failure (e.g., show an error message)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  return (
    <div className="mt-[140px] w-full">
      <main className="bg-[#070A0B] w-full h-auto flex justify-between lg:flex-row flex-col gap-y-8" id="contact-main">
        <div className="px-[10px] md:px-[50px] w-full" id="touch-us">
          <h2 className="text-[900] my-2 text-center text-[#E8D682] text-[25px] lg:text-[35px] xl:text-[40px]">Contact Us</h2>
          <p className="text-[white] font-bold text-[16px] text-[serif] text-center">
            Our doors are always open to provide you with quality NFT.
          </p>

          <form className="max-w-lg mx-auto py-3 text-white w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-[#E8D682]"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-[#E8D682]"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Your Message"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded resize-none focus:outline-none focus:border-[#E8D682]"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <input type="checkbox" id="policy" name="policy" className="mr-2" />
              <label htmlFor="policy" className="text-gray-700 text-sm">
                I agree to the privacy policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E8D682] text-[#070A0B] font-semibold py-2 rounded hover:bg-[#D9C261] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="p-6 rounded-xl">
          <img src={One} alt="Contact" className="w-full h-full object-cover rounded-xl" />
        </div>
      </main>
    </div>
  );
}
