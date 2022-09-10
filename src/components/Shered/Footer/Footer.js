import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer class="section bg-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Information</h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li><Link to="/about_us">About us</Link></li>
                  <li><a  href="/">Our Team</a></li>
                  <li><a href="/">Feature</a></li>
                  <li><Link to="/contact_us">Contact us</Link></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Ressources</h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li><a href="/">Monitoring Grader </a></li>
                  <li><a href="/">Video Tutorial</a></li>
                  <li><a href="/">Term &amp; Service</a></li>
                  <li><a href="/">Zeeko API</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li><Link to="/register">Sign Up </Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/privacy_policy">Terms of Services</Link></li>
                  <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                <p class="contact-info mt-4">Contact us if need help withanything</p>
                <p class="contact-info">+01 123-456-7890</p>
                <div class="mt-5">
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="https://fb.com/" target="_blank" rel="noopener noreferrer"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><i class="fab google footer-social-icon fa-google"></i></a></li>
                    <li class="list-inline-item"><a href="https://apple.com/" target="_blank" rel="noopener noreferrer"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                  </ul>
                </div>
              </div>
            </div >

          </div >
        </div >

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14"><small>2022 © Israt, All Rights Reserved</small></p>
        </div>
      </footer >
    </div >
  );
};

export default Footer;