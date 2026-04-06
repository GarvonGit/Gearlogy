import React from "react";
import styled, { keyframes } from "styled-components";

const brands = [
  { name: "Apple", emoji: "" },
  { name: "Samsung", emoji: "" },
  { name: "Sony", emoji: "" },
  { name: "Dell", emoji: "" },
  { name: "LG", emoji: "" },
  { name: "Bose", emoji: "" },
  { name: "Lenovo", emoji: "" },
  { name: "Xiaomi", emoji: "" },
];

const Trusted = () => {
  return (
    <Wrapper>
      <div className="container">
        <p className="trust-label">Trusted by millions. Carrying the world's best brands.</p>
        <div className="brands-track">
          <div className="brands-slide">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-item">
                <span className="brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="container">
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">★ ★ ★ ★ ★</div>
              <p>"Gearlogy is my go-to for all electronics. The quality is unmatched and delivery is always on time. Truly an Apple-level shopping experience."</p>
              <div className="reviewer">
                <div className="avatar">R</div>
                <div>
                  <strong>Rahul M.</strong>
                  <span>Tech Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★ ★ ★ ★ ★</div>
              <p>"I ordered my laptop and it arrived within 24 hours. The product was exactly as described. Customer support was incredibly helpful too!"</p>
              <div className="reviewer">
                <div className="avatar">P</div>
                <div>
                  <strong>Priya S.</strong>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★ ★ ★ ★ ★</div>
              <p>"The color selection for each product is a game-changer. I found exactly the shade I wanted for my earbuds. Will definitely shop again!"</p>
              <div className="reviewer">
                <div className="avatar">A</div>
                <div>
                  <strong>Arjun K.</strong>
                  <span>Music Producer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Wrapper = styled.section`
  background: #ffffff;
  padding: 8rem 0;

  .trust-label {
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4rem;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  .brands-track {
    overflow: hidden;
    margin: 0 -2.4rem;
  }

  .brands-slide {
    display: flex;
    gap: 4rem;
    width: max-content;
    animation: ${marquee} 20s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  .brand-item {
    flex-shrink: 0;
    padding: 1.6rem 3.2rem;
    background: #f5f5f7;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background: #e8e8ed;
    }
  }

  .brand-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.heading};
    letter-spacing: -0.02em;
    opacity: 0.6;
    transition: opacity 0.2s;

    .brand-item:hover & {
      opacity: 1;
    }
  }

  .testimonial-section {
    margin-top: 8rem;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }

  .testimonial-card {
    background: #f5f5f7;
    border-radius: 2rem;
    padding: 3.2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
      background: #fff;
    }

    .stars {
      color: #ff9f0a;
      font-size: 1.4rem;
      letter-spacing: 0.2em;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.heading};
      font-weight: 400;
      margin-bottom: 2.4rem;
    }

    .reviewer {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      div:last-child {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      strong {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.heading};
      }

      span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .avatar {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.btn};
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 700;
      flex-shrink: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .testimonial-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 5rem 0;
  }
`;

export default Trusted;