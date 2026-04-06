import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./context/cart_context";

const Checkout = () => {
  const { clearCart } = useCartContext();

  React.useEffect(() => {
    clearCart();
  }, []);

  return (
    <Wrapper>
      <div className="success-content">
        <div className="checkmark-wrapper">
          <div className="checkmark">✓</div>
          <div className="ring" />
        </div>
        <h1>Order Confirmed!</h1>
        <p className="sub">
          Thank you for shopping with Gearlogy. Your order has been placed
          successfully and will be dispatched within 24 hours.
        </p>

        <div className="details-grid">
          <div className="detail-item">
            <span className="d-icon">📦</span>
            <span className="d-label">Estimated Delivery</span>
            <strong>2–3 Business Days</strong>
          </div>
          <div className="detail-item">
            <span className="d-icon">📧</span>
            <span className="d-label">Confirmation Email</span>
            <strong>Sent to your inbox</strong>
          </div>
          <div className="detail-item">
            <span className="d-icon">🔒</span>
            <span className="d-label">Payment Status</span>
            <strong>Secured & Processed</strong>
          </div>
        </div>

        <div className="action-buttons">
          <NavLink to="/products">
            <button className="btn primary">Continue Shopping</button>
          </NavLink>
          <NavLink to="/">
            <button className="btn ghost">Back to Home</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const pop = keyframes`
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 0.2; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  background: #000000;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2.4rem;

  .success-content {
    text-align: center;
    max-width: 64rem;
    width: 100%;
    animation: ${fadeUp} 0.6s ease both;
  }

  .checkmark-wrapper {
    position: relative;
    width: 10rem;
    height: 10rem;
    margin: 0 auto 4rem;
  }

  .checkmark {
    width: 10rem;
    height: 10rem;
    background: linear-gradient(135deg, #30d158, #34c759);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.4rem;
    color: #fff;
    font-weight: 300;
    animation: ${pop} 0.5s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    position: relative;
    z-index: 1;
  }

  .ring {
    position: absolute;
    inset: -0.8rem;
    border-radius: 50%;
    background: rgba(48, 209, 88, 0.2);
    animation: ${pulse} 2s ease-in-out infinite;
  }

  h1 {
    font-size: 5.2rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.05em;
    margin-bottom: 1.6rem;
  }

  .sub {
    font-size: 1.8rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.7;
    margin-bottom: 4.8rem;
    max-width: 52rem;
    margin-left: auto;
    margin-right: auto;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    margin-bottom: 4.8rem;
  }

  .detail-item {
    background: #111;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 1.6rem;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    .d-icon { font-size: 2.4rem; }
    .d-label {
      font-size: 1.2rem;
      color: rgba(255,255,255,0.35);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 500;
    }

    strong {
      font-size: 1.5rem;
      color: #ffffff;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
  }

  .action-buttons {
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
      &:hover { background: rgba(255,255,255,0.1); color: #fff; }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .details-grid { grid-template-columns: 1fr; }
    h1 { font-size: 3.6rem; }
  }
`;

export default Checkout;