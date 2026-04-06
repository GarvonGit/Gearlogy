import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((curElem, index) => {
        const { id, name, image, price, description, category, colors, stars, stock } = curElem;
        const imgUrl =
          image && image.length > 0 && image[0]?.url
            ? image[0].url
            : "https://placehold.co/400x400/1a1a1a/555?text=Product";

        return (
          <motion.div 
            className="list-item" 
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="list-image-box">
              <img
                src={imgUrl}
                alt={name}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://placehold.co/400x400/1a1a1a/555?text=Product";
                }}
              />
            </div>

            <div className="list-content">
              <div className="list-top">
                <span className="list-cat">{category}</span>
                <h3 className="list-name">{name}</h3>
                <div className="list-rating">
                   {[1,2,3,4,5].map(s => (
                     <span key={s} className={s <= Math.round(stars) ? "star filled" : "star"}>★</span>
                   ))}
                   <span className="rating-val">{parseFloat(stars).toFixed(1)}</span>
                </div>
              </div>

              <p className="list-desc">
                {description?.length > 160 ? description.slice(0, 160) + "..." : description}
              </p>

              <div className="list-meta">
                {stock > 0 && (
                  <span className="stock-label">
                    <FiCheckCircle style={{ marginRight: "0.4rem" }} /> In Stock
                  </span>
                )}
                {colors && colors.length > 0 && (
                  <div className="list-colors">
                    {colors.map((c, i) => (
                      <span key={i} className="color-dot" style={{ background: c }} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="list-actions">
              <div className="price-wrap">
                 <span className="price"><FormatPrice price={price} /></span>
                 <span className="disclaimer">Excl. taxes</span>
              </div>
              <NavLink to={`/singleproduct/${id}`} className="view-link">
                <button className="view-btn">
                  View Detail <FiArrowRight />
                </button>
              </NavLink>
            </div>
          </motion.div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .list-item {
    display: grid;
    grid-template-columns: 24rem 1fr 24rem;
    background: #111111;
    border-radius: 2.4rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);

    &:hover {
      border-color: rgba(0, 113, 227, 0.4);
      background: #161616;
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }
  }

  .list-image-box {
    background: #1a1a1a;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.04);
    
    img {
      width: 100%;
      height: 18rem;
      object-fit: contain;
      transition: transform 0.4s ease;
    }
  }

  .list-item:hover .list-image-box img {
    transform: scale(1.08);
  }

  .list-content {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;
  }

  .list-cat {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #42a5f5;
    margin-bottom: 0.8rem;
    display: block;
  }

  .list-name {
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 0.8rem;
  }

  .list-rating {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    .star { color: rgba(255,255,255,0.1); font-size: 1.6rem; }
    .star.filled { color: #ff9f0a; }
    .rating-val { font-size: 1.4rem; color: rgba(255,255,255,0.4); margin-left: 0.4rem; font-weight: 600; }
  }

  .list-desc {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.6;
    font-weight: 400;
  }

  .list-meta {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  .stock-label {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
    color: #30d158;
  }

  .list-colors {
    display: flex;
    gap: 0.6rem;
    .color-dot { width: 1.2rem; height: 1.2rem; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); }
  }

  .list-actions {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.02);
    border-left: 1px solid rgba(255, 255, 255, 0.04);
  }

  .price-wrap {
    text-align: center;
    .price { font-size: 2.8rem; font-weight: 700; color: #fff; display: block; letter-spacing: -0.04em; }
    .disclaimer { font-size: 1.2rem; color: rgba(255,255,255,0.3); }
  }

  .view-btn {
    padding: 1.2rem 2.4rem;
    background: #0071e3;
    color: #fff;
    border: none;
    border-radius: 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    &:hover { background: #0077ed; transform: scale(1.05); }
  }

  @media (max-width: 1100px) {
    .list-item { grid-template-columns: 20rem 1fr; }
    .list-actions { grid-column: 1 / -1; border-left: none; border-top: 1px solid rgba(255,255,255,0.04); flex-direction: row; justify-content: space-between; }
  }

  @media (max-width: 768px) {
    .list-item { grid-template-columns: 1fr; }
    .list-image-box { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.04); }
  }
`;

export default ListView;