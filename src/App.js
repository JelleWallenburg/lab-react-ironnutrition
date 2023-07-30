import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import foodsJSON from './foods.json';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [foodsData, setFoodsData] = useState(foodsJSON);

  const filterFoods= (str) =>{
    let filteredFoods;
    if (str==='All'){
      filteredFoods= foodsData;
    } else {
      filteredFoods= foodsData.filter((food)=> food.name.includes(str))
    }
    setFoodsData(filteredFoods);
   }

  return(
    <div>
      <SearchBar filterFoods={filterFoods}/>
      <AddFoodForm foods={foods} setFoods={setFoods} foodsData={foods} setFoodsData={setFoodsData}/>
      <h1>Food List</h1>
      {foodsData.map(food => {
        return(
          <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings
          }} setFoodsData={setFoodsData}/>
        )
      })}     
    </div>
  )
  // return (
  //   <div className="App">
  //           <div>
  //           <p></p>
  //           <img></img>
  //       </div>
  //   </div>
  // );
}

export default App;
