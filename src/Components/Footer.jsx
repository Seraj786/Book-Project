import React from "react";
import { BiLogoProductHunt } from "react-icons/bi";
import { BsCashCoin, BsTruck, BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import pinterest from "../assets/images/pinterest.png";
import youtube from "../assets/images/youtube.png";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="Footer-upper" data-aos="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-lg-3">
                  <div className="support-icons">
                    <span className="icon">
                      <BsTruck />
                    </span>
                    <span className="icon-text">Free Shipping</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="support-icons">
                    <span className="icon">
                      <BsCashCoin />
                    </span>
                    <span className="icon-text">Cash on Delivery</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="support-icons">
                    <span className="icon">
                      <BiLogoProductHunt />
                    </span>
                    <span className="icon-text">Original Product</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="support-icons">
                    <span className="icon">
                      <BsBook />
                    </span>
                    <span className="icon-text">Easy Replacement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12" data-aos="fade-left">
              <div className="footer-inner">
                <div className="f-logo mb-3">
                  <Link to="/.">
                    <img className="logo" src={logo} alt="img" />
                  </Link>
                </div>
                <p className="me-3">
                  An Online Book Shopping Store is a digital platform that
                  allows customers to browse, search, and purchase books across
                  various categories from the comfort of their home.
                </p>
              </div>
              <div className="social-media">
                <ul className="d-flex mb-3">
                  <li>
                    <Link to="https://www.facebook.com">
                      <img src={facebook} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.x.com">
                      <img src={twitter} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com">
                      <img src={linkedin} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.pinterest.com/">
                      <img src={pinterest} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com">
                      <img src={youtube} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com">
                      <img src={instagram} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6" data-aos="fade-down">
              <div className="footer-inner">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./">Home</Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./about">About us </Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./shop">Shop</Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./terms">Terms</Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./privacy">Privacy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6" data-aos="fade-right">
              <div className="footer-inner">
                <h4>Help</h4>
                <ul>
                  <li>
                    <IoIosArrowForward /> <Link to="./shipping">Shipping</Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./cart">Cart</Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./return">Return</Link>
                  </li>
                  <li>
                    <IoIosArrowForward />
                    <Link to="./contact">Contact us </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12" data-aos="fade-up">
              <div className="footer-inner">
                <h4>Touch with us</h4>
                <ul>
                  <li className="fw-bold fs-4 mb-3">
                    <span className="f-icons">
                      <FaMapMarkerAlt />
                    </span>
                    Abcd Company
                  </li>
                  <li className="mb-3">
                    <span className="f-icons">
                      <RiHome2Fill />
                    </span>{" "}
                    9, Dr.H. K Chatterjee Lane, Belurmath, Howrah-711202 (W.B){" "}
                  </li>
                  <li className="mb-3">
                    <span className="f-icons">
                      <MdEmail />
                    </span>{" "}
                    mybook@gmail.com
                  </li>
                  <li className="mb-3">
                    <span className="f-icons">
                      <FaPhoneAlt />
                    </span>{" "}
                    8989898989
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="copyright">
              <p>
                Copyright © {currentYear}.{" "}
                <Link to="https://www.google.com">mybook.in</Link>. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
