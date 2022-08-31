import React, { useState, useContext, Fragment } from "react";

import Loading from "components/Loading";

import styles from "./Card.module.scss";
import AppContext from "context";

function Card({
  id,
  imgUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const itemObj = { id, parentId: id, imgUrl, title, price };

  const handlePlus = () => {
    onPlus(itemObj);
  };

  const handleFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {onFavorite && (
            <div className={styles.favorite} onClick={handleFavorite}>
              <img
                width={15}
                src={isFavorite ? "img/heart-liked.svg" : "img/heart.svg"}
                alt="heart"
              />
            </div>
          )}
          <img
            className="content__card-img"
            width={133}
            src={imgUrl}
            alt="hookah"
          />
          <p className={styles.title}>{title}</p>
          <div className={styles.salary}>
            <div className={styles.price}>
              <p>Price:</p>
              <b>{price} &#36;</b>
            </div>
            {onPlus && (
              <button className={styles.btn} onClick={handlePlus}>
                <img
                  width={18}
                  src={isItemAdded(id) ? "img/check.svg" : "img/plus.svg"}
                  alt="plus"
                />
              </button>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Card;
