import { Card } from 'antd';
import Cover from '../../assets/images/logo.png';

const Intro = () => {
  return (
    <Card
      style={{ width: 500, margin: '0 auto 50px', backgroundColor: '#323132', color: '#fff' }}
      title={<b>Delicious food, Delivered to you</b>}
      headStyle={{ border: 'none', textAlign: 'center', color: '#fff', fontSize: 'large' }}
    >
      <p>
        Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at
        home
      </p>
      <p>All our meals are cooked with high-quality ingredients, just in time and of course by experienced chefs!</p>
    </Card>
  );
};

export default Intro;
