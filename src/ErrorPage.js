import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="error-content">
        <div className="error-code">404</div>
        <h1>Page not found.</h1>
        <p>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="error-actions">
          <NavLink to="/">
            <button className="btn primary">Go Home</button>
          </NavLink>
          <NavLink to="/products">
            <button className="btn ghost">Browse Products</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const glitch = keyframes`
  0%, 100% { text-shadow: none; }
  25% { text-shadow: -3px 0 #0071e3; }
  50% { text-shadow: 3px 0 #bf5af2; }
  75% { text-shadow: -2px 0 #30d158; }
`;

const Wrapper = styled.div`
  background: #000;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2.4rem;
  text-align: center;

  .error-content {
    max-width: 60rem;
    width: 100%;
  }

  .error-code {
    font-size: 16rem;
    font-weight: 900;
    letter-spacing: -0.08em;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 2.4rem;
    animation: ${glitch} 4s ease-in-out infinite;
    background: linear-gradient(135deg, #0071e3 0%, #bf5af2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h1 {
    font-size: 4.4rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.05em;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.8rem;
    color: rgba(255,255,255,0.45);
    line-height: 1.6;
    margin-bottom: 4rem;
  }

  .error-actions {
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1.4rem 3.2rem;
    border-radius: 3rem;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.25s;
    letter-spacing: -0.01em;

    &.primary {
      background: #0071e3;
      color: #fff;
      &:hover { background: #0077ed; transform: scale(1.02); box-shadow: 0 8px 24px rgba(0,113,227,0.4); }
    }

    &.ghost {
      background: rgba(255,255,255,0.06);
      color: rgba(255,255,255,0.8);
      border: 1px solid rgba(255,255,255,0.1);
      &:hover { background: rgba(255,255,255,0.12); color: #fff; }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .error-code { font-size: 10rem; }
    h1 { font-size: 3.2rem; }
  }
`;

export default ErrorPage;
