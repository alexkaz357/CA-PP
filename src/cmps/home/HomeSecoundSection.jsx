import React, { useEffect, useState } from "react";
import { service } from "../../services/service";
import { ItemList } from "./ItemList";

export function HomeSecoundSection() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(service.query());
  }, []);

  if (!items) return "Loading...";

  return (
    <section className="home-secound-section">
      <div className="container">
        <div className="content">
          <img
            className="icon"
            src={require("../../assets/img/patterns/pattern-divide.svg")}
            alt=""
          />

          <div className="section-texts">
            <p className="header-text">A few highlights from our menu</p>
            <p className="content-text">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>

          <ItemList items={items} />
        </div>
      </div>
    </section>
  );
}
