import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = ({ myData }) => {
  const { name, description } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to</p>
          <h1 className="hero-title">{name}</h1>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <NavLink to="/products">
              <Button className="btn-primary">
                Shop Now <FiArrowRight style={{ marginLeft: "0.5rem" }} />
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button className="btn-ghost">
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card--main">
            <div className="device-mockup">
              <span className="device-icon">💻</span>
              <p className="device-label">MacBook Pro</p>
              <p className="device-price">From ₹1,29,900</p>
            </div>
          </div>
          <div className="hero-card hero-card--sm hero-card--top">
            <div className="device-mockup small">
              <span className="device-icon">📱</span>
              <p className="device-label">iPhone 15</p>
              <p className="device-price">From ₹79,900</p>
            </div>
          </div>
          <div className="hero-card hero-card--sm hero-card--bottom">
            <div className="device-mockup small">
              <span className="device-icon">⌚</span>
              <p className="device-label">Apple Watch</p>
              <p className="device-price">From ₹41,900</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">Free</span>
              <span className="stat-label">Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.section`
  background: linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%);
  padding-top: 8rem;
  padding-bottom: 0;
  overflow: hidden;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    align-items: center;
    padding-bottom: 8rem;
  }

  .hero-content {
    animation: ${fadeIn} 0.8s ease both;
  }

  .hero-eyebrow {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: ${({ theme }) => theme.colors.btn};
    margin-bottom: 1.6rem;
  }

  .hero-title {
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 1.04;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 2.4rem;
    background: linear-gradient(135deg, #1d1d1f 0%, #4a4a4f 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-description {
    font-size: 1.8rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4rem;
    max-width: 48rem;
  }

  .hero-actions {
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
  }

  .hero-visual {
    position: relative;
    height: 48rem;
    animation: ${fadeIn} 0.8s 0.2s ease both;
  }

  .hero-card {
    position: absolute;
    background: #ffffff;
    border-radius: 2.4rem;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .hero-card--main {
    width: 60%;
    height: 72%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${float} 6s ease-in-out infinite;
  }

  .hero-card--sm {
    width: 38%;
    height: 38%;
  }

  .hero-card--top {
    top: 0;
    right: 0;
    animation: ${float} 5s 1s ease-in-out infinite;
  }

  .hero-card--bottom {
    bottom: 0;
    right: 0;
    animation: ${float} 7s 0.5s ease-in-out infinite;
  }

  .device-mockup {
    padding: 2.4rem;

    .device-icon {
      font-size: 5rem;
      display: block;
      margin-bottom: 1.2rem;
    }

    .device-label {
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.heading};
      letter-spacing: -0.01em;
    }

    .device-price {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.btn};
      margin-top: 0.4rem;
      font-weight: 500;
    }

    &.small {
      padding: 1.6rem;

      .device-icon {
        font-size: 3.2rem;
        margin-bottom: 0.8rem;
      }

      .device-label {
        font-size: 1.3rem;
      }

      .device-price {
        font-size: 1.1rem;
      }
    }
  }

  .hero-stats {
    background: ${({ theme }) => theme.colors.heading};
    padding: 3.2rem 0;

    .stats-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
    }

    .stat-item {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .stat-number {
      font-size: 2.8rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .stat-label {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 400;
    }

    .stat-divider {
      width: 1px;
      height: 4rem;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 4rem;
    }

    .hero-description {
      max-width: 100%;
    }

    .hero-actions {
      justify-content: center;
    }

    .hero-visual {
      height: 32rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-top: 4rem;

    .hero-title {
      font-size: 4.4rem;
    }

    .hero-description {
      font-size: 1.6rem;
    }

    .stats-row {
      flex-wrap: wrap;
      gap: 2.4rem !important;
    }

    .stat-divider {
      display: none;
    }
  }
`;

export default HeroSection;