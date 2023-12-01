import React from "react";

import styles from "./ViewList.module.css";

export default function ViewList({ list, subTotal, totalAfterDiscount }) {

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>${item.price}</td>
              <td>{item.discount}</td>
              <td>${item.itemTotal}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Before Discount:</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Grand Total (After Discount):</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${totalAfterDiscount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
