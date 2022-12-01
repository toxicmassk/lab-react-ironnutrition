import React from 'react';

const FoodBox = (props) => {
  const { food, handleDelete } = props;
  const getTotalCalories = () => food.calories * food.servings;

  const handleOnClick = () => {
    handleDelete(food.name);
  };
  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} width={200} />
      <span>Calories: {food.calories}</span>
      <span>Servings:{food.servings}</span>
      <b>Total Calories: {getTotalCalories()} kcal</b>
      <button onClick={handleOnClick}>Delete</button>
    </div>
  );
};

export default FoodBox;
