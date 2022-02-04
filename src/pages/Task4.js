import React, { Component } from 'react';

   let blocks;
   let elements;
   let modifiers;
  

class Task4 extends Component{
  block(block) {
   return this.block = blocks;
  };
  
  element(element){
   return this.element = elements
  };

  modifier(modifier){
   return this.modifier = modifiers;
  }

  build(){
   if(Task4.block === null){
      console.log("Error empty block");
      Task4.modifier(null);
      Task4.element(null);
    }else if(Task4.element === null){
     console.log("Error empty element");
     Task4.block(null);
     Task4.modifier(null);
    }else if(Task4.modifier === null){
     console.log("Error empty modifier");
     Task4.element(null);
     Task4.block(null);
    }
  };
  
  render() {
   // eslint-disable-next-line no-undef
   const bem = new block("Hello").element("There").modifier("Lol").build();
   return <div>{bem}</div>
  } 
   
}


export default Task4;

/*
Task4.prototype.block = function(block){
     return this.block = block
}

Task4.prototype.element = function(element){
     return this.element = element
}

Task4.prototype.modifier = function(modifier){
     return this.modifier = modifier;
}

Task4.prototype.build = function()
{
   if(Task4.block === null){
       console.log("Error empty block");
       Task4.modifier(null);
       Task4.element(null);
   }else if(Task4.element === null){
      console.log("Error empty element");
      Task4.block(null);
      Task4.modifier(null);
   }else if(Task4.modifier === null){
      console.log("Error empty modifier");
      Task4.element(null);
      Task4.block(null);
   }
}

// eslint-disable-next-line no-unused-vars
var bem = new Task4();
Task4.block().element().modifier().build();
*/





