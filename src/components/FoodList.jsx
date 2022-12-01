import React from 'react';
import FoodBox from './FoodBox';

const FoodList = (props) => {
  const { foodsData, handleDelete } = props;
  return (
    <div>
      <p>Food List</p>
      {foodsData.map((food, index) => {
        return <FoodBox food={food} key={index} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default FoodList;
