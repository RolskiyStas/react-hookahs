import React, { useState, Fragment } from "react";
import axios from "axios";

import Info from "./Info";
import { useCart } from "hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClick, onRemove, items = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrdet = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63089e9746372013f5821856.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://63089e9746372013f5821856.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Error when creating an order");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="cart__title">
          Cart <img onClick={onClick} width={22} src="img/x.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <Fragment>
            <div className="cart__items">
              {items.map((obj) => (
                <div className="cart__item" key={obj.id}>
                  <img width={70} src={obj.imgUrl} alt="Hookahs" />
                  <div className="cart__content">
                    <p>{obj.title}</p>
                    <b>{obj.price} &#36;</b>
                  </div>
                  <button
                    className="cart__btn"
                    onClick={() => onRemove(obj.id)}
                  >
                    <img width={18} src="img/x.svg" alt="x" />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart__total">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} &#36;</b>
                </li>
                <li>
                  <span>Taxes 7%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 7} &#36;</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrdet}
                className="cart__total-btn btn"
              >
                To order
                <img width={20} src="img/right-arrow.svg" alt="arrow" />
              </button>
            </div>
          </Fragment>
        ) : (
          <Info
            title={isOrderComplete ? "The order is placed" : "Empty basket"}
            image={isOrderComplete ? "img/order.png" : "img/open-box.png"}
            description={
              isOrderComplete
                ? `Your order #${orderId} will be sent by a courier company`
                : "Add an order to checkout"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
