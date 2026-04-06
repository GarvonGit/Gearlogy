import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: #ffffff;
  border: none;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  white-space: nowrap;
  text-decoration: none;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background-color: #0077ed;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }

  &.btn-outline {
    background-color: transparent;
    border: 1.5px solid ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.btn};

    a {
      color: ${({ theme }) => theme.colors.btn};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.btn};
      color: #ffffff;
      a {
        color: #ffffff;
      }
    }
  }

  &.btn-danger {
    background-color: #ff375f;
    &:hover {
      background-color: #e0284f;
      box-shadow: 0 4px 12px rgba(255, 55, 95, 0.3);
    }
  }

  &.btn-ghost {
    background-color: rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.colors.heading};

    a {
      color: ${({ theme }) => theme.colors.heading};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      box-shadow: none;
    }
  }
`;