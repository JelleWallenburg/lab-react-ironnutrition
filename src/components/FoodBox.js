import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {food, setFoodsData} = props;

    const deleteByName = (name) =>
    setFoodsData(oldValue => {
        return oldValue.filter(food => food.name !== name)
    })
  return (
    <Col>
      <Card title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img  src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.servings*food.calories}</b> kcal
        </p>
        <Button type="primary" onClick={()=> deleteByName(food.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;