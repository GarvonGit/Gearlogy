import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiTarget, FiZap, FiUsers, FiGlobe, FiShield, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <Wrapper>
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Born from a love of<br />
            <span className="blue-text">technology & design.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-body"
          >
            Gearlogy was founded with a simple belief: premium electronics should
            be accessible to everyone, delivered with the kind of care and
            passion usually reserved for luxury.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { n: "500K+", label: "Happy Customers" },
            { n: "10K+", label: "Products" },
            { n: "150+", label: "Countries Served" },
            { n: "4.9★", label: "Average Rating" },
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="stat-block"
            >
              <span className="stat-number">{s.n}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-inner">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mission-text"
          >
            <p className="eyebrow">Our Mission</p>
            <h2>Technology that inspires.</h2>
            <p>
              We curate only the best electronics — products that push
              boundaries, spark creativity, and make everyday life extraordinary.
              Every device we sell has been tested, reviewed, and selected
              because it genuinely earns its place.
            </p>
            <p>
              From flagship smartphones to pro-grade audio, we carry the gear
              that matters — with the service and expertise that sets us apart.
            </p>
            <NavLink to="/products">
              <button className="mission-btn">Explore Our Collection <FiArrowRight /></button>
            </NavLink>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mission-visual"
          >
            <div className="visual-card">
              <FiZap className="icon-large" />
              <h3>Gearlogy</h3>
              <p>Premium Tech. Real People. Real Passion.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer */}
      <section className="dev-section">
        <div className="dev-inner">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="dev-visual"
          >
            <div className="dev-avatar">GC</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="dev-content"
          >
            <p className="eyebrow">The Developer</p>
            <h2>Garv Chouhan</h2>
            <p>
              I'm a passionate front-end developer pursuing{" "}
              <strong>B.Tech. in Computer Science Engineering at IIIT Vadodara.</strong>{" "}
              I specialize in creating seamless, visually stunning digital experiences —
              blending modern UI design with robust functionality.
            </p>
            <p>
              Gearlogy is a showcase of what I love building: a premium product
              with real-world functionality, beautiful design, and clean code.
              If you'd like to collaborate or know more about my work, check out my portfolio below.
            </p>
            <div className="dev-actions">
              <a href="https://portfolio-2026-mu-swart.vercel.app/" target="_blank" rel="noreferrer">
                <button className="dev-btn primary">View Portfolio ↗</button>
              </a>
              <NavLink to="/contact">
                <button className="dev-btn ghost">Get in Touch</button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-inner">
          <div className="values-header">
            <p className="eyebrow">What We Stand For</p>
            <h2>Our Values</h2>
          </div>
          <div className="values-grid">
            {valuesUI.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const valuesUI = [
  { icon: <FiTarget />, title: "Curated Quality", desc: "Every product is handpicked and tested to meet our premium standards." },
  { icon: <FiZap />, title: "Innovation First", desc: "We prioritize cutting-edge technology that genuinely improves lives." },
  { icon: <FiUsers />, title: "Customer Trust", desc: "Transparent pricing, honest reviews, and zero-hassle support." },
  { icon: <FiGlobe />, title: "Global Reach", desc: "Serving customers in 150+ countries with consistent quality." },
  { icon: <FiCheckCircle />, title: "Sustainability", desc: "We're committed to reducing our environmental footprint." },
  { icon: <FiShield />, title: "Security", desc: "Your data and transactions are always protected with us." },
];

const Wrapper = styled.div`
  background: #000000;
  min-height: 100vh;

  .eyebrow {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #42a5f5;
    margin-bottom: 2rem;
    display: block;
  }

  /* Hero */
  .about-hero {
    background: #000;
    padding: 12rem 4rem 10rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    .hero-content {
      max-width: 80rem;
      margin: 0 auto;
    }

    h1 {
      font-size: 6.4rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.05em;
      line-height: 1.05;
      margin-bottom: 2.8rem;
    }

    .blue-text {
      color: #0071e3;
    }

    .hero-body {
      font-size: 2.22rem;
      color: rgba(255, 255, 255, 0.55);
      line-height: 1.6;
      max-width: 65rem;
      margin: 0 auto;
    }
  }

  /* Stats */
  .stats-section {
    background: #0a0a0a;
    padding: 8rem 4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .stats-grid {
    max-width: 110rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.2rem;
    text-align: center;
  }

  .stat-block {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 4rem 2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 2.4rem;
    transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);

    &:hover { background: rgba(255, 255, 255, 0.06); border-color: rgba(0, 113, 227, 0.3); transform: scale(1.02); }
  }

  .stat-number {
    font-size: 4.8rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.05em;
  }

  .stat-label {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 500;
  }

  /* Mission */
  .mission-section {
    padding: 12rem 4rem;
    background: #000;
  }

  .mission-inner {
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-items: center;
  }

  .mission-text {
    h2 {
      font-size: 5.6rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.04em;
      margin-bottom: 3.2rem;
      line-height: 1.1;
    }

    p {
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.55);
      line-height: 1.7;
      margin-bottom: 2rem;
    }
  }

  .mission-btn {
    padding: 1.6rem 3.4rem;
    background: #0071e3;
    border: none;
    border-radius: 3.4rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 2rem;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &:hover { background: #0077ed; transform: scale(1.03); box-shadow: 0 10px 30px rgba(0, 113, 227, 0.4); }
  }

  .mission-visual {
    display: flex;
    justify-content: center;
  }

  .visual-card {
    background: linear-gradient(135deg, #0071e3 0%, #0a84ff 100%);
    border-radius: 4rem;
    padding: 7rem 5.6rem;
    text-align: center;
    width: 100%;
    max-width: 44rem;

    .icon-large {
      font-size: 6.4rem;
      color: #fff;
      margin-bottom: 2.8rem;
    }

    h3 { font-size: 3.6rem; font-weight: 700; color: #fff; letter-spacing: -0.04em; margin-bottom: 1.2rem; }
    p { font-size: 1.7rem; color: rgba(255, 255, 255, 0.9); font-weight: 500; }
  }

  /* Developer */
  .dev-section {
    background: #0a0a0a;
    padding: 12rem 4rem;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .dev-inner {
    max-width: 110rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8rem;
    align-items: center;
  }

  .dev-avatar {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #0071e3, #bf5af2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6.4rem;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.05em;
    flex-shrink: 0;
    box-shadow: 0 20px 60px rgba(0, 113, 227, 0.3);
  }

  .dev-content {
    h2 { font-size: 4.8rem; font-weight: 700; color: #ffffff; letter-spacing: -0.04em; margin-bottom: 2.4rem; }
    p { font-size: 1.7rem; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 1.6rem; 
      strong { color: #fff; font-weight: 600; }
    }
  }

  .dev-actions { display: flex; gap: 1.6rem; margin-top: 2.4rem; flex-wrap: wrap; }

  .dev-btn {
    padding: 1.4rem 2.8rem;
    border-radius: 3rem;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    border: none;

    &.primary {
      background: #0071e3;
      color: #fff;
      &:hover { background: #1d1d1f; transform: scale(1.02); }
    }

    &.ghost {
      background: transparent;
      color: #0071e3;
      border: 1.5px solid #0071e3;
      &:hover { background: rgba(0, 113, 227, 0.1); }
    }
  }

  /* Values */
  .values-section { background: #000; padding: 12rem 4rem; }
  .values-inner { max-width: 130rem; margin: 0 auto; }
  .values-header { text-align: center; margin-bottom: 8rem; 
    h2 { font-size: 5.6rem; font-weight: 700; color: #fff; letter-spacing: -0.04em; } }

  .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3.2rem; }

  .value-card {
    background: #111;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 2.8rem;
    padding: 4.8rem;
    transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);

    &:hover { background: rgba(255,255,255,0.04); border-color: rgba(0,113,227,0.5); transform: translateY(-8px); }

    .value-icon { font-size: 3.6rem; color: #0071e3; margin-bottom: 2.4rem; }
    h3 { font-size: 2.4rem; font-weight: 700; color: #fff; margin-bottom: 1.2rem; letter-spacing: -0.02em; }
    p { font-size: 1.55rem; color: rgba(255,255,255,0.45); line-height: 1.6; }
  }

  @media (max-width: 998px) {
    .about-hero h1 { font-size: 5rem; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .mission-inner { grid-template-columns: 1fr; gap: 6rem; text-align: center; }
    .mission-text { display: flex; flex-direction: column; align-items: center; }
    .dev-inner { grid-template-columns: 1fr; text-align: center; justify-items: center; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .about-hero h1 { font-size: 3.6rem; }
    .stats-grid { grid-template-columns: 1fr; }
    .values-grid { grid-template-columns: 1fr; }
    .dev-avatar { width: 16rem; height: 16rem; font-size: 4.8rem; }
  }
`;

export default About;