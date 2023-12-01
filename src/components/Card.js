// Card.js
import React from "react";
import Button from "./Button";
import Input from "./Input";
import styles from "./Card.module.css";
import { useCardContext } from "../contexts/CardContext";

export default function Card() {
  const ctx = useCardContext();

  const handleInputChange = (field, value) => {
    if (ctx && value !== undefined) {
      switch (field) {
        case "name":
          ctx.handlerChangeName(value);
          break;
        case "price":
          ctx.handlerChangePrice(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.name}>{ctx.name}</div>
        <div className={styles.counter}>
          <Button label="➖" onClick={ctx.handlerMinus} />
          <span className={styles.count}>{ctx.count}</span>
          <Button label="➕" onClick={ctx.handlerPlus} />
        </div>
        <div className={styles.price}>{`$ ${ctx.price}`} each</div>
        <div className={styles.discount}>{`Discount: ${ctx.discount}%`}</div>
        <div className={styles.form}>
          <Input type="text" id="product-name" name="product-name" value={ctx.name} label="Product Name" onChange={(e) => handleInputChange("name", e.target.value)} />
          <Input type="number" id="price" name="price" value={ctx.price} label="Price" onChange={(e) => handleInputChange("price", e.target.value)} />
        </div>
        <div className="total">{ctx.itemTotal()}</div>
        <Button label="Add Product" onClick={ctx.handlerAddProduct} />
      </div>
    </div>
  );
}
