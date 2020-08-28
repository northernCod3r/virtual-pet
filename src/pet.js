

class Pet {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
    }
    growUp(){
        this.age = this.age +1;
        this.hunger = this.hunger +5;
        this.fitness = this.fitness -3;
    }


};
module.exports = Pet;
