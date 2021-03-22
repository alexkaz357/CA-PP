import React from "react";
import { ItemPreview } from "./ItemPreview";

export function ItemList({ items }) {
  return (
    <section className="item-list all-items">
      {items.map((item) => (
        <ItemPreview key={item.id} item={item} />
      ))}
    </section>
  );
}
