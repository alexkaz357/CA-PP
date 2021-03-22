import React from "react";

export function ItemPreview({ item }) {
  return (
    <section className="item-preview">
      <div className="item">
        <img src={item.imgUrl} alt="" />
        <div className="line"></div>
        <div className="texsts">
          <p className="title">{item.title}</p>
          <p className="desc">{item.desc}</p>
        </div>
      </div>
    </section>
  );
}
