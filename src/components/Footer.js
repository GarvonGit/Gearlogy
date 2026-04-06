import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      {/* CTA Strip */}
      <div className="cta-strip">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Ready to gear up?</h2>
            <p>
              Join 500,000+ customers who trust Gearlogy for their tech needs.
            </p>
          </div>
          <div className="cta-actions">
            <NavLink to="/products">
              <button className="cta-btn primary">Shop Now</button>
            </NavLink>
            <NavLink to="/contact">
              <button className="cta-btn ghost">Contact Us</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <footer>
        <div className="footer-inner">
          <div className="col brand-col">
            <div className="footer-logo">
               <img src="/images/logo.png" alt="Gearlogy" style={{ height: '3rem', width: 'auto' }} />
            </div>
            <p className="tagline">
              Premium electronics. Curated for every lifestyle. Delivered with love.
            </p>
            <div className="social-row">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
                { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
                { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
                { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerCols.map((col) => (
            <div key={col.heading} className="col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <NavLink to={link.to}>{link.label}</NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col newsletter-col">
            <h4>Stay in the loop</h4>
            <p>Exclusive deals, new launches and tech news — delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gearlogy · All rights reserved</p>
          <div className="footer-bottom-links">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Cookie Settings</a>
          </div>
          <p>
            Built by{" "}
            <a
              href="https://portfolio-2026-mu-swart.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Garv Chouhan
            </a>
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const footerCols = [
  {
    heading: "Products",
    links: [
      { label: "Smartphones", to: "/products" },
      { label: "Laptops", to: "/products" },
      { label: "Tablets", to: "/products" },
      { label: "Smartwatches", to: "/products" },
      { label: "Earphones", to: "/products" },
      { label: "Desktop PCs", to: "/products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", href: "#!" },
      { label: "Press", href: "#!" },
      { label: "Blog", href: "#!" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#!" },
      { label: "Track Order", href: "#!" },
      { label: "Return Policy", href: "#!" },
      { label: "Warranty Info", href: "#!" },
      { label: "+91 12345 67890", href: "tel:+911234567890" },
    ],
  },
];

const Wrapper = styled.div`
  .cta-strip {
    background: linear-gradient(135deg, #0071e3 0%, #0a84ff 50%, #6ac4dc 100%);
    padding: 7rem 4rem;
  }

  .cta-inner {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    flex-wrap: wrap;
  }

  .cta-text {
    h2 {
      font-size: 4rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.04em;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 1.7rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .cta-actions {
    display: flex;
    gap: 1.2rem;
    flex-shrink: 0;
  }

  .cta-btn {
    padding: 1.4rem 3rem;
    border-radius: 3rem;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    letter-spacing: -0.01em;
    transition: all 0.25s;

    &.primary {
      background: #ffffff;
      color: #0071e3;

      &:hover {
        background: #f5f5f7;
        transform: scale(1.02);
      }
    }

    &.ghost {
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
      border: 1.5px solid rgba(255, 255, 255, 0.3);

      &:hover {
        background: rgba(255, 255, 255, 0.25);
      }
    }
  }

  footer {
    background: #0a0a0a;
    padding: 0;
  }

  .footer-inner {
    max-width: 140rem;
    margin: 0 auto;
    padding: 7rem 4rem 5rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
    gap: 5rem;
    align-items: flex-start;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.6rem;

    span {
      font-size: 2rem;
    }

    strong {
      font-size: 2rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.04em;
    }
  }

  .tagline {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.4);
    line-height: 1.7;
    max-width: 28rem;
    margin-bottom: 2.8rem;
  }

  .social-row {
    display: flex;
    gap: 1.2rem;

    a {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.5rem;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        border-color: #0071e3;
        color: #0071e3;
        background: rgba(0, 113, 227, 0.1);
        opacity: 1;
      }
    }
  }

  .col h4 {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.3);
    margin-bottom: 2rem;
  }

  .col ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    list-style: none;
    padding: 0;

    a {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      transition: color 0.2s;
      letter-spacing: -0.01em;

      &:hover {
        color: #ffffff;
        opacity: 1;
      }
    }
  }

  .newsletter-col {
    p {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.4);
      line-height: 1.6;
      margin-bottom: 2rem;
      max-width: 30rem;
    }
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    input[type="email"] {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.2rem;
      padding: 1.2rem 1.6rem;
      font-size: 1.4rem;
      color: #ffffff;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
      max-width: 100%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.25);
      }

      &:focus {
        border-color: #0071e3;
        background: rgba(255, 255, 255, 0.09);
        box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
      }
    }

    button {
      padding: 1.2rem;
      background: #0071e3;
      border: none;
      border-radius: 1.2rem;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #0077ed;
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding: 2.4rem 4rem;
    max-width: 140rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.2rem;

    p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.3);

      a {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: rgba(255, 255, 255, 0.85);
          opacity: 1;
        }
      }
    }
  }

  .footer-bottom-links {
    display: flex;
    gap: 2rem;

    a {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.3);
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
        opacity: 1;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }

    .brand-col {
      grid-column: 1 / -1;
    }

    .newsletter-col {
      grid-column: 1 / -1;
    }

    .cta-inner {
      flex-direction: column;
      text-align: center;
    }

    .cta-actions {
      justify-content: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer-inner {
      grid-template-columns: 1fr;
      padding: 5rem 2.4rem 3rem;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
      padding: 2rem 2.4rem;
    }

    .cta-strip {
      padding: 5rem 2.4rem;
    }

    .cta-text h2 {
      font-size: 2.8rem;
    }
  }
`;

export default Footer;