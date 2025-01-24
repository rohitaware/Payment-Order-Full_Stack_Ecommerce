import React from 'react';
import Logo from './Logo'; // Assuming you have a reusable Logo component

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black">
      <div className="container mx-auto py-8 px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Useful Links Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Get Help</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-red-600 focus:text-red-600 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/returns-refunds"
                  className="hover:text-red-600 focus:text-red-600 transition"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="/shipping-delivery"
                  className="hover:text-red-600 focus:text-red-600 transition"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="hover:text-red-600 focus:text-red-600 transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-red-600 focus:text-red-600 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-black-400 mb-2"></p>
            <p className="text-black-400 mb-2"></p>
            <p className="text-black-400 mb-2">
              Phone: <a href="tel:+917058619986" className="hover:text-red-600 focus:text-red-600">+91 </a>
            </p>
            <p className="text-black-400">
              Email: <a href="mailto:info@galaxygkart.in" className="hover:text-red-600 focus:text-red-600"></a>
            </p>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center md:justify-end">
            <Logo w={120} h={60} /> {/* Adjust width and height as needed */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p className="text-black-400">
            MERN-Ecommerce© 2025. All rights reserved – Designed by{' '}
            <a
              href="https://" // Update with your GitHub or portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 focus:text-red-600"
            >
              Developer Rohit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
