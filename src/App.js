import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [foodsData, setFoodsData] = useState(foods);

  const handleSubmit = (state) => {
    setFoodsData([...foodsData, state]);
  };
  return (
    <div className="App">
      <FoodList foodsData={foodsData} />
      <AddFoodForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
