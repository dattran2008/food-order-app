import { Layout } from 'antd';
import 'antd/dist/antd.css';

// Layout
import HeaderContent from './layouts/Header.jsx';
import FooterContent from './layouts/Footer';

// Meals
import Meals from './components/meals/index.jsx';

// Context
import CartProvider from './store/CartProvider.js';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <CartProvider>
      <Layout className='layout'>
        <Header id='menu' style={{ height: '100%' }}>
          <HeaderContent />
        </Header>
        <Content style={{ padding: '100px 50px' }}>
          <Meals />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent />
        </Footer>
      </Layout>
    </CartProvider>
  );
}

export default App;
