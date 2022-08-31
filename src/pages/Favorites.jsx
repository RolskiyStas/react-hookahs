import { useContext } from "react";

import Card from "components/Card";

import AppContext from "context";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <div className="content">
      <div className="content__header">
        <h1 className="content__title">My favorites</h1>
      </div>
      <div className="content__items">
        {favorites.map((elem, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...elem}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
