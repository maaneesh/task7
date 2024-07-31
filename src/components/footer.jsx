import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span class="footer-title">Contact</span>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div>
          <span class="footer-title">About</span>
          <p>Our company is dedicated to providing excellent services...</p>
          <a class="link link-hover" href="#about">
            Learn More
          </a>
        </div>
        <div>
          <span class="footer-title">Careers</span>
          <p>Join our team and grow with us!</p>
          <a class="link link-hover" href="#jobs">
            View Open Positions
          </a>
        </div>
      </footer>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>&copy; 2024 Manish Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
