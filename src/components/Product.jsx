import React from "react";
import ginger from "../assets/images/items/ginger.png";
import nootris from "../assets/images/items/nootris.png";
import vorus from "../assets/images/items/vorus.png";
import Button from "./Button";

export default function Product() {
  return (
    <div className="product">
      <h1 className="product__title title">ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</h1>
      <p className="product__info title">СО СКИДКОЙ -15% ПЕРВЫМ!</p>
      <div className="product__prices">
        <p>750₽</p>
        <p>690₽</p>
      </div>
      <div className="product__items">
        <div className="product__items--item">
          <img src={ginger} alt="" />
          <div className="ginger-info info">
            <p>Содержит</p>
            <p>имбирь</p>
          </div>
        </div>
        <div className="product__items--item">
          <img src={nootris} alt="" />
          <div className="nootris-info info">
            <p>+ Бесплатная доставка</p>
            <p>Специальная цена</p>
          </div>
        </div>
        <div className="product__items--item">
          <img src={vorus} alt="" />
          <div className="vorus-info info">
            <p>Нейтрализует</p>
            <p>вирусы</p>
          </div>
        </div>
      </div>
      <div className="center">
        <Button text={"Оформить заказ!"} />
      </div>
    </div>
  );
}
