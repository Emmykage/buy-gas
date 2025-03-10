export const setToken = (token) => {
    localStorage.setItem('bitglobal', JSON.stringify(token));
  };
  export const fetchToken = (refresh) => {
    const token = JSON.parse(localStorage.getItem('gaswaka'));
    if (refresh) {
      return token ? token?.refresh_token : token;
    }

    return token
  };
  
  export const setCart = (cartItems) => {
    localStorage.setItem('cartitem', JSON.stringify(cartItems));
  };
  
  export const removeToken = () => {
    localStorage.removeItem('bitglobal');
  };
  
  export const getCart = () => {
    const carts = JSON.parse(localStorage.getItem('cartitem'));
  
    if (carts == null) {
      return [];
    }
  
    return carts;
  };
  