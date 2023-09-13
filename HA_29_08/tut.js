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

let sheep = new Animal("Schaf", 35)
sheep.feed(3)
console.log(sheep.weight)