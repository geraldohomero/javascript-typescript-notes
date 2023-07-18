# JavaScript & TypeScript Notes

Exercícios e anotações sobre JavaScript, TypeScript, React.js, Next.js, SQL, dentre outros.

```typescript
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
  
  let gersilayne = new Person("Gersilayne", 25);
  gersilayne.greet();

  let wellersiano = new Person("Wellersiano", 25);
  wellersiano.greet();
```
