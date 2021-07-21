import { Card, Col, Row } from 'antd';
import FormInput from './ItemInput.jsx';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german speciality',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Bun Bo',
    description: 'A vietnamese noodle',
    price: 20.0,
  },
];

const MealItem = (props) => {
  const mealsList = DUMMY_MEALS.map((it, index) => {
    return (
      <Col key={index} span={8}>
        <Card title={it.name} bordered={false}>
          <li>
            <div>{it.description}</div>
            <div>Price: {it.price}</div>
          </li>
          <FormInput id={props.id} />
        </Card>
      </Col>
    );
  });

  return <Row gutter={16}>{mealsList}</Row>;
};

export default MealItem;
