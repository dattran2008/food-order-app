import { Button, Menu, Image, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Header.css';
import Logo from '../assets/images/logo.png';

const PageHeader = () => {
  return (
    <>
      <div className='logo'>
        <Image width='30' src={Logo} alt='Logo' preview={false} />
      </div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ alignItems: 'center' }}>
        <Menu.Item key='menu'>Menu</Menu.Item>
        <Menu.Item key='list'>List</Menu.Item>
        <Menu.Item key='cart' className='cart-item'>
          <Button
            type='default'
            icon={<ShoppingCartOutlined />}
            size='large'
            style={{ border: 'none', background: 'none' }}
          >
            Cart
            <Badge
              count={5}
              offset={[10, -5]}
              style={{
                backgroundColor: '#2db7f5',
              }}
            ></Badge>
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default PageHeader;
