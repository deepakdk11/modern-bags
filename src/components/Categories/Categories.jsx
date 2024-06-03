import React, { useState } from "react";
import { categories } from "../../assets/assets.js";
import "./Categories.css";

const Categories = ({item, setItem}) => {

  return (
    <div className="container" id="container">
      <h1>Explore Categories</h1>
      <p>
        Discover totes, crossbody bags, backpacks, handbags, duffel bags, laptop
        bags, travel bags, messenger bags, and eco-friendly options. Find your
        perfect bag today!
      </p>
      <div className="mapList">
        {categories.map((lists, index) => {
          return (
            <div onClick={() => setItem(prev => prev === lists.categoryName ? "All" : lists.categoryName)} key={index} className="smallContainer">
              <img src={lists.categoryImg} alt={lists.categoryName} className={item === lists.categoryName ? "active" : ""} />
              <p >{lists.categoryName}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Categories;
