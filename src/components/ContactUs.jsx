import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const ContactUs = () => {
  return (
    <div className="bg-xprimary text-white flex flex-col font-poppins justify-center items-center py-8">
      <div className="text-center space-y-4 mb-6">
        <h2 className="text-2xl lg:text-4xl font-bold">Let's Connect</h2>
        <p className="text-md lg:text-lg">
          Reach out to us at{' '}
          <a href="mailto:greenpick@gmail.com" className="underline">
            greenpick@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Social Media Icons */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer Section */}

      <p className="text-xs lg:text-sm">&copy; {new Date().getFullYear()} GreenPick. All rights reserved.</p>
      <p className='text-xs font-extralight'>
        Created by
        <div className='font-thin inline'>
        <a href='https://github.com/Thilages' target="_blank" rel="noopener noreferrer"> Thilagesh</a> &
        <a href='https://www.linkedin.com/in/aishwarya-ganga-vn-72983b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer"> myself</a>
        </div>
      </p>


    </div>
  );
};

export default ContactUs;
