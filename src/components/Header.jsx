import React from "react";
import Basket from "../assets/icons/Basket";
import Logo from "../assets/icons/Logo";
import Burger from "./Burger";
import Nabvar from "./Nabvar";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo />
        <Nabvar />
        <div className="basket">
          <Basket />
          <div className="circule">1</div>
        </div>
        <Burger />
      </div>
    </div>
  );
}
