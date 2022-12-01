import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import foods from './foods.json';
import { useState } from 'react';
import Search from './components/Search';

function App() {
  const [foodsData, setFoodsData] = useState(foods);
  const [updatedFoodsData, setUpdatedFoodsData] = useState(foodsData);

  const handleSubmit = (state) => {
    setFoodsData([...foodsData, state]);
    setUpdatedFoodsData([...updatedFoodsData, state]);
  };

  const handleSearch = (state) => {
    let searchResult = foodsData.filter((eachFood) => {
      //return eachFood.name.toLowerCase().startsWith(state.toLowerCase());
      return eachFood.name.toLowerCase().includes(state.toLowerCase());
    });
    console.log(searchResult);
    setUpdatedFoodsData(searchResult);
  };

  const handleDelete = (foodName) => {
    // prop drilling
    let deleteResult = foodsData.filter((eachFood) => {
      return eachFood.name.toLowerCase() !== foodName.toLowerCase();
    });
    console.log(deleteResult);
    setUpdatedFoodsData(deleteResult);
    setFoodsData(deleteResult);
  };
  return (
    <div className="App">
      <FoodList foodsData={updatedFoodsData} handleDelete={handleDelete} />
      <AddFoodForm handleSubmit={handleSubmit} />
      <Search handleSearch={handleSearch} />
    </div>
  );
}

export default App;
