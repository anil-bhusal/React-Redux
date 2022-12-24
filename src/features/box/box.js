import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeWidth, changeHeight, changeBackgroundColor, makeCircle} from "./box.slice";

const Box = () => {
  const dispatch = useDispatch()
  const {width, backgroundColor, height, marginLeft, borderRadius} = useSelector(state => state.box)

  const clickToMakeCircle = () => {
    dispatch(makeCircle())
  }

  return (
    <>
    <br/><hr style={{width: '75%'}}/><br/>
      <div style={{
          width: width,
          marginLeft: marginLeft,
          height: height,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius
      }}>  
      </div> <br/>

      <input placeholder="width" onKeyUp={ (e)=> dispatch(changeWidth(e.target.value))}/>
      <input placeholder="height" onKeyUp={(e) => dispatch(changeHeight(e.target.value))}/>
      <input placeholder ="color" onKeyUp={(e) => dispatch(changeBackgroundColor(e.target.value))}/>
      <button onClick={clickToMakeCircle}> Change to circle</button>
    </>

  );
};

export default Box;
