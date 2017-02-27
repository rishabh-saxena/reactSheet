import React from 'react';
const BodyComponent=(props)=>{
  return(
  <div>
  <p>This is {props.currentButton} with {props.mode}</p>
  </div> 
  )
}
export default BodyComponent;