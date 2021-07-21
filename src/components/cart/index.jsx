import { Button, Badge, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

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
        onOk={props.handleOk}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
        okText='Order'
      >
        <p>Total amount: </p>
      </Modal>
    </>
  );
};

export default Cart;
