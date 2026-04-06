import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useCartContext } from "../context/cart_context";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { total_item } = useCartContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderWrap scrolled={scrolled}>
        <div className="nav-inner">
          {/* Logo */}
          <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-img-wrap">
               <img src="/images/logo.png" alt="Gearlogy" style={{ height: '3.2rem', width: 'auto' }} />
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="nav-link">
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <NavLink to="/cart" className="cart-btn" title="Cart">
              <FiShoppingBag />
              {total_item > 0 && (
                <span className="cart-badge">{total_item}</span>
              )}
            </NavLink>
            <button
              className="menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </HeaderWrap>

      {/* Mobile drawer */}
      <MobileMenu open={menuOpen}>
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="mobile-link cart-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Cart {total_item > 0 && <span className="badge">{total_item}</span>}
          </NavLink>
        </div>
      </MobileMenu>

      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
    </>
  );
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.7)"};
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid ${({ scrolled }) =>
    scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"};
  transition: background 0.4s ease, border-color 0.4s ease;

  .nav-inner {
    max-width: 140rem;
    margin: 0 auto;
    padding: 0 4rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    flex-shrink: 0;

    .logo-mark {
      font-size: 1.8rem;
    }

    .logo-name {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: -0.04em;
      color: #ffffff;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .nav-link {
      padding: 0.6rem 1.4rem;
      font-size: 1.4rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      border-radius: 2rem;
      transition: all 0.2s ease;
      letter-spacing: -0.01em;

      &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
        opacity: 1;
      }

      &.active {
        color: #ffffff;
        font-weight: 600;
      }
    }
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .cart-btn {
    position: relative;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 2rem;
    border-radius: 50%;
    transition: all 0.2s;
    text-decoration: none;

    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
      opacity: 1;
    }

    .cart-badge {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 1.6rem;
      height: 1.6rem;
      background: #0071e3;
      color: #fff;
      border-radius: 50%;
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
  }

  .menu-btn {
    display: none;
    width: 4rem;
    height: 4rem;
    background: rgba(255, 255, 255, 0.06);
    border: none;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 2rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .desktop-nav {
      display: none;
    }

    .menu-btn {
      display: flex;
    }

    .nav-inner {
      padding: 0 2.4rem;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 6rem;
  right: 0;
  width: 28rem;
  height: calc(100vh - 6rem);
  background: rgba(10, 10, 10, 0.97);
  backdrop-filter: blur(20px);
  z-index: 1999;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-left: 1px solid rgba(255, 255, 255, 0.06);

  .mobile-menu-inner {
    padding: 3.2rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .mobile-link {
    padding: 1.6rem 1.6rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    border-radius: 1.2rem;
    transition: all 0.2s;
    letter-spacing: -0.01em;

    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.06);
      opacity: 1;
    }

    &.active {
      color: #ffffff;
      font-weight: 600;
    }
  }

  .cart-mobile {
    margin-top: 2rem;
    background: #0071e3;
    color: #ffffff;
    text-align: center;
    border-radius: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &:hover {
      background: #0077ed;
      opacity: 1;
    }

    .badge {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
      border-radius: 1em;
      padding: 0.2em 0.6em;
      font-size: 0.85em;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1998;
  backdrop-filter: blur(2px);
`;

export default Header;