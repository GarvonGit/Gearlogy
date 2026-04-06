import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <Wrapper>
      {/* Hero */}
      <div className="contact-hero">
        <div className="hero-content">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Get in Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'd love to hear<br />from you.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-body"
          >
            Whether you have a question about a product, need help with an order,
            or just want to say hello — our team is here for you.
          </motion.p>
        </div>
      </div>

      {/* Contact Layout */}
      <div className="contact-layout">
        <div className="contact-main-grid">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="form-section"
          >
            <h2>Write to us</h2>
            <p className="form-sub">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            <form
              action="https://formspree.io/f/mzblrjwd"
              method="POST"
              className="contact-form"
            >
              <div className="form-row">
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" name="username" required autoComplete="off" />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+91 98765 43210" name="phone" required autoComplete="off" />
                </div>
              </div>
              <div className="field">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" name="email" required autoComplete="off" />
              </div>
              <div className="field">
                <label>How can we help?</label>
                <textarea name="message" rows="6" placeholder="Tell us more about your request..." required />
              </div>
              <button type="submit" className="submit-btn">
                Send Message <FiSend style={{ marginLeft: "0.8rem" }} />
              </button>
            </form>
          </motion.div>

          {/* Quick Contact & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="info-section"
          >
            <div className="quick-list">
              {[
                { icon: <FiPhone />, title: "Call Us", sub: "Mon–Fri, 9AM–6PM IST", val: "+91 141 234 5678", link: "tel:+911412345678" },
                { icon: <FiMail />, title: "Email Us", sub: "24/7 Support Channel", val: "support@gearlogy.com", link: "mailto:support@gearlogy.com" },
                { icon: <FiMapPin />, title: "Visit Us", sub: "Store & HQ", val: "Phoenix Citadel Mall, Indore", link: "https://maps.app.goo.gl/..." },
              ].map((c, i) => (
                <div key={i} className="info-card">
                  <div className="card-icon">{c.icon}</div>
                  <div className="card-text">
                    <h3>{c.title}</h3>
                    <p>{c.sub}</p>
                    <a href={c.link}>{c.val} <FiArrowRight style={{ fontSize: "1.2rem" }} /></a>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro-map / Visual element */}
            <div className="map-preview">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5146977092277!2d75.93220677379585!3d22.746272626585437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3cd9d3de1ad%3A0xebaf3ee69f583ff5!2sPhoenix%20Citadel%20Mall!5e0!3m2!1sen!2sin!4v1692897536586!5m2!1sen!2sin"
                title="Gearlogy Location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #000000;
  min-height: 100vh;
  color: #fff;

  .eyebrow {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #0071e3;
    margin-bottom: 2rem;
    display: block;
  }

  .contact-hero {
    background: #000;
    padding: 14rem 4rem 10rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);

    .hero-content {
      max-width: 90rem;
      margin: 0 auto;
      text-align: center;
    }

    h1 {
      font-size: clamp(4.4rem, 8vw, 6.4rem);
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.05em;
      line-height: 1.05;
      margin-bottom: 2.4rem;
    }

    .hero-body {
      font-size: 2.2rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.5;
      max-width: 70rem;
      margin: 0 auto;
    }
  }

  .contact-layout {
    max-width: 130rem;
    margin: 0 auto;
    padding: 10rem 4rem;
  }

  .contact-main-grid {
    display: grid;
    grid-template-columns: 1fr 44rem;
    gap: 10rem;
    align-items: flex-start;
  }

  .form-section {
    h2 { font-size: 4rem; font-weight: 700; color: #ffffff; letter-spacing: -0.04em; margin-bottom: 1.2rem; }
    .form-sub { font-size: 1.7rem; color: rgba(255,255,255,0.45); margin-bottom: 4.8rem; }
  }

  .contact-form { display: flex; flex-direction: column; gap: 3.2rem; }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2.4rem; }

  .field {
    display: flex; flex-direction: column; gap: 1rem;
    label { font-size: 1.3rem; font-weight: 700; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.1em; }
    input, textarea {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 1.6rem;
      color: #ffffff;
      font-size: 1.6rem;
      padding: 1.6rem 2rem;
      font-weight: 400;
      transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
      
      &::placeholder { color: rgba(255,255,255,0.2); }
      &:focus {
        border-color: #0071e3;
        background: rgba(255,255,255,0.09);
        box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.15);
        outline: none;
      }
    }
    textarea { resize: vertical; }
  }

  .submit-btn {
    align-self: flex-start;
    padding: 1.6rem 4rem;
    background: #0071e3;
    color: #fff;
    border: none;
    border-radius: 3.4rem;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    &:hover { background: #0077ed; transform: scale(1.02); box-shadow: 0 10px 30px rgba(0,113,227,0.4); }
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    position: sticky;
    top: 10rem;
  }

  .quick-list { display: flex; flex-direction: column; gap: 3.2rem; }

  .info-card {
    display: flex; gap: 2.4rem; align-items: flex-start;
    .card-icon { width: 5.6rem; height: 5.6rem; border-radius: 1.6rem; background: rgba(0, 113, 227, 0.1); border: 1px solid rgba(0, 113, 227, 0.2);
                  display: flex; align-items: center; justify-content: center; font-size: 2.4rem; color: #0071e3; flex-shrink: 0; }
    h3 { font-size: 1.95rem; font-weight: 700; color: #fff; margin-bottom: 0.6rem; }
    p { font-size: 1.45rem; color: rgba(255,255,255,0.4); margin-bottom: 1rem; }
    a { font-size: 1.6rem; color: #0071e3; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 0.6rem;
        &:hover { gap: 1rem; opacity: 0.8; } transition: all 0.3s; }
  }

  .map-preview {
    border-radius: 2.8rem; overflow: hidden; height: 32rem; border: 1px solid rgba(255,255,255,0.06);
    iframe { width: 100%; height: 100%; border: none; filter: grayscale(1) invert(1) brightness(0.8); }
  }

  @media (max-width: 1100px) {
    .contact-main-grid { grid-template-columns: 1fr; gap: 10rem; }
    .info-section { position: static; }
  }

  @media (max-width: 600px) {
    .contact-hero { padding: 10rem 2.4rem 6rem; }
    .contact-layout { padding: 6rem 2.4rem; }
    .form-row { grid-template-columns: 1fr; }
    .submit-btn { width: 100%; justify-content: center; }
  }
`;

export default Contact;