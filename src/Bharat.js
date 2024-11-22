import React from 'react';
let currentDate=new Date();
function Clock(){
  return(
    <>
      <h1>Bharat Clock</h1>
      <p>the current Date is {currentDate.toDateString()}</p>
      <p>The current time is {currentDate.toLocaleTimeString()}</p>
    </>
  )
}
export default Clock;
