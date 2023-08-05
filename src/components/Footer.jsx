import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { images } from "../constants";
const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={images.newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Biziň habrlarymyza ýazyl!</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Email adresiň"
                  aria-label="Email adresiň"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  ýazyl
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 br">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Biz bilen habarlaş</h4>
              <div>
                <address className="text-white fs-6">
                  Aşgabat ş. A.Kekilow köç. 45/2 jaý
                </address>
                <a
                  href="tel:+99364380429"
                  className="mt-2 d-block mb-1 text-white"
                >
                  tel: +99364380429
                </a>
                <a
                  href="mailto:jumayewmeret9@gmail.com"
                  className="mt-2 d-block mb-3 text-white"
                >
                  email: jumayewmeret9@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a href="" className="text-white">
                    <BsGithub className=" fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsInstagram className=" fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsLinkedin className=" fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsYoutube className=" fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Maglumat</h4>
              <div>
                <div className="footer-links d-flex flex-column">
                  <Link to="/privacy-policy" className="text-white py-2 mb-1">
                    gizlinlik syýasaty
                  </Link>
                  <Link to="/refund-policy" className="text-white py-2 mb-1">
                    yzyna gaýtarmak syýasaty
                  </Link>
                  <Link to="/shipping-policy" className="text-white py-2 mb-1">
                    ýük daşamak syýasaty
                  </Link>
                  <Link to="/term-policy" className="text-white py-2 mb-1">
                    şertler
                  </Link>
                  <Link to="/shipping-policy" className="text-white py-2 mb-1">
                    habarlar
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Akkaunt</h4>
              <div>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Biz hakda</Link>
                  <Link className="text-white py-2 mb-1">FAQ</Link>
                  <Link className="text-white py-2 mb-1">Habarlaşmak</Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Çalt linkler</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Noutbuklar</Link>
                <Link className="text-white py-2 mb-1">Gulaklyklar</Link>
                <Link className="text-white py-2 mb-1">Planşetler</Link>
                <Link className="text-white py-2 mb-1">Sagatlar</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 br">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Jumaýew Meret
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
