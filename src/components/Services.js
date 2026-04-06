import React from "react";
import styled from "styled-components";
import { TbTruckDelivery, TbRefresh } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { HiOutlineSupport } from "react-icons/hi";

const services = [
  {
    icon: <TbTruckDelivery />,
    title: "Free & Fast Delivery",
    description: "Free shipping on all orders above ₹499. Delivered within 2-3 business days.",
    color: "#0071e3",
    bg: "#e8f1ff",
  },
  {
    icon: <TbRefresh />,
    title: "Easy Returns",
    description: "30-day hassle-free return policy. No questions asked.",
    color: "#30d158",
    bg: "#e3f9ea",
  },
  {
    icon: <MdSecurity />,
    title: "2 Year Warranty",
    description: "All products come with manufacturer warranty and Gearlogy guarantee.",
    color: "#bf5af2",
    bg: "#f5e8ff",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Secure Payments",
    description: "256-bit SSL encryption. Pay with cards, UPI, or wallets safely.",
    color: "#ff9f0a",
    bg: "#fff3e0",
  },
  {
    icon: <HiOutlineSupport />,
    title: "24/7 Support",
    description: "Our expert team is always here to help you. Chat, call, or email.",
    color: "#ff375f",
    bg: "#ffe5ea",
  },
];

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section-header">
          <p className="intro-data">Why Gearlogy</p>
          <h2 className="common-heading">Built Around You</h2>
          <p className="section-subtitle">
            We obsess over every detail so you don't have to worry about a thing
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-icon-wrapper"
                style={{ backgroundColor: service.bg, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  background: #ffffff;

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

  .services-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }

  .service-card {
    background: #f5f5f7;
    border-radius: 2rem;
    padding: 3.2rem 2.4rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
      background: #ffffff;
    }
  }

  .service-icon-wrapper {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    font-size: 2.8rem;
    transition: transform 0.3s ease;

    .service-card:hover & {
      transform: scale(1.1);
    }
  }

  .service-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }

  .service-description {
    font-size: 1.4rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 6rem 0;

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Services;