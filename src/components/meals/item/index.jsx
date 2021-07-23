import { useContext } from 'react';
import { Card, Col } from 'antd';

// Form Input
import MealItemForm from '../item/ItemForm.jsx';

//Context
import CartContext from '../../../store/CartContext.js';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Col span={8}>
      <Card title={props.name} bordered={false}>
        <li>
          <div>{props.description}</div>
          <div>Price: {props.price.toFixed(2)}</div>
        </li>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </Card>
    </Col>
  );
};
export default MealItem;
