import React, { Component } from 'react';
import './Task5Style.css';

class Task5 extends Component
{   
   constructor(props){
      super(props);
      this.state={
         products:[],
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
      <div>
         <div>
          <h2>Filter By:</h2>
          <input type="checkbox" name="Category" value="Category"/>
          <input type="checkbox" name="Price" value="Price"/>
          <input type="checkbox" name="Manufacturer" value="Manufacturer"/>
         </div>
      
         <div>
          <button>Apply</button>
          <button>Reset</button>
         </div>
      </div>
   }
   
   render() {         
      const Row = () => {
        return(
         this.state.products.map((item, key) => {
            return(
               <div>
                  <div>
                     Total Quantity: {}
                </div>
                <div>
                  Total cost: {}
                </div>
                <div>
                  Average Price: {}
                </div>
                
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
                  <th>{item.ProductionDate}</th>
               </tr>
               </tbody>
               </table>
               </div>
            ) 
         }) 
        )
      }
      
      return(
          <div>
            <button onClick= {this.sidePanel }>Options</button>
             <Row />
          </div> 
      )
   }
};



export default Task5;