import React, { useContext } from "react";

import Card from "components/Card";

import AppContext from "context";

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  isLoading,
}) {
  const { items, onAddToCart } = useContext(AppContext);

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(4)] : filtredItems).map((elem, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...elem}
      />
    ));
  };
  return (
    <div className="content">
      <div className="content__header">
        <h1 className="content__title">
          {searchValue ? `Search by request: "${searchValue}"` : "All hookahs"}
        </h1>
        <div className="content__search">
          <img
            className="content__search-img"
            width={15}
            src="img/search.svg"
            alt="Search"
          />
          {searchValue && (
            <img
              className="content__search-clear"
              width={15}
              src="img/x.svg"
              alt="Clear"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            className="content__search-input"
            type="text"
            placeholder="Search..."
            onChange={onChangeSearchInput}
            value={searchValue}
          />
        </div>
      </div>
      <div className="content__items">{renderItems()}</div>
    </div>
  );
}

export default Home;
