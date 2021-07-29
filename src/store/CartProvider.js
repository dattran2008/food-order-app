import { useReducer } from 'react';
import CartContext from './CartContext.js';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const cartExistingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    let updatedItems;

    if (cartExistingItem) {
      const updatedExistingItem = { ...cartExistingItem, amount: cartExistingItem.amount + action.item.amount };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedExistingItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
    const cartExistingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - cartExistingItem.price;
    let updatedItems;
    if (cartExistingItem.amount === 1) {
      const filterItems = state.items.filter((item) => item.id !== action.id);
      updatedItems = filterItems;
    } else {
      const updatedExistingItem = { ...cartExistingItem, amount: cartExistingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedExistingItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
