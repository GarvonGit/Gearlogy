import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { motion } from "framer-motion";

const Product = ({ id, name, image, price, category, stars, reviews, colors }) => {
  const imgUrl =
    image && image.length > 0 && image[0]?.url
      ? image[0].url
      : `https://placehold.co/400x400/111111/555555?text=Product`;

  return (
    <NavLink to={`/singleproduct/${id}`} className="product-card-link" style={{ textDecoration: 'none' }}>
      <Card
        as={motion.div}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="card-img-box">
          <img
            src={imgUrl}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://placehold.co/400x400/111111/555555?text=Product`;
            }}
          />
          {category && <span className="card-badge">{category}</span>}
          {/* Rim light effect to make dark products visible on dark background */}
          <div className="rim-light" />
        </div>

        <div className="card-body">
          <div className="card-meta">
            <h3 className="card-name">{name}</h3>
            <span className="card-price">
              <FormatPrice price={price} />
            </span>
          </div>

          <div className="card-footer">
            <div className="card-colors">
              {colors && colors.slice(0, 4).map((c, i) => (
                <span
                  key={i}
                  className="color-dot"
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
            
            <div className="card-rating">
              <span className="star">★</span>
              {parseFloat(stars || 4.2).toFixed(1)}
            </div>
          </div>
        </div>
      </Card>
    </NavLink>
  );
};

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03); /* Subtle backdrop */
  backdrop-filter: blur(8px);
  border-radius: 2.4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.3s ease, background 0.3s ease;
  width: 100%;
  max-width: 38rem;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(0, 113, 227, 0.4);
    .rim-light { opacity: 0.15; }
  }

  .card-img-box {
    position: relative;
    background: #111;
    height: 24rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 3.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    img {
      max-width: 85%;
      max-height: 18rem;
      object-fit: contain;
      z-index: 2;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover img {
      transform: scale(1.1);
    }

    .rim-light {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 50%, #ffffff20 0%, transparent 70%);
      opacity: 0.1;
      pointer-events: none;
      z-index: 1;
      transition: opacity 0.3s;
    }

    .card-badge {
      position: absolute;
      top: 1.6rem;
      left: 1.6rem;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.6rem 1.4rem;
      border-radius: 2.4rem;
      font-size: 1.15rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.85);
      text-transform: capitalize;
      z-index: 3;
    }
  }

  .card-body {
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1.8rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%);
  }

  .card-meta {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .card-name {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.01em;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-price {
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
  }

  .card-footer {
    padding-top: 1.8rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .card-colors {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    .color-dot {
      width: 1.35rem;
      height: 1.35rem;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      flex-shrink: 0;
      transition: transform 0.2s;
      &:hover { transform: scale(1.2); }
    }
  }

  .card-rating {
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 0.8rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .star { color: #ff9f0a; font-size: 1.4rem; }
  }
`;

export default Product;