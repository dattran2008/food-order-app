import { Button, Badge, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';

//Cart
import CartItem from './item.jsx';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItems = (
    <ul>
      {items.map((item) => {
        console.log('Cart item: ', item);
        return <CartItem key={item.id} item={item} />;
      })}
    </ul>
  );

  return (
    <>
      <Button
        type='default'
        icon={<ShoppingCartOutlined />}
        size='large'
        style={{ border: 'none', background: 'none' }}
        onClick={props.showModal}
      >
        Cart
        <Badge
          count={numberOfCartItems}
          offset={[10, -5]}
          style={{
            backgroundColor: '#2db7f5',
          }}
          showZero
        ></Badge>
      </Button>
      <Modal
        title='Meal'
        visible={props.visible}
        confirmLoading={props.confirmLoading}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        okText='Order'
        okButtonProps={items.length <= 0 && { style: { display: 'none' } }}
        bodyStyle={{ fontSize: '16px' }}
      >
        {cartItems}
        <div style={{ textAlign: 'right' }}>
          <label>Total amount:</label>
          <span style={{ marginLeft: '5px', color: '#fa6400', fontSize: '18px' }}>${cartCtx.amount.toFixed(2)}</span>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
