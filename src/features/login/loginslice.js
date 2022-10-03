import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedin: false,
    userInfo:{name :'aqsa'},
 
}

export const loginslice = createSlice({
  name: 'loginslice',
  initialState,
  reducers: {
    setLogin: (state = initialState, action) => {
      state.isLoggedin = action.payload    
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLogin } = loginslice.actions

export default loginslice.reducer