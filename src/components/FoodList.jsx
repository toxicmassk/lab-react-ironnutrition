import React, { useState } from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';

const FoodList = () => {
  const [foodsData, setFoodsData] = useState(foods);
  return (
    <div>
      <p>Food List</p>
      {foodsData.map((food, index) => {
        return <FoodBox food={food} key={index} />;
      })}
    </div>
  );
};

export default FoodList;
