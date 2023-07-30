import {Input} from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
    const {foodsData, setFoodsData} = props;

    const [name, setName] =useState("");
    const [image, setImage] =useState("");
    const [calories, setCalories]=useState("");
    const [servings, setServings]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newFood = {
          name,
          image,
          calories,
          servings
        }
        const updateFoodList= [...foodsData,newFood]
        console.log(updateFoodList)
        setFoodsData(updateFoodList)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return(
        <div>
            <h1>Add Food</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <Input type= 'text' name= 'name' value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <label>Image</label>
                <Input type= 'text' name= 'image' value={image} onChange={(e) => {
                    setImage(e.target.value)
                }}/>
                <label>Calories</label>
                <Input type= 'text' name= 'calories' value={calories} onChange={(e) => {
                    setCalories(e.target.value)
                }}/>
                <label>Servings</label>
                <Input type= 'text' name= 'servings' value={servings} onChange={(e) => {
                    setServings(e.target.value)
                }}/>
                <button type= "submit">Add Food</button>
            </form>
        </div>
    )
}

export default AddFoodForm;