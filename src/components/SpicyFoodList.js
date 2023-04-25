import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
const[filterBy,setFilterBy]=useState("All");

const foodsToDisplay= foods.filter((food)=>{
  if (filterBy==="All"){
    return true;
  }else{
    return food.cuisine===filterBy;
  }
});

// function to handle the filter change in the selected Dom element
function handleFilterChange(e){
  setFilterBy(e.target.value);
}


// function to add food to the state when a button is clicked
function handleAddFood(){
const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray=[...foods,newFood]
    setFoods(newFoodArray) 
  }


 // removes elements from arrays in state
function handleLiClick(id){


     // updates elements in an array in state 
  const newFoodArray = foods.map(food=> {
    if(food.id === id){
      return {
        ...food,
        heatLevel : food.heatLevel + 1
      };}
      else{
        return food;
      }
  })
    setFoods(newFoodArray)
}


// iterating through the array to give food list
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id}> onClick={()=>handleLiClick(food.id)}
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name = "filter" onChange={handleFilterChange}>
        <option value ="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;





