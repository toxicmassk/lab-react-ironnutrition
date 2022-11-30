import React from 'react';
import FoodBox from './FoodBox';

const FoodList = (props) => {
  const { foodsData } = props;
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
