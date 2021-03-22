import React from "react";

export function HomeHeader() {
  return (
    <section className="home-header">
      <img
        className="header-img-desktop"
        src={require("../../assets/img/homepage/hero-bg-desktop.jpg")}
        alt=""
      />
      <img
        className="header-img-mobile"
        src={require("../../assets/img/homepage/hero-bg-mobile.jpg")}
        alt=""
      />

      <div className="container">
        <div className="content">
          <img
            className="logo"
            src={require("../../assets/img/logo.svg")}
            alt=""
          />

          <div className="texsts">
            <p className="main">Exquisite dining since 1989</p>

            <p className="secondary">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>

            <button className="book-btn">BOOK A TABLE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
