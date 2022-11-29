import React from 'react';

const FoodBox = (props) => {
  const { food } = props;
  const getTotalCalories = () => food.calories * food.servings;
  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} />
      <span>Calories: {food.calories}</span>
      <span>Servings:{food.servings}</span>
      <b>Total Calories: {getTotalCalories()} kcal</b>
      <button>Delete</button>
    </div>
  );
};

export default FoodBox;
