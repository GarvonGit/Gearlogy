import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FiCheck } from "react-icons/fi";
import FormatPrice from "../Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);
    if (attr === "colors") newVal = newVal.flat();
    return ["all", ...new Set(newVal)];
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="clear-btn" onClick={clearFilters}>Clear All</button>
      </div>

      {/* Search */}
      <div className="filter-group">
        <label className="filter-label">Search</label>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search products..."
            value={text}
            onChange={updateFilterValue}
            className="search-input"
          />
        </form>
      </div>

      {/* Category */}
      <div className="filter-group">
        <label className="filter-label">Category</label>
        <div className="category-list">
          {categoryData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              className={`cat-btn ${curElem === category ? "active" : ""}`}
              onClick={updateFilterValue}
            >
              <span className="indicator" />
              {curElem}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="filter-group">
        <label className="filter-label">Brand</label>
        <select
          name="company"
          className="brand-select"
          onChange={updateFilterValue}
        >
          {companyData.map((curElem, index) => (
            <option key={index} value={curElem} name="company">
              {curElem}
            </option>
          ))}
        </select>
      </div>

      {/* Colors */}
      <div className="filter-group">
        <label className="filter-label">Color</label>
        <div className="colors-row">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className={`color-all ${color === "all" ? "active" : ""}`}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={`color-swatch ${color === curColor ? "active" : ""}`}
                onClick={updateFilterValue}
                title={curColor}
              >
                {color === curColor && (
                  <FiCheck
                    style={{
                      color: curColor === "#ffffff" || curColor === "#f5f5f7" ? "#000" : "#fff",
                      fontSize: "1.2rem",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="filter-group">
        <div className="price-header">
          <label className="filter-label">Max Price</label>
          <span className="price-val"><FormatPrice price={price} /></span>
        </div>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
          className="price-slider"
        />
        <div className="price-extremes">
          <span><FormatPrice price={minPrice} /></span>
          <span><FormatPrice price={maxPrice} /></span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #111111;
  border-radius: 2rem;
  padding: 2.4rem;
  border: 1px solid rgba(255, 255, 255, 0.06);

  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: 0.4rem;

    h3 {
      font-size: 1.7rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .clear-btn {
      background: none;
      border: none;
      color: #0071e3;
      font-size: 1.3rem;
      font-weight: 500;
      cursor: pointer;
      padding: 0;

      &:hover { opacity: 0.7; }
    }
  }

  .filter-group {
    padding: 1.8rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    &:last-child { border-bottom: none; }
  }

  .filter-label {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 1.2rem;
  }

  .search-input {
    width: 100%;
    max-width: 100%;
    padding: 1rem 1.4rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    color: #ffffff;
    font-size: 1.4rem;

    &::placeholder { color: rgba(255, 255, 255, 0.25); }
    &:focus {
      border-color: #0071e3;
      box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
      background: rgba(255, 255, 255, 0.08);
    }
  }

  .category-list {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .cat-btn {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.9rem 1.2rem;
      background: transparent;
      border: none;
      border-radius: 1rem;
      cursor: pointer;
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.55);
      text-transform: capitalize;
      text-align: left;
      transition: all 0.15s;

      .indicator {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        flex-shrink: 0;
        transition: background 0.2s;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.9);
        .indicator { background: #0071e3; }
      }

      &.active {
        background: rgba(0, 113, 227, 0.12);
        color: #0071e3;
        font-weight: 600;
        .indicator { background: #0071e3; }
      }
    }
  }

  .brand-select {
    width: 100%;
    padding: 1rem 1.2rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.4rem;
    cursor: pointer;
    outline: none;
    text-transform: capitalize;

    option {
      background: #1a1a1a;
      color: #fff;
    }

    &:focus { border-color: #0071e3; }
  }

  .colors-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    align-items: center;

    .color-all {
      padding: 0.5rem 1.2rem;
      border-radius: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: transparent;
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.3rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;

      &.active {
        border-color: #0071e3;
        color: #0071e3;
        background: rgba(0, 113, 227, 0.1);
        font-weight: 600;
      }
    }

    .color-swatch {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
      transition: all 0.2s;

      &:hover { transform: scale(1.15); }
      &.active {
        border-color: #0071e3;
        box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.3), inset 0 0 0 1px rgba(255,255,255,0.15);
      }
    }
  }

  .price-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;

    .price-val {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.03em;
    }
  }

  .price-slider {
    width: 100%;
    max-width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 3px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 2px;
    outline: none;
    border: none;
    box-shadow: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      background: #0071e3;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 113, 227, 0.5);
      transition: transform 0.15s;

      &:hover { transform: scale(1.2); }
    }

    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      background: #0071e3;
      border-radius: 50%;
      border: none;
      cursor: pointer;
    }
  }

  .price-extremes {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default FilterSection;