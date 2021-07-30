import { useState } from 'react';
import { Button, List, Image, InputNumber, Badge } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const CartItem = (props) => {
  const [addVal, setAddVal] = useState(props.item.amount);
  const newArr = [];
  newArr.push(props.item);

  const listItem = (
    <List
      itemLayout='vertical'
      size='large'
      dataSource={newArr}
      renderItem={(item) => {
        return (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Image
                  width={50}
                  src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                  preview={false}
                />
              }
              title={
                <div>
                  <span>{item.name}</span>
                  <Badge
                    count={`x${item.amount}`}
                    offset={[10, -5]}
                    style={{ backgroundColor: '#52c41a', fontWeight: 'bold' }}
                  ></Badge>
                </div>
              }
            />
            <div style={{ display: 'flex' }}>
              <Button
                size='small'
                htmlType='button'
                icon={<MinusOutlined />}
                onClick={() => props.removeCartItem(item.id)}
              ></Button>
              <InputNumber
                size='small'
                min={1}
                max={99}
                defaultValue={1}
                style={{ margin: '0 5px' }}
                onChange={(val) => {
                  item = { ...item, amount: val };
                  setAddVal(val);
                }}
                onStep={(val, info) => {
                  if (info.type === 'up') {
                    const addItem = { ...item, amount: info.offset };
                    props.addCartItem(addItem);
                  } else {
                    props.removeCartItem(item.id);
                  }
                }}
              />
              <Button
                size='small'
                htmlType='button'
                icon={<PlusOutlined />}
                onClick={() => {
                  const addItem = { ...item, amount: addVal };
                  props.addCartItem(addItem);
                }}
              ></Button>
              <div style={{ marginLeft: 'auto', fontSize: '16px', fontWeight: 600 }}>
                <label>Price:</label>
                <span style={{ marginLeft: '5px' }}>${item.price}</span>
              </div>
            </div>
          </List.Item>
        );
      }}
    />
  );

  return <>{listItem}</>;
};

export default CartItem;
