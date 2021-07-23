import { Button, Badge, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
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
        confirmLoading={props.confirmLoading}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        okText='Order'
        okButtonProps={items.length <= 0 && { style: { display: 'none' } }}
      >
        <p>Total amount: {cartCtx.amount.toFixed(2)}</p>
      </Modal>
    </>
  );
};

export default Cart;
