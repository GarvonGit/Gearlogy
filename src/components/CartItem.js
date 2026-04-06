import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <ItemRow>
      <div className="item-product">
        <div className="item-img">
          <img
            src={image}
            alt={name}
            onError={(e) => {
              e.target.src = "https://placehold.co/80x80/111111/444?text=Item";
            }}
          />
        </div>
        <div className="item-info">
          <p className="item-name">{name}</p>
          {color && (
            <div className="item-color">
              <span className="swatch" style={{ backgroundColor: color }} />
              <span className="color-val" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>
                {color}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="item-price">
        <FormatPrice price={price} />
      </div>

      <div className="item-qty">
        <button
          className="qty-btn"
          onClick={() => setDecrease(id)}
          disabled={amount <= 1}
        >
          <FiMinus />
        </button>
        <span className="qty-num">{amount}</span>
        <button className="qty-btn" onClick={() => setIncrement(id)}>
          <FiPlus />
        </button>
      </div>

      <div className="item-subtotal">
        <FormatPrice price={price * amount} />
      </div>

      <div className="item-remove">
        <button
          className="remove-btn"
          onClick={() => removeItem(id)}
          title="Remove"
        >
          <FiTrash2 />
        </button>
      </div>
    </ItemRow>
  );
};

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1.5fr 1fr 0.3fr;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.2s;

  &:last-child { border-bottom: none; }

  &:hover {
    background: rgba(255,255,255,0.02);
    border-radius: 1.2rem;
    padding: 2rem 1.2rem;
    margin: 0 -1.2rem;
  }

  .item-product {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .item-img {
    width: 7rem;
    height: 7rem;
    background: #1a1a1a;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.06);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .item-name {
    font-size: 1.45rem;
    font-weight: 600;
    color: rgba(255,255,255,0.85);
    letter-spacing: -0.01em;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .item-color {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .swatch {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      flex-shrink: 0;
    }
  }

  .item-price {
    font-size: 1.5rem;
    color: rgba(255,255,255,0.45);
  }

  .item-qty {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 3rem;
    width: fit-content;
    overflow: hidden;

    .qty-btn {
      width: 3.2rem;
      height: 3.2rem;
      border: none;
      background: transparent;
      color: rgba(255,255,255,0.7);
      font-size: 1.3rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;

      &:hover:not(:disabled) { background: rgba(255,255,255,0.08); color: #fff; }
      &:disabled { opacity: 0.25; cursor: not-allowed; }
    }

    .qty-num {
      min-width: 3rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
    }
  }

  .item-subtotal {
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.03em;
  }

  .remove-btn {
    width: 3.2rem;
    height: 3.2rem;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.25);
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: rgba(255,55,95,0.12);
      color: #ff375f;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    grid-template-columns: 1fr;
    background: #111;
    border-radius: 1.6rem;
    padding: 2rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);

    &:hover { margin-bottom: 1rem; padding: 2rem; }

    .item-qty { margin: 0; }
  }
`;

export default CartItem;