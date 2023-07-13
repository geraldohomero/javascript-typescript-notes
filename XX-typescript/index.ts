class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): void { 
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  let alice = new Person("Alice", 25); 
  alice.greet(); 
