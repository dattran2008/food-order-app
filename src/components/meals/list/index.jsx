import { Row } from 'antd';
import MealItem from '../item/index.jsx';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Beef steak',
    description: 'A america speciality',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Bun Bo',
    description: 'A vietnamese noodle',
    price: 20.0,
  },
];

const Meals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />;
  });

  return <Row gutter={16}>{mealsList}</Row>;
};

export default Meals;
