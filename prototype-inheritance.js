function Animal(name) {
    this.name = name
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise`);
}

let animal = new Animal('Dog');
// animal.speak();

// how do I make something that inherits from Animal
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
}

Dog.prototype.type = function() {
    console.log(`${this.name} is a ${this.breed}`);
}

let dog = new Dog('Tomy', 'Pitbull');
// dog.speak(); // TypeError: dog.speak is not a function
dog.bark();
dog.type();