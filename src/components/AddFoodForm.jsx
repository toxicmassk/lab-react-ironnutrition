import React, { useState } from 'react';
// import { Divider, Input, Button } from 'antd';

const AddFoodForm = (props) => {
  const { handleSubmit } = props;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(addFood);
  };
  const [addFood, setAddFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleAddFoodChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target);
    console.log(value, name);
    setAddFood({
      ...addFood,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={addFood.name}
          name="name"
          onChange={handleAddFoodChange}
        />
      </div>
      <div>
        <label>Image</label>
        <input
          type="text"
          value={addFood.image}
          name="image"
          onChange={handleAddFoodChange}
        />
      </div>
      <div>
        <label>Calories</label>
        <input
          type="text"
          value={addFood.calories}
          name="calories"
          onChange={handleAddFoodChange}
        />
      </div>
      <div>
        <label>Servings</label>
        <input
          type="text"
          value={addFood.servings}
          name="servings"
          onChange={handleAddFoodChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFoodForm;
