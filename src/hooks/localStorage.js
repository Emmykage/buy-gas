export const setToken = (token) => {
    localStorage.setItem('gaswaka', JSON.stringify(token));
  };
  export const fetchToken = (refresh) => {
    const token = JSON.parse(localStorage.getItem('gaswaka'));
    if (refresh) {
      return token ? token?.refresh_token : token;
    }

    return token
  };
  
  
  export const removeToken = () => {
    localStorage.removeItem('gaswaka');
  };
  
  export const getCart = () => {
    const carts = JSON.parse(localStorage.getItem('cartitem'));
  
    if (carts == null) {
      return [];
    }
  
    return carts;
  };
  