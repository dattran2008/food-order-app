import MealIntro from './intro/index.jsx';
import MealList from './list/index.jsx';

const Meals = () => {
  return (
    <>
      <MealIntro />
      <div className='site-layout-content'>
        <MealList />
      </div>
    </>
  );
};

export default Meals;
