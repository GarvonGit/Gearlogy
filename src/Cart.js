import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";
import { FiShoppingBag, FiTrash2, FiArrowLeft, FiArrowRight, FiTruck, FiShield } from "react-icons/fi";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <EmptyWrapper>
        <div className="empty-content">
          <div className="empty-icon"><FiShoppingBag /></div>
          <h2>Your cart is empty</h2>
          <p>
            Discover our premium electronics and find something you'll love.
          </p>
          <NavLink to="/products">
            <button className="shop-btn">
              <FiArrowLeft style={{ marginRight: "0.8rem" }} />
              Browse Products
            </button>
          </NavLink>
        </div>
      </EmptyWrapper>
    );
  }

  const itemCount = cart.reduce((acc, item) => acc + item.amount, 0);
  const orderTotal = shipping_fee + total_price;

  return (
    <Wrapper>
      {/* Header */}
      <div className="cart-header">
        <div className="cart-header-inner">
          <h1>Cart <span className="item-count">{itemCount}</span></h1>
          <NavLink to="/products" className="continue-link">
            <FiArrowLeft style={{ marginRight: "0.4rem" }} />
            Continue Shopping
          </NavLink>
        </div>
      </div>

      {/* Body */}
      <div className="cart-body">
        {/* Items */}
        <div className="cart-items-col">
          <div className="items-header">
            <span>Product</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          <div className="items-list">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className="clear-row">
            <button className="clear-all-btn" onClick={clearCart}>
              <FiTrash2 style={{ marginRight: "0.6rem" }} />
              Clear Cart
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="summary-col">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-lines">
              <div className="line">
                <span>Subtotal ({itemCount} items)</span>
                <span><FormatPrice price={total_price} /></span>
              </div>
              <div className="line">
                <span>Shipping</span>
                <span className="free-tag">
                  {shipping_fee === 0 ? "Free" : <FormatPrice price={shipping_fee} />}
                </span>
              </div>
              <div className="line">
                <span>GST &amp; Taxes</span>
                <span>Included</span>
              </div>
            </div>

            <div className="divider" />

            <div className="total-line">
              <span>Total</span>
              <strong><FormatPrice price={orderTotal} /></strong>
            </div>

            <div className="trust-badges">
              <div className="badge-item">
                <FiTruck />
                <span>Free Delivery</span>
              </div>
              <div className="badge-item">
                <FiShield />
                <span>Secure Checkout</span>
              </div>
            </div>

            <NavLink to="/checkout" style={{ display: "block" }}>
              <button className="checkout-btn">
                Checkout <FiArrowRight style={{ marginLeft: "0.6rem" }} />
              </button>
            </NavLink>

            <div className="payment-methods">
              <span>Accepted:</span>
              <div className="methods">
                {["💳 Visa", "💳 MC", "📱 UPI", "🏦 Bank"].map((m, i) => (
                  <span key={i} className="method">{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Promo */}
          <div className="promo-card">
            <h4>Promo Code</h4>
            <div className="promo-row">
              <input type="text" placeholder="Enter code..." />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyWrapper = styled.div`
  background: #000;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .empty-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4rem 2.4rem;
    max-width: 48rem;
  }

  .empty-icon {
    width: 10rem;
    height: 10rem;
    background: #111;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.6rem;
    color: rgba(255,255,255,0.25);
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.04em;
  }

  p {
    font-size: 1.7rem;
    color: rgba(255,255,255,0.45);
    line-height: 1.6;
  }

  .shop-btn {
    display: flex;
    align-items: center;
    padding: 1.4rem 2.8rem;
    background: #0071e3;
    border: none;
    border-radius: 3rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background: #0077ed;
      transform: scale(1.02);
      box-shadow: 0 8px 24px rgba(0,113,227,0.4);
    }
  }
`;

const Wrapper = styled.div`
  background: #000;
  min-height: 100vh;

  .cart-header {
    background: #0a0a0a;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 4rem 4rem 3rem;
  }

  .cart-header-inner {
    max-width: 140rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    h1 {
      font-size: 4.8rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.05em;
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .item-count {
      font-size: 2rem;
      font-weight: 400;
      color: rgba(255,255,255,0.35);
      background: rgba(255,255,255,0.06);
      padding: 0.4rem 1.2rem;
      border-radius: 2rem;
    }

    .continue-link {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: #0071e3;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover { opacity: 0.7; }
    }
  }

  .cart-body {
    max-width: 140rem;
    margin: 0 auto;
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 38rem;
    gap: 3.2rem;
    align-items: flex-start;
  }

  /* Items Column */
  .cart-items-col {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .items-header {
    display: grid;
    grid-template-columns: 3fr 1fr 1.5fr 1fr 0.3fr;
    padding: 0 0 1.4rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: rgba(255,255,255,0.3);
  }

  .items-list {
    display: flex;
    flex-direction: column;
  }

  .clear-row {
    padding-top: 2.4rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    margin-top: 0.8rem;
  }

  .clear-all-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: 1px solid rgba(255, 55, 95, 0.35);
    color: #ff375f;
    padding: 0.9rem 1.8rem;
    border-radius: 3rem;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover { background: rgba(255,55,95,0.1); border-color: #ff375f; }
  }

  /* Summary Column */
  .summary-col {
    position: sticky;
    top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .summary-card {
    background: #111;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 2rem;
    padding: 2.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.03em;
    }
  }

  .summary-lines {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: rgba(255,255,255,0.5);

    .free-tag { color: #30d158; font-weight: 600; }
  }

  .divider { height: 1px; background: rgba(255,255,255,0.07); }

  .total-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.6rem;
      font-weight: 500;
      color: rgba(255,255,255,0.7);
    }

    strong {
      font-size: 2.8rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.04em;
    }
  }

  .trust-badges {
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.4);

    .badge-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255,255,255,0.04);
      border-radius: 2rem;
      padding: 0.6rem 1.2rem;
      flex: 1;
      justify-content: center;
    }
  }

  .checkout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.6rem;
    background: #0071e3;
    border: none;
    border-radius: 3rem;
    color: #fff;
    font-size: 1.7rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s;
    letter-spacing: -0.01em;

    &:hover { background: #0077ed; transform: scale(1.01); box-shadow: 0 8px 32px rgba(0,113,227,0.4); }
  }

  .payment-methods {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 1.2rem;
    color: rgba(255,255,255,0.25);

    .methods {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .method {
      font-size: 1.2rem;
      color: rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 0.3rem 0.8rem;
      border-radius: 0.6rem;
    }
  }

  .promo-card {
    background: #111;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 2rem;
    padding: 2.4rem;

    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      color: rgba(255,255,255,0.7);
      margin-bottom: 1.4rem;
      letter-spacing: -0.01em;
    }

    .promo-row {
      display: flex;
      gap: 0.8rem;

      input {
        flex: 1;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 1rem;
        color: #fff;
        padding: 1rem 1.2rem;
        font-size: 1.4rem;
        max-width: unset;

        &::placeholder { color: rgba(255,255,255,0.2); }
        &:focus { border-color: #0071e3; }
      }

      button {
        padding: 1rem 1.8rem;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 1rem;
        color: rgba(255,255,255,0.8);
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.2s;

        &:hover { background: rgba(255,255,255,0.14); color: #fff; }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .cart-body { grid-template-columns: 1fr; padding: 2.4rem; }
    .summary-col { position: static; }
    .items-header { display: none; }
    .cart-header { padding: 3rem 2.4rem 2rem; }
    .cart-header-inner h1 { font-size: 3.2rem; }
  }
`;

export default Cart;