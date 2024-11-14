import { createSlice } from '@reduxjs/toolkit';

import { HomeState } from '@@stores/home/types';

const initialState: HomeState = {
  me: {
    name: '권도훈',
    phone: '010-7278-0055',
    email: 'kipo0318@naver.com',
    address: '대전광역시 서구 둔산대로117번길 66, 3층 310호(만년동, 골드벤처타워)',
    bankName: '농협',
    account: '301-0357-8444-71',
  },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
