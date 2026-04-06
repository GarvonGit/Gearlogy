import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbRefresh } from "react-icons/tb";
import { FiShoppingCart, FiHeart, FiCheck, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useCartContext } from "./context/cart_context";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { addToCart } = useCartContext();
  const { id } = useParams();

  const [selectedColor, setSelectedColor] = useState(null);
  const [amount, setAmount] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const { name, company, price, description, stock, stars, reviews, image, colors, category } = singleProduct;

  useEffect(() => {
    getSingleProduct(id);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (colors && colors.length > 0 && !selectedColor) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  const handleAddToCart = () => {
    addToCart(id, selectedColor, amount, singleProduct);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (isSingleLoading) {
    return (
      <LoadingWrap>
        <div className="container">
          <div className="ld-grid">
            <div className="ld-img" />
            <div className="ld-info">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="ld-line" style={{ width: i === 3 ? "40%" : i === 1 ? "80%" : "60%" }} />
              ))}
            </div>
          </div>
        </div>
      </LoadingWrap>
    );
  }

  if (!name) return null;

  const imgs = image && image.length > 0
    ? image.filter((i) => i?.url && i.url.startsWith("http"))
    : [{ url: "https://placehold.co/600x600/111111/444?text=Product" }];

  if (imgs.length === 0) {
    imgs.push({ url: "https://placehold.co/600x600/111111/444?text=Product" });
  }

  const safePrice = typeof price === "number" ? price : 0;

  return (
    <Wrapper>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="bc-inner">
          <NavLink to="/" className="bc-link">Home</NavLink>
          <span className="bc-sep">/</span>
          <NavLink to="/products" className="bc-link">Products</NavLink>
          <span className="bc-sep">/</span>
          <span className="bc-current">{name}</span>
        </div>
      </div>

      <div className="product-layout">
        {/* Gallery */}
        <div className="gallery">
          <div className="main-img-box">
            <img
              src={imgs[activeImg]?.url || imgs[0]?.url}
              alt={name}
              className="main-img"
              onError={(e) => {
                e.target.src = "https://placehold.co/600x600/111111/444?text=Product";
              }}
            />
          </div>
          {imgs.length > 1 && (
            <div className="thumbnails">
              {imgs.slice(0, 5).map((img, i) => (
                <button
                  key={i}
                  className={`thumb ${activeImg === i ? "active" : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img
                    src={img.url}
                    alt={`view ${i + 1}`}
                    onError={(e) => { e.target.src = "https://placehold.co/80x80/111111/444?text=."; }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="info-col">
          {category && <span className="product-cat">{category}</span>}
          <h1 className="product-name">{name}</h1>

          {/* Rating */}
          <div className="rating-row">
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  className={s <= Math.round(parseFloat(stars || 4)) ? "star filled" : "star"}
                >★</span>
              ))}
            </div>
            <span className="review-count">{reviews || 0} reviews</span>
          </div>

          {/* Pricing */}
          <div className="pricing-row">
            <span className="price-current"><FormatPrice price={safePrice} /></span>
            <span className="price-original"><FormatPrice price={Math.round(safePrice * 1.18)} /></span>
            <span className="price-badge">18% OFF</span>
          </div>

          <p className="product-desc">{description}</p>

          {/* Colors */}
          {colors && colors.length > 0 && (
            <div className="color-picker">
              <div className="cp-label">
                <span>Color</span>
                <span className="cp-val">{selectedColor}</span>
              </div>
              <div className="cp-options">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`cp-btn ${selectedColor === c ? "active" : ""}`}
                    style={{ backgroundColor: c }}
                    onClick={() => setSelectedColor(c)}
                    title={c}
                  >
                    {selectedColor === c && (
                      <FiCheck
                        className="cp-check"
                        style={{
                          color: c === "#ffffff" || c === "#f5f5f7" || c === "#e8e8ed" ? "#000" : "#fff",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="qty-row">
            <span className="qty-label">Qty</span>
            <div className="qty-control">
              <button className="qc-btn" onClick={() => setAmount((a) => Math.max(1, a - 1))} disabled={amount <= 1}>−</button>
              <span className="qc-num">{amount}</span>
              <button className="qc-btn" onClick={() => setAmount((a) => Math.min(stock || 10, a + 1))} disabled={amount >= (stock || 10)}>+</button>
            </div>
            <span className="stock-tag">
              {stock > 0 ? `${stock} in stock` : "Out of Stock"}
            </span>
          </div>

          {/* CTA */}
          <div className="cta-row">
            {stock > 0 ? (
              <>
                <button className="cta-primary" onClick={handleAddToCart} style={{ flex: 1 }}>
                  {addedToCart ? (
                    <><FiCheck style={{ marginRight: "0.6rem" }} /> Added!</>
                  ) : (
                    <><FiShoppingCart style={{ marginRight: "0.6rem" }} /> Add to Cart</>
                  )}
                </button>
                <NavLink to="/cart" style={{ flex: 1 }}>
                  <button
                    className="cta-secondary"
                    style={{ width: "100%" }}
                    onClick={() => addToCart(id, selectedColor, amount, singleProduct)}
                  >
                    Buy Now <FiArrowRight style={{ marginLeft: "0.5rem" }} />
                  </button>
                </NavLink>
              </>
            ) : (
              <button className="cta-primary" disabled style={{ flex: 1, opacity: 0.4, cursor: "not-allowed" }}>
                Out of Stock
              </button>
            )}
            <button className="wishlist-btn" title="Wishlist">
              <FiHeart />
            </button>
          </div>

          {/* Specs */}
          <div className="specs-table">
            {[
              { label: "Brand", val: company },
              { label: "Availability", val: stock > 0 ? "In Stock" : "Out of Stock", green: stock > 0 },
              { label: "Category", val: category },
              { label: "SKU", val: `GRL-${id}` },
            ].map((s, i) => (
              <div key={i} className="spec-row">
                <span className="spec-label">{s.label}</span>
                <span className={`spec-val ${s.green ? "green" : ""}`}>{s.val}</span>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="guarantees">
            {[
              { icon: <TbTruckDelivery />, title: "Free Delivery", desc: "All orders" },
              { icon: <TbRefresh />, title: "30-Day Returns", desc: "No questions" },
              { icon: <MdSecurity />, title: "2yr Warranty", desc: "Included" },
            ].map((g, i) => (
              <div key={i} className="guarantee-item">
                <div className="g-icon">{g.icon}</div>
                <div>
                  <strong>{g.title}</strong>
                  <p>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const LoadingWrap = styled.div`
  background: #000;
  padding: 6rem 4rem;

  .ld-grid {
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }

  .ld-img {
    height: 48rem;
    border-radius: 2rem;
    background: linear-gradient(90deg, #111 25%, #1a1a1a 50%, #111 75%);
    background-size: 400% 100%;
    animation: shimmer 1.5s infinite;
  }

  .ld-info { display: flex; flex-direction: column; gap: 2.4rem; padding-top: 4rem; }

  .ld-line {
    height: 2rem;
    border-radius: 0.4rem;
    background: linear-gradient(90deg, #111 25%, #1a1a1a 50%, #111 75%);
    background-size: 400% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }
`;

const Wrapper = styled.div`
  background: #000;
  min-height: 100vh;

  .breadcrumb-bar {
    background: #0a0a0a;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 1.3rem 4rem;

    .bc-inner {
      max-width: 140rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1.3rem;
    }

    .bc-link {
      color: rgba(255,255,255,0.4);
      text-decoration: none;
      transition: color 0.2s;
      &:hover { color: rgba(255,255,255,0.8); opacity: 1; }
    }

    .bc-sep { color: rgba(255,255,255,0.2); }

    .bc-current {
      color: rgba(255,255,255,0.7);
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 30rem;
    }
  }

  .product-layout {
    max-width: 140rem;
    margin: 0 auto;
    padding: 6rem 4rem 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7rem;
    align-items: flex-start;
  }

  /* Gallery */
  .gallery {
    position: sticky;
    top: 8rem;
  }

  .main-img-box {
    background: #111;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 2.4rem;
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    overflow: hidden;
    margin-bottom: 1.6rem;

    .main-img {
      max-width: 78%;
      max-height: 40rem;
      object-fit: contain;
      transition: transform 0.4s ease;

      &:hover { transform: scale(1.06); }
    }
  }

  .thumbnails {
    display: flex;
    gap: 1.2rem;

    .thumb {
      width: 7.2rem;
      height: 7.2rem;
      background: #111;
      border: 1.5px solid rgba(255,255,255,0.07);
      border-radius: 1.2rem;
      padding: 0.6rem;
      cursor: pointer;
      overflow: hidden;
      transition: border-color 0.2s;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &.active { border-color: #0071e3; }
      &:hover { border-color: rgba(0,113,227,0.5); }
    }
  }

  /* Info Column */
  .info-col {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .product-cat {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #0071e3;
  }

  .product-name {
    font-size: 3.8rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.04em;
    line-height: 1.1;
  }

  .rating-row {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .stars-row {
      display: flex;
      gap: 0.2rem;
      .star { color: rgba(255,255,255,0.15); font-size: 1.7rem; }
      .star.filled { color: #ff9f0a; }
    }

    .review-count {
      font-size: 1.4rem;
      color: #0071e3;
      font-weight: 500;
    }
  }

  .pricing-row {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;

    .price-current {
      font-size: 3.6rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.05em;
    }

    .price-original {
      font-size: 1.8rem;
      color: rgba(255,255,255,0.3);
      text-decoration: line-through;
    }

    .price-badge {
      background: rgba(48,209,88,0.15);
      color: #30d158;
      padding: 0.4rem 1rem;
      border-radius: 2rem;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }

  .product-desc {
    font-size: 1.6rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.5);
    max-width: 50rem;
  }

  /* Color Picker */
  .color-picker {
    .cp-label {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.2rem;

      span:first-child {
        font-size: 1.5rem;
        font-weight: 600;
        color: rgba(255,255,255,0.7);
      }

      .cp-val {
        font-size: 1.3rem;
        color: rgba(255,255,255,0.35);
        background: rgba(255,255,255,0.05);
        padding: 0.3rem 1rem;
        border-radius: 2rem;
        font-weight: 400;
      }
    }

    .cp-options {
      display: flex;
      gap: 1rem;
    }

    .cp-btn {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
      transition: all 0.2s;

      &:hover { transform: scale(1.15); }
      &.active {
        border-color: #0071e3;
        box-shadow: 0 0 0 3px rgba(0,113,227,0.3), inset 0 0 0 1px rgba(255,255,255,0.15);
      }

      .cp-check { font-size: 1.2rem; }
    }
  }

  /* Quantity */
  .qty-row {
    display: flex;
    align-items: center;
    gap: 2rem;

    .qty-label {
      font-size: 1.5rem;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
    }

    .qty-control {
      display: flex;
      align-items: center;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 3rem;
      overflow: hidden;
    }

    .qc-btn {
      width: 4rem;
      height: 4rem;
      border: none;
      background: transparent;
      color: rgba(255,255,255,0.7);
      font-size: 2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      transition: background 0.15s;

      &:hover:not(:disabled) { background: rgba(255,255,255,0.08); color: #fff; }
      &:disabled { opacity: 0.25; cursor: not-allowed; }
    }

    .qc-num {
      min-width: 4rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 700;
      color: #ffffff;
    }

    .stock-tag {
      font-size: 1.3rem;
      color: #30d158;
      font-weight: 500;
    }
  }

  /* CTA */
  .cta-row {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    a { text-decoration: none; }

    .cta-primary {
      padding: 1.5rem 2.4rem;
      background: #0071e3;
      border: none;
      border-radius: 3rem;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: -0.01em;

      &:hover { background: #0077ed; transform: scale(1.02); box-shadow: 0 8px 24px rgba(0,113,227,0.4); }
    }

    .cta-secondary {
      padding: 1.5rem 2.4rem;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 3rem;
      color: rgba(255,255,255,0.85);
      font-size: 1.6rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: -0.01em;

      &:hover { background: rgba(255,255,255,0.12); color: #fff; }
    }

    .wishlist-btn {
      width: 5rem;
      height: 5rem;
      border: 1.5px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      background: transparent;
      color: rgba(255,255,255,0.5);
      font-size: 2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;

      &:hover { border-color: #ff375f; color: #ff375f; background: rgba(255,55,95,0.08); }
    }
  }

  /* Specs */
  .specs-table {
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 1.6rem;
    overflow: hidden;

    .spec-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.4rem 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 1.5rem;

      &:last-child { border-bottom: none; }

      .spec-label { color: rgba(255,255,255,0.4); }
      .spec-val { font-weight: 600; color: rgba(255,255,255,0.8); text-transform: capitalize; }
      .spec-val.green { color: #30d158; }
    }
  }

  /* Guarantees */
  .guarantees {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;

    .guarantee-item {
      background: #111;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 1.4rem;
      padding: 1.6rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;

      .g-icon {
        font-size: 2.2rem;
        color: #0071e3;
        flex-shrink: 0;
      }

      strong {
        font-size: 1.3rem;
        font-weight: 700;
        color: #fff;
        display: block;
        letter-spacing: -0.01em;
      }

      p {
        font-size: 1.2rem;
        color: rgba(255,255,255,0.35);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .product-layout {
      grid-template-columns: 1fr;
      padding: 3rem 2.4rem 6rem;
      gap: 4rem;
    }

    .gallery { position: static; }
    .main-img-box { height: 36rem; }
    .product-name { font-size: 2.8rem; }
    .guarantees { grid-template-columns: 1fr; }
    .qty-row { flex-wrap: wrap; }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .breadcrumb-bar { padding: 1rem 2.4rem; }
    .main-img-box { height: 28rem; }
    .price-current { font-size: 3rem; }
    .cta-row { flex-wrap: wrap; }
    .cta-primary, .cta-secondary { width: 100%; }
  }
`;

export default SingleProduct;