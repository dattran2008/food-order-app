import { useState } from 'react';
import { Card, Col, Row, Form, Input, Button } from 'antd';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german speciality',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Bun Bo',
    description: 'A vietnamese noodle',
    price: 20.0,
  },
];

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '0', 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  return (
    <span>
      <Input
        type='text'
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      />
    </span>
  );
};

const FormInput = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name='customized_form_controls'
      layout='inline'
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item
        name='price'
        label='Price'
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

const MealItem = () => {
  const mealsList = DUMMY_MEALS.map((it, index) => {
    return (
      <Col span={8}>
        <Card title={it.name} bordered={false}>
          <ul>
            <li key={index}>
              <div>{it.description}</div>
              <div>{it.price}</div>
            </li>
            <FormInput />
          </ul>
        </Card>
      </Col>
    );
  });

  return <Row gutter={16}>{mealsList}</Row>;
};

export default MealItem;
