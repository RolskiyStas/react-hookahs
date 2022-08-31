import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "hooks/useCart";

function Header({ onClickCart }) {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>one smokes</h3>
            <p>Hookah online store</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={onClickCart}>
          <img id="cart" width={22} src="img/cart.svg" alt="cart" />
          <span>{totalPrice} USD</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} src="img/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} src="img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
