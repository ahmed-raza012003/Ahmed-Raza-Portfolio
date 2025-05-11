import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaUpwork,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-white px-6 py-8 bg-black-100/55">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* About Me Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p>
           I'm Ahmad, a Full Stack Developer turning complex ideas into smart, scalable digital solutions. I don’t just code — I bend computers to my will.
          </p>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/ahmed-raza012003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-raza-b3a67b249/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c4f352c2906a37ea"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaUpwork size={20} />
            </a>
            
            <a
              href="https://www.instagram.com/codewithahmad._?igsh=anA3cTdtdmVlanBx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={20} />
            </a>
            
            
           
            
            
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Email: ahmedraza01272003@gmail.com</p>
          <p>Location: Rahim Yar Khan, Pakistan</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ahmed Raza. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
