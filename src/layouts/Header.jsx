import { useState } from 'react';
import { Menu, Image } from 'antd';
import './Header.css';

import Logo from '../assets/images/logo.png';

//Cart Item
import CartItem from '../components/cart/index.jsx';

const PageHeader = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <div className='logo'>
        <Image width='30' src={Logo} alt='Logo' preview={false} />
      </div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ alignItems: 'center' }}>
        <Menu.Item key='menu'>Menu</Menu.Item>
        <Menu.Item key='list'>List</Menu.Item>
        <Menu.Item key='cart' className='cart-item'>
          <CartItem
            visible={visible}
            showModal={showModal}
            confirmLoading={confirmLoading}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default PageHeader;
