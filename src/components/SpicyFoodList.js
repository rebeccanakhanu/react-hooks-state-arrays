import React, { useState } from "react";

function SpicyFoodList() {
  const [spicyFoods, setSpicyFoods] = useState([]);

  function addNewFood() {
    const newFood = {
      id: spicyFoods.length,
      name: `Spicy Food #${spicyFoods.length + 1}`,
      cuisine: "Unknown",
      heatLevel: Math.floor(Math.random() * 10) + 1
    };

    // create a new array with the new food added at the end
    const newFoods = [...spicyFoods, newFood];

    // set the state with the new array of foods
    setSpicyFoods(newFoods);
  }

  return (
    <div>
      <button onClick={addNewFood}>Add New Spicy Food</button>
      <ul>
        {spicyFoods.map(food => (
          <li key={food.id}>
            {food.name} ({food.cuisine}, Heat Level: {food.heatLevel})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpicyFoodList;



