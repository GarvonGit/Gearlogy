import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Product from "./components/Product";
import { FiArrowRight, FiTruck, FiShield, FiRefreshCw, FiCreditCard } from "react-icons/fi";

const Home = () => {
  const { isLoading, products } = useProductContext();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Filter products by category for specialized sections
  const smartphones = products.filter((p) => p.category === "smartphones").slice(0, 4);
  const laptops = products.filter((p) => p.category === "laptops").slice(0, 4);
  const watches = products.filter((p) => p.category === "watches").slice(0, 4);
  const tablets = products.filter((p) => p.category === "tablets").slice(0, 4);

  // Modern Apple-style Scroll Animations
  const heroScale = useTransform(smoothProgress, [0, 0.25], [1, 1.8]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.25], [0, -200]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <div className="loader-box">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
            className="loader-dot"
          />
        </div>
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      {/* ── CINEMATIC HERO ── */}
      <section className="hero-viewport">
        <motion.div style={{ opacity: heroOpacity }} className="hero-fixed-background">
           <motion.img 
             style={{ scale: heroScale }}
             src="/images/hero-phone.png" 
             alt="Hero Device" 
             className="hero-main-img"
           />
           <div className="hero-vignette" />
        </motion.div>

        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="hero-ui-layer">
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="eyebrow"
            >
              The Next Frontier.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              Intelligence.<br/>Redefined.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-actions"
            >
              <NavLink to="/products">
                <button className="apple-btn primary">Explore Models</button>
              </NavLink>
              <NavLink to="/products">
                <button className="apple-btn ghost">Compare all <FiArrowRight /></button>
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── PRODUCT SERIES: PRO ── */}
      <ProductSeries
        title="Phone Pro"
        copy="A breakthrough camera. A titanium finish. And the powerful A17 Pro chip."
        products={smartphones}
        bgColor="#000"
        accent="#0071e3"
      />

      {/* ── PRODUCT SERIES: STUDIO ── */}
      <ProductSeries
        title="Studio Max"
        copy="The ultimate creative workstation. Performance without limits."
        products={laptops}
        bgColor="#0a0a0a"
        accent="#bf5af2"
        flipped
      />

      {/* ── PRODUCT SERIES: ACTIVE ── */}
      <ProductSeries
        title="Active Life"
        copy="Your health, on your wrist. More tracking, better insights."
        products={watches}
        bgColor="#000"
        accent="#ff375f"
      />

      {/* ── PRODUCT SERIES: CREATE ── */}
      <ProductSeries
        title="iPad Air"
        copy="Unbelievably thin. Outrageously powerful."
        products={tablets}
        bgColor="#080808"
        accent="#30d158"
        flipped
      />

      {/* ── TRUST SECTION ── */}
      <TrustSection />
    </Wrapper>
  );
};

const TrustSection = () => (
  <section className="trust-strip">
    <div className="trust-grid">
      {[
        { icon: <FiTruck />, title: "Free Next-Day Delivery", desc: "Get it fast." },
        { icon: <FiShield />, title: "Two-Year Protection", desc: "Industry leading." },
        { icon: <FiRefreshCw />, title: "30-Day Returns", desc: "No questions asked." },
        { icon: <FiCreditCard />, title: "Zero Interest EMI", desc: "Safe checkout." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="trust-item"
        >
            <div className="t-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProductSeries = ({ title, copy, products, bgColor, flipped, accent }) => {
  return (
    <SeriesWrapper style={{ background: bgColor }}>
      <div className={`series-inner ${flipped ? 'flipped' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: flipped ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="series-content"
        >
          <span className="accent-bar" style={{ background: accent }} />
          <h2>{title}</h2>
          <p>{copy}</p>
          <NavLink to="/products" className="learn-link" style={{ color: accent }}>
            View categories <FiArrowRight style={{ marginLeft: '0.6rem' }} />
          </NavLink>
        </motion.div>

        <div className="series-grid">
          {products.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Product {...item} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="radial-glow" style={{ background: `radial-gradient(circle at center, ${accent}15 0%, transparent 60%)` }} />
    </SeriesWrapper>
  );
};

const LoadingWrapper = styled.div`
  height: 100vh; background: #000; display: flex; align-items: center; justify-content: center;
  .loader-dot { width: 1.4rem; height: 1.4rem; background: #0071e3; border-radius: 50%; }
`;

const Wrapper = styled.div`
  background: #000;

  .hero-viewport { height: 250vh; position: relative; }
  
  .hero-fixed-background { 
    position: sticky; top: 0; height: 100vh; width: 100%; overflow: hidden; 
    display: flex; align-items: center; justify-content: center; z-index: 1;
  }
  
  .hero-main-img { 
    height: 100%; width: 100%; object-fit: cover; 
    filter: brightness(0.9) contrast(1.1); 
  }
  
  .hero-vignette { 
    position: absolute; inset: 0; 
    background: radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%); 
  }

  .hero-ui-layer { 
    position: sticky; top: 0; height: 100vh; width: 100%; 
    z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; 
    pointer-events: none; margin-top: -100vh;
  }

  .hero-content { text-align: center; max-width: 100rem; pointer-events: auto; }
  .eyebrow { font-size: 1.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,255,255,0.7); margin-bottom: 2.8rem; }
  .hero-title { font-size: clamp(6rem, 15vw, 15rem); font-weight: 700; color: #fff; letter-spacing: -0.06em; line-height: 0.85; margin-bottom: 5.4rem; }
  
  .hero-actions { display: flex; gap: 3.2rem; justify-content: center; }
  .apple-btn { padding: 2rem 4.4rem; border-radius: 4rem; font-size: 1.9rem; font-weight: 600; cursor: pointer; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
               &.primary { background: #fff; color: #000; border: none; &:hover { background: #f5f5f7; transform: translateY(-4px); } }
               &.ghost { background: transparent; border: none; color: #fff; display: flex; align-items: center; gap: 1rem; &:hover { opacity: 0.7; transform: translateY(-3px); } } }

  .trust-strip { padding: 14rem 4rem; background: #000; }
  .trust-grid { max-width: 130rem; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6rem; }
  .trust-item { text-align: center; .t-icon { font-size: 4rem; color: #0071e3; margin-bottom: 2.6rem; } h3 { color: #fff; font-size: 2.3rem; margin-bottom: 1.2rem; } p { color: rgba(255,255,255,0.4); font-size: 1.6rem; } }

  @media (max-width: 1024px) { .trust-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .trust-grid { grid-template-columns: 1fr; } .hero-title { font-size: clamp(4rem, 12vw, 6rem); } }
`;

const SeriesWrapper = styled.section`
  padding: 20rem 4rem; position: relative; border-bottom: 1px solid rgba(255,255,255,0.03);

  .series-inner { max-width: 140rem; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 14rem; align-items: center; 
                  &.flipped { .series-content { order: 2; } .series-grid { order: 1; } } }

  .series-content { position: relative; z-index: 5;
                    .accent-bar { width: 7rem; height: 0.5rem; border-radius: 1rem; margin-bottom: 4rem; display: block; }
                    h2 { font-size: clamp(4rem, 10vw, 8rem); font-weight: 700; color: #fff; margin-bottom: 3.2rem; letter-spacing: -0.05em; line-height: 1; } 
                    p { font-size: 2.4rem; line-height: 1.5; color: rgba(255,255,255,0.5); margin-bottom: 5.6rem; font-weight: 400; max-width: 55rem; } }
  .learn-link { font-size: 2.1rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; transition: gap 0.3s; &:hover { gap: 1.2rem; } }

  .series-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4.8rem; position: z-index: 5; }
  .radial-glow { position: absolute; inset: 0; pointer-events: none; z-index: 1; }

  @media (max-width: 1100px) { .series-inner, .series-inner.flipped { grid-template-columns: 1fr; text-align: center; } .series-content { display: flex; flex-direction: column; align-items: center; p { max-width: 100%; } } }
`;

export default Home;