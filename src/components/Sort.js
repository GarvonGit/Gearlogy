import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

  return (
    <Wrapper>
      <div className="results-count">
        <span className="count">{filter_products.length}</span>
        <span className="label">results</span>
      </div>

      <div className="sort-controls">
        <div className="view-toggle">
          <button
            className={grid_view ? "view-btn active" : "view-btn"}
            onClick={setGridView}
            title="Grid view"
          >
            <BsFillGridFill />
          </button>
          <button
            className={!grid_view ? "view-btn active" : "view-btn"}
            onClick={setListView}
            title="List view"
          >
            <BsList />
          </button>
        </div>

        <select name="sort" id="sort" className="sort-select" onChange={sorting}>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
          <option value="a-z">Name: A–Z</option>
          <option value="z-a">Name: Z–A</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  background: #111111;
  border-radius: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.06);

  .results-count {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;

    .count {
      font-size: 2.4rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.04em;
    }

    .label {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  .sort-controls {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .view-toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.8rem;
    padding: 0.3rem;
    gap: 0.2rem;

    .view-btn {
      width: 3.4rem;
      height: 3.4rem;
      border: none;
      background: transparent;
      border-radius: 0.6rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.4);
      transition: all 0.15s;

      &:hover { color: rgba(255, 255, 255, 0.8); }

      &.active {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
      }
    }
  }

  .sort-select {
    padding: 0.9rem 1.4rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.05);
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    outline: none;

    option {
      background: #1a1a1a;
      color: #fff;
    }

    &:focus { border-color: #0071e3; }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-wrap: wrap;
    gap: 1.2rem;
  }
`;

export default Sort;