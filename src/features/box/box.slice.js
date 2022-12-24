import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: '100px',
  height:'100px',
  marginLeft: '717px',
  backgroundColor: 'red',
  borderRadius: ' '
};

const BoxSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
        state.width = actions.payload + 'px'
        // console.log('action   :' + actions)
        // console.log('actionPaylod    :'+ actions.payload)
    },
    changeHeight:  (state, actions) => {
      state.height = actions.payload + 'px'
    },
    changeBackgroundColor: (state, actions) => {
      state.backgroundColor = actions.payload
    },
    makeCircle: (state) => {
      state.borderRadius = 100 + "px"
    }, 
    usePadding: (state) =>{
      state.marginLeft = state.marginLeft
    }
  }
});

export const { changeWidth, changeHeight, changeBackgroundColor, makeCircle, usePadding} = BoxSlice.actions;
export default BoxSlice.reducer;
