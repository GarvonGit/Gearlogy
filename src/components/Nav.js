import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { total_item } = useCartContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavWrapper scrolled={scrolled}>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className="cart-trolley" />
              {total_item > 0 && (
                <span className="cart-total--item">{total_item}</span>
              )}
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          {menuIcon ? (
            <CgClose className="mobile-nav-icon" onClick={() => setMenuIcon(false)} />
          ) : (
            <CgMenu className="mobile-nav-icon" onClick={() => setMenuIcon(true)} />
          )}
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  .navbar {
    display: flex;
    align-items: center;
  }

  .navbar-lists {
    display: flex;
    gap: 3.2rem;
    align-items: center;

    .navbar-link {
      display: inline-block;
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.heading};
      transition: opacity 0.2s ease;
      letter-spacing: -0.01em;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

      &.active {
        font-weight: 500;
        opacity: 1;
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;

    .mobile-nav-icon {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  .cart-trolley--link {
    position: relative;
    display: flex;
    align-items: center;

    .cart-trolley {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }

    .cart-total--item {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 18px;
      height: 18px;
      background-color: ${({ theme }) => theme.colors.btn};
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: flex;
      z-index: 9999;
    }

    .navbar-lists {
      position: fixed;
      top: 0;
      right: 0;
      width: 75vw;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      z-index: 9998;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);

      .navbar-link {
        font-size: 2.4rem;
        font-weight: 500;
      }
    }

    .active .navbar-lists {
      transform: translateX(0);
    }

    .cart-trolley--link .cart-trolley {
      font-size: 2.8rem;
    }
  }
`;

export default Nav;