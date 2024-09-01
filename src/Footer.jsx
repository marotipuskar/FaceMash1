import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Facemash is a social networking site that allows users to compare the photos of two students and vote on which one is more attractive.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Stay Informed</h5>
            <p>
              Stay up-to-date with the latest news and updates from Facemash. Subscribe to our newsletter by sending an email to <a href="mailto:adinath@gmail.com">adinath@gmail.com</a>.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="social-media-links">
              <li>
                <a href="https://www.linkedin.com/in/siddharth-taneja-98596588/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=lGmRnu--iU8" target="_blank">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              &copy; {new Date().getFullYear()} Facemash. All rights reserved. Designed by <a href="#">Maroti Puskar</a>.
            </p>
            <ul className="footer-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const styles= StyleSheet.Create({
//     footer :{
//         background-color: #333;
//         color: #fff;
//         padding: 20px 0;
//       }
      
//       .footer .container {
//         max-width: 1200px;
//         margin: 0 auto;
//         padding: 0 20px;
//       }
      
//       .footer .row {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;
//       }
      
//       .footer .col-md-4 {
//         flex-basis: 33.33%;
//         margin-bottom: 20px;
//       }
      
//       .footer h5 {
//         margin-top: 0;
//       }
      
//       .footer .social-media-links {
//         list-style: none;
//         padding: 0;
//         margin: 0;
//       }
      
//       .footer .social-media-links li {
//         display: inline-block;
//         margin-right: 10px;
//       }
      
//       .footer .social-media-links a {
//         color: #fff;
//         transition: color 0.2s ease;
//       }
      
//       .footer .social-media-links a:hover {
//         color: #ccc;
//       }
      
//       .footer .footer-links {
//         list-style: none;
//         padding: 0;
//         margin: 0;
//       }
      
//       .footer .footer-links li {
//         display: inline-block;
//         margin-right: 10px;
//       }
      
//       .footer .footer-links a {
//         color: #fff;
//         transition: color 0.2s ease;
//       }
      
//       .footer .footer-links a:hover {
//         color: #ccc;
//       }
// })