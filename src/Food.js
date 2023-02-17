import React from "react";
import Header from "./Home";
import MyComponent from "./Api";


function Food(){
  return(
    <div>
      <Header/>
      <MyComponent pro={'Food'}/>
    </div>
  )
}
export default Food