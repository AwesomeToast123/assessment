/* eslint-disable no-unused-vars */
import React, {useState} from 'react';


function createColorManager() {
   <colorManager />
}


function colorManager(){
  const Colors = ["Red", "Blue", "Yellow"]; 
  let number = 1;

  const get = () => {
     return Colors;
  }
 
  const next =()=> {
     return Colors[number-1];
  }

  const prev = () =>{
     return Colors[number+1];
  }
  
  const reset = () =>{
     return Colors[0];
  }
}

function Question1() 
{

  return(
    <div>
       <button onClick={this.next}>Next</button>
       <button onClick={this.prev}>Prev</button>
       <button onClick={this.get}>get</button>
       <button onClick={this.reset}>reset</button>
    </div>
  ); 
}

export default Question1;
