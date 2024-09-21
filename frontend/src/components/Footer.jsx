import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="footer-section mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <ul>
            <li>
              <a href="/about" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="/team" className="hover:underline">
                Meet the Team
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
          <ul>
            <li>
              <a href="/help" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 bg-zinc-900">
        <p>
          &copy; {new Date().getFullYear()} Make My Trip. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
