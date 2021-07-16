import { Layout } from 'antd';
import 'antd/dist/antd.css';

// Layout
import HeaderContent from './layouts/Header.jsx';
import FooterContent from './layouts/Footer';

// Meals
import MealIntro from './components/meals/index.jsx';
import MealList from './components/meals/item/index.jsx';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header id='menu' style={{ height: '100%' }}>
        <HeaderContent />
      </Header>
      <Content style={{ padding: '100px 50px' }}>
        <MealIntro />
        <div className='site-layout-content'>
          <MealList />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default App;
