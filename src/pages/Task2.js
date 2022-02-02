/* eslint-disable no-unused-vars */
import React from 'react';

function Task2(a, b, c) 
{
  let sum = 0;
  let remember = 0;
  let remember2 = 0;

  if(Task2.length === 3) {
      sum = a + b + c;
      return sum;
  }
  
  if(Task2.length < 3){
      this.remember = a;
      this.remember2 = b;

      Task2(this.remember, this.remember2, c);
  }

  return(
    <div><h1>{sum}</h1></div>
  );
}

export default Task2;
