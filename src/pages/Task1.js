/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const Colors = ["Red", "Blue", "Yellow"]; 

createColorManager(Colors[0]);

function createColorManager(color) {
   <ColorManager />
}

function ColorManager(){
  
  let number = 1;

  const get = () => {
     return Colors;
  }
 
  const next =()=> {
     return Colors[number-1];
  }

  const prev = () => {
     return Colors[number+1];
  }
  
  const reset = () =>{
     return Colors[0];
  }
}

function Question1() 
{

  const Color = new ColorManager();
  return(
    <div>
       <button>Next</button>
       <button>Prev</button>
       <button>Get</button>
       <button onClick={ColorManager}>Reset</button>
    </div>
  ); 
}

export default Question1;
