import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactOne = () => {
  const [email, setEmail] = useState({
    name: "",
    clientEmail: "",
    subject: "",
    message: "",
  });

  const handleEmail = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleEmailSuccess = () =>
    toast.success(`🚀 Email Successfully Sent!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleEmailFailure = () =>
    toast.error(`Email Failed To Send`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = async (e) => {
    e.preventDefault();
    const { name, clientEmail, subject, message } = email;
    try {
      await axios.post("http://localhost:5000/email", {
        name,
        clientEmail,
        subject,
        message,
      });
      handleEmailSuccess();
    } catch (error) {
      handleEmailFailure();
      console.log(error);
    }
    console.log(email);
    setEmail({ name: "", clientEmail: "", subject: "", message: "" });
  };
  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Hire Me.</h2>
              <p className="description">
                Let's Work Together! Connect with me via email:{" "}
                <a href="mailto:info@romaric.dev"> info@romaric.dev</a> or
                simply fill out the form below.
              </p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={sendEmail}>
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={email.name}
                    onChange={handleEmail}
                    placeholder="Your Name *"
                    required
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="clientEmail"
                    id="item02"
                    value={email.clientEmail}
                    onChange={handleEmail}
                    placeholder="Your email *"
                    required
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={email.subject}
                    onChange={handleEmail}
                    placeholder="Write a Subject *"
                    required
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={email.message}
                    onChange={handleEmail}
                    placeholder="Your Message *"
                    required
                  />
                </label>
                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img
                className="contact-img"
                src="/assets/images/about/hire-me.jpg"
                alt="trydo"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default ContactOne;
