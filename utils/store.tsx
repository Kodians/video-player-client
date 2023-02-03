import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';
import Videos from '../pages/videos';

export const Store: any = createContext(null);

const initialState = {
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo') as string)
    : null,
  videos: [],
  categories: [],
  categoryId: '',
  categoryName: '',
};

function reducer(
  state: any,
  action: {
    payload: any;
    type: any;
  }
) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
      };

    case 'CATEGORY_CLICKED':
      return {
        ...state,
        categoryId: action.payload.categoryId,
        categoryName: action.payload.categoryName,
      };

    case 'VIDEOS_CHANGED':
      return { ...state, videos: action.payload };

    case 'ALL_CLICKED':
      return { ...state, categoryName: action.payload };
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
