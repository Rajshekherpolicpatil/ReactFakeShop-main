import { createStore } from 'redux';

const initialState = {
    users: [],
    loggedInUser:null,
    cart :[]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          users: action.payload
        };
        case 'REGISTER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          users: []
        };
      default:
        return state;
    }
  };
  
  export default createStore(reducer);
  