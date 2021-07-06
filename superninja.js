class Ninja {
    constructor(Name) {
        this.name = Name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        if (this.wisdom) {
            console.log("Name: " + this.name + ", Health: " + this.health + ", " + "Speed: " + this.speed + ", " + "Strength: " + this.strength + " Wisdom: " + this.wisdom);
        }
        else {
            console.log("Name: " + this.name + ", Health: " + this.health + ", " + "Speed: " + this.speed + ", " + "Strength: " + this.strength);
        }
    }

    drinkSake() {
        this.health = this.health + 10;
        console.log(this.name + " Health: "  +  this.health);
        return this.health;

    }
}

class Sensei extends Ninja {
    constructor(Name) {
        super(Name)
        this.speed = 10;
        this.wisdom = 10;
    }
    
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.drinkSake();