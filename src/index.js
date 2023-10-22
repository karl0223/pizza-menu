import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Fast React Pizza Co. 2020</p>
    </footer>
  );
};

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h1>Pizza</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
