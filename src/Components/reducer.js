export const initialState = {
  cart: [],
  total: 0,
};

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      // Calculate the total directly in the reducer
      const newTotal = action.cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
      console.log("New Total:", newTotal); // Add this line for debugging
      return {
        ...state,
        cart: action.cart,
        total: newTotal,
      };
      case "UPDATE_CART_ITEM":
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };
    default:
      return state;
  }
};

export default reducer;
