import React, { Component } from 'react';

class Task5 extends Component{
   
   constructor(props){
      super(props);
      this.state={
         products:[],
         show: function(){
            <h1>Hello</h1>
         }
      }
   }

   componentDidMount()
   {    
    const  { products } = this.state;
    products.push({
        Category: "Beans",
        Price: 100,
        Manufacturer: "Vladof",
        ProductionDate: "February 13 1998"
    });
    this.setState({ products });
   }
   
   sidePanel(){
      return(
         <div>
            {
            this.state.products.map((item, key) =>{
                  return(
                     <div>
                     <table className="table">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Manufacturer</th>
                          <th>Production Date</th>               
                      </tr>
                     </thead>
                     <tbody>

                     <tr>
                        <th>{item.Category}</th>
                        <th>{item.Price}</th>
                        <th>{item.Manufacturer}</th>
                        <th>{item.ProductionDate }</th>
                     </tr>
                     </tbody>
                     </table>
                     </div>
                  ) 
               }) 
           }
         </div>
      )
   }

   render(){
      return(
          <div>
            <button onClick={this.sidePanel}>Options</button>
          </div>
      )
   }
};


export default Task5;