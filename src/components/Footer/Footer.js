import React from "react";
import "./styles.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">&copy; 2023 Your Company. All rights reserved.</p>
        <nav className="footer-navigation">
          <ul className="nav-list">
            <li className="nav-item">Privacy Policy</li>
            <li className="nav-item">Terms of Service</li>
            <li className="nav-item">Contact Us</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
