class Animal {
    constructor(name, weight){
        this.name = name
        this.weight = weight
        this.alive = true
    }
    feed(amount){
        this.weight += amount
    }
}

class Predator extends Animal {
    constructor(name, weight, dangerFactor = 1){
        super(name, weight)
        this.dangerFactor = dangerFactor
    }
    fightPower(){
        return weight * dangerFactor
    }
    feed(target){
        if (target instanceof Animal){
            this.weight += target.weight
            target.weight = 0
            target.alive = false
            
        }
        else {
            console.log("Das Ziel ist kein Tier")
        }
        
    }
}

class Prey extends Animal {

}


let sheep = new Prey("Schaf", 35)
let lion = new Predator("Löwe", 250)
sheep.feed(3)
//console.log(sheep.weight)
//console.log(lion.weight)
lion.feed(sheep)
console.log(lion)
console.log(sheep)