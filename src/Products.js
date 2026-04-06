import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";

const categoryPills = [
  "All", "Electronics", "Computers", "Smartphones", "Audio", "Cameras", "Gaming"
];

const Products = () => {
  const { filters, updateFilterValue } = useFilterContext();

  return (
    <Wrapper>
      {/* ── HERO ── */}
      <div className="products-hero">
        <div className="hero-content">
          <p className="eyebrow">Everything you need</p>
          <h1>The Shop.</h1>
          <p className="subtitle">
            Explore our curated collection of premium electronics — phones, laptops,
            tablets, audio, and more.
          </p>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="products-body">
        <aside className="sidebar">
          <FilterSection />
        </aside>

        <section className="products-main">
          <div className="sort-wrapper">
            <Sort />
          </div>
          <ProductList />
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #000000;
  min-height: 100vh;

  .products-hero {
    background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
    padding: 7rem 4rem 5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .hero-content {
      max-width: 120rem;
      margin: 0 auto;
    }

    .eyebrow {
      font-size: 1.3rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #0071e3;
      margin-bottom: 1.6rem;
    }

    h1 {
      font-size: 6.4rem;
      font-weight: 700;
      letter-spacing: -0.05em;
      color: #ffffff;
      margin-bottom: 1.6rem;
    }

    .subtitle {
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.5);
      max-width: 60rem;
      line-height: 1.6;
    }
  }

  .products-body {
    max-width: 140rem;
    margin: 0 auto;
    padding: 4rem 4rem 8rem;
    display: grid;
    grid-template-columns: 28rem 1fr;
    gap: 4rem;
    align-items: flex-start;
  }

  .sidebar {
    position: sticky;
    top: 8rem;
  }

  .products-main {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .sort-wrapper {
    background: #111111;
    border-radius: 1.4rem;
    overflow: hidden;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .products-body {
      grid-template-columns: 1fr;
      padding: 3rem 2.4rem 6rem;
    }

    .sidebar {
      position: static;
    }

    .products-hero {
      padding: 5rem 2.4rem 3.5rem;

      h1 { font-size: 4.4rem; }
    }
  }
`;

export default Products;