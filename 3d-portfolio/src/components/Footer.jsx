import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../i18n-1.js";

const Footer = () => {
  return (
    <footer className="footer footer-space pt-10">
      <hr className="border-pink-300/55" />

      <div className="footer-container text-blue-500">
        <p>
          © 2024 <strong>yimajiuni</strong>
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
