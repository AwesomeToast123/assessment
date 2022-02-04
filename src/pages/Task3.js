import React from "react";

function fight(fighter_1, fighter_2) {

  let fighter1Hp;
  let fighter2Hp;
  
  while (fighter1Hp !== 0 || fighter2Hp !== 0) {
    var fighter1Turn = window.prompt("Fighter 1 turn");
    var fighter1Damage = parseInt(fighter1Turn);
    fighter2Hp = fighter_2.takeDamage(fighter1Damage);

    var fighter2Turn = window.prompt("Fighter 2 turn");
    var fighter2Damage = parseInt(fighter2Turn);
    fighter1Hp = fighter_1.takeDamage(fighter2Damage); 
  }

  if (fighter2Hp === 0) {
   window.alert("Fighter 1 wins!");
 } else if (fighter1Hp === 0) {
   window.alert("Fighter 2 wins");
 }
}

function Fighter(name, strength, agility, vitality){
      this.name = name;
      this.strength = strength;
      this.agility = agility;
      this.vitality = vitality;
  
      this.getName = function () {
        return this.name;
      }
  
      this.getHp = function () {
        return this.vitality;
      }
  
      this.takeDamage = function (damage) {
        var hpDam;
        this.vitality -= 10;
        this.strength += 5;
        this.agility -= 3;
  
        let hp = 50 * this.vitality;
        hpDam = hp - damage;
        
        return hpDam;
      }
  
      this.dealDamage = function (damage) {
        this.takeDamage(damage);
      }
   }

function Task3() {
   
   const Fighter1 = new Fighter("Logan", 30, 30, 30);
   const Fighter2 = new Fighter("Wade", 30, 30, 30);

  return (
    <div>
      <h1>Welcome to fighters arena 2</h1>
      <button
         onClick={() => fight({Fighter1, Fighter2})}
      >
        Click here to start!
      </button>
    </div>
  );
}

export default Task3;
