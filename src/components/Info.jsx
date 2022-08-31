import React, { useContext } from "react";

import AppContext from "context";

function Info({ title, image, description }) {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cart__empty">
      <img className="cart__empty-img" width={120} src={image} alt="box" />
      <h2 className="cart__empty-title">{title}</h2>
      <p className="cart__empty-text">{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className="btn cart__empty-btn "
      >
        <img width={18} src="img/left-arrow.svg" alt="arrow" />
        Turn back
      </button>
    </div>
  );
}

export default Info;
