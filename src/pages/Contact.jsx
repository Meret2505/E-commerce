import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Habarlaşmak"} />
      <BreadCrumb title="Habarlaşmak" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d21471.648612821326!2d58.3353204518797!3d37.9533177081352!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1682528126027!5m2!1sru!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullFcreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div className="">
                <h3 className="contact-title mb-4">Habarlaşmak</h3>
                <form action="d-flex flex-column gap-15">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="adyňyz"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="telefon nomerňiz"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="teswir"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Ugrat</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title mb-4">Biz bilen habarlaş</h3>
                <div className="">
                  <ul>
                    <li className="ps-0 mb-3 d-flex align-items-center">
                      <AiOutlineHome className="mr-2" />
                      Aşgabat ş. A.Kekilow köç. 45/2
                    </li>
                    <li className="ps-0 mb-3">
                      <BiPhoneCall className="mr-2" />
                      +993 64 380429
                    </li>
                    <li className="ps-0 mb-3">
                      <AiOutlineMail className="mr-2" />
                      jumayewmeret9@gmail.com
                    </li>
                    <li className="ps-0 mb-3">
                      <BiInfoCircle className="mr-2" />
                      Sebet söwda platformasy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
