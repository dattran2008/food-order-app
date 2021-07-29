import { Button, List, Image, InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const CartItem = (props) => {
  const newArr = [];
  newArr.push(props.item);

  const listItem = (
    <List
      itemLayout='vertical'
      size='large'
      dataSource={newArr}
      renderItem={(item) => {
        console.log('render: ', item);
        return (
          <List.Item
            key={item.id}
            actions={[
              <>
                <Button
                  size='small'
                  htmlType='button'
                  icon={<MinusOutlined />}
                  onClick={() => props.removeCartItem(item.id)}
                ></Button>
                <InputNumber
                  size='small'
                  min={1}
                  max={10}
                  defaultValue={item.amount}
                  style={{ margin: '0 5px' }}
                  onChange={(val) => {
                    item = { ...item, amount: val };
                    console.log('Change:', item);
                  }}
                />
                <Button
                  size='small'
                  htmlType='button'
                  icon={<PlusOutlined />}
                  onClick={() => props.addCartItem(item)}
                ></Button>
              </>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Image
                  width={50}
                  src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                  preview={false}
                />
              }
              title={<a href={item.href}>{item.name}</a>}
            />
            <div style={{ position: 'absolute', left: '88%' }}>
              <span style={{ fontSize: '16px' }}>${item.price}</span>
            </div>
          </List.Item>
        );
      }}
    />
  );

  return <>{listItem}</>;
};

export default CartItem;
