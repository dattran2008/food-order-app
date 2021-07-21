import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Input from '../../ui/Input.jsx';
import classes from './ItemInput.module.css';

const FormInput = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button type='primary' htmlType='submit' icon={<PlusOutlined />}></Button>
    </form>
  );
};

export default FormInput;
