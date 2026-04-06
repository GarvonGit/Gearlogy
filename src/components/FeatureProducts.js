import React from "react";
import { useProductContext } from "../context/productcontext";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <LoadingWrapper>
        <div className="container">
          <div className="loading-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-image" />
                <div className="skeleton-text" />
                <div className="skeleton-text short" />
              </div>
            ))}
          </div>
        </div>
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="section-header">
          <p className="intro-data">Our Selection</p>
          <h2 className="common-heading">Featured Products</h2>
          <p className="section-subtitle">
            Handpicked premium electronics for every lifestyle
          </p>
        </div>
        <div className="products-grid">
          {featureProducts.slice(0, 8).map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const LoadingWrapper = styled.section`
  padding: 8rem 0;
  background: #f5f5f7;

  .loading-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }

  .skeleton-card {
    background: #fff;
    border-radius: 1.6rem;
    overflow: hidden;
  }

  .skeleton-image {
    width: 100%;
    height: 20rem;
    background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
    background-size: 400% 100%;
    animation: shimmer 1.5s infinite;
  }

  .skeleton-text {
    height: 1.4rem;
    margin: 1.6rem 1.6rem 0.8rem;
    border-radius: 0.4rem;
    background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
    background-size: 400% 100%;
    animation: shimmer 1.5s infinite;

    &.short {
      width: 50%;
    }
  }

  @keyframes shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }
`;

const Wrapper = styled.section`
  padding: 10rem 0;
  background: #f5f5f7;

  .section-header {
    text-align: center;
    margin-bottom: 5.6rem;
  }

  .section-subtitle {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 1.2rem;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 0;

    .products-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
    }
  }
`;

export default FeatureProduct;