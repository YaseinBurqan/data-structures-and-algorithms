/* eslint-disable quotes */
"use strict";

const Queue = require("../stack_queue/src/queue");

//to create a Node
class AnimalShelter {
  constructor() {
    // initialize this.dog or this.cat to the Queue to call the Queue class methods
    this.dogCat = new Queue();
  }

  // insert the animal in the Queue
  enqueue(animal) {
    // compare if the animals is dog or cat or nether of them
    if (animal === dog || animal === cat) {
      this.dogCat.enqueue(animal);
      return animal;
    } else {
      return "animal can not be either a dog or a cat.";
    }
  }
  
  // delete the animal from the Queue
  dequeue(pref) {
    if (pref === dog || pref === cat) {
      if (!this.dogCat.isEmpty()) {
        this.dogCat.dequeue();
        return pref;
      }
      return this.dogCat.dequeue(pref);
    } else {
      return `${pref} : this shelter is for Dogs and Cats`;
    }
  }

  show() {
    return this.dogCat.display();
  }
}

let animalShelter = new AnimalShelter();

let dog = { name: "Abby", type: "Dog" };
let cat = { name: "Alice", type: "cat" };
let bird = { name: "Aspen", type: "Bird" };

console.log(animalShelter.enqueue(dog));
console.log(animalShelter.enqueue(cat));
console.log(animalShelter.enqueue(bird));

console.log(animalShelter.dequeue(dog));
console.log(animalShelter.dequeue(cat));
console.log(animalShelter.dequeue(bird));
console.log();
animalShelter.show();
console.log(animalShelter);

module.exports = AnimalShelter;
