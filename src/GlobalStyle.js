import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: #000000;
  color: #1d1d1f;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 6rem; /* offset for fixed header */
}

body::-webkit-scrollbar {
  width: 6px;
}

body::-webkit-scrollbar-track {
  background: #0a0a0a;
}

body::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

h1, h2, h3, h4 {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
}

p, button, span, li {
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
}

.grid {
  display: grid;
  gap: 2.4rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: repeat(4, 1fr);
}

.grid-five-column {
  grid-template-columns: repeat(5, 1fr);
}

.grid-three-column-footer {
  grid-template-columns: 1fr 0.1fr 1fr;
}

.grid-five-column-footer {
  grid-template-columns: 1.5fr 1fr 0.8fr 0.8fr 0.8fr;
}

.common-heading {
  font-size: 4.4rem;
  color: #1d1d1f;
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 1.2rem;
}

.intro-data {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #0071e3;
  margin-bottom: 0.8rem;
  display: block;
}

.page_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  background: #000;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  flex-direction: column;
  gap: 1.6rem;
}

input, textarea {
  max-width: 50rem;
  color: #1d1d1f;
  padding: 1.4rem 1.8rem;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  font-size: 1.5rem;
  background: #f5f5f7;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  font-family: inherit;
}

input:focus, textarea:focus {
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.12);
  background: #ffffff;
}

input[type="submit"] {
  max-width: 16rem;
  margin-top: 2rem;
  background: #0071e3;
  color: #ffffff;
  border: none;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  padding: 1.4rem 2.4rem;
  transition: background 0.2s, transform 0.1s;
}

input[type="submit"]:hover {
  background: #0077ed;
  transform: scale(1.02);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .container {
    padding: 0 3.2rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  html {
    font-size: 56%;
  }

  .grid {
    gap: 1.6rem;
  }

  .grid-two-column,
  .grid-three-column,
  .grid-four-column {
    grid-template-columns: 1fr;
  }

  .common-heading {
    font-size: 3.2rem;
  }
}
`;