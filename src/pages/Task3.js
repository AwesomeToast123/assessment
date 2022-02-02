import React from 'react';

function fight(fighter_1, fighter_2) {
    let fighter1Hp = fighter_1.takeDamage();
    let fighter2Hp = fighter_2.takeDamage();

    while (fighter1Hp !== 0 || fighter2Hp !== 0) {
        var fighter1Turn = window.prompt();
        fighter2Hp = fighter_2.takeDamage(fighter1Turn);
        var fighter2Turn = window.prompt();
        fighter1Hp = fighter_1.takeDamage(fighter2Turn);

        if (fighter2Hp === 0) {
            window.alert("Fighter 1 wins!");
        } else if (fighter1Hp === 0) {
            window.alert("Fighter 2 wins")
        }
    }
}


function Task3() {
    const Fighter = {
        name: "Keeber",
        strength: 30,
        agility: 30,
        vitality: 30,

        getName: function() {
            return this.name;
        },

        getHp: function() {
            return this.vitality;
        },

        takeDamage: function(damage) {
            var hpDam;
            this.vitality -= 10;
            this.strength += 5;
            this.agility -= 3;

            let hp = 50 * this.vitality;
            hpDam = hp - damage;

            return hpDam;
        },

        dealDamage: function(damage) {
            this.takeDamage(damage);
        }
    };

    var Fighter1 = Fighter;
    var Fighter2 = Fighter;

    fight(Fighter1, Fighter2);

    return ( <
        div >
        <
        h1 > Welcome to fighters arena 2 < /h1> <
        button onClick = {
            () => fight(Fighter1, Fighter2) } > Click here to start! < /button> <
        /div>
    );
}

export default Task3;