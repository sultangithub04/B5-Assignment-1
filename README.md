🔍 Decoding TypeScript: Interfaces vs. Types – Choosing the Right Tool for the Job

TypeScript elevates JavaScript development by introducing static typing, leading to more robust and maintainable code. Two key tools for defining the shape of data are:

- `interface`: Best for object contracts and class structure
- `type`: Best for flexibility, unions, intersections, and literals

---

🧩 Interfaces – Defining Object Contracts

Interfaces define the structure an object should have.

interface Point {
  x: number;
  y: number;
}

const myPoint: Point = { x: 10, y: 20 };

✅ Features

- Declaration Merging – Multiple interfaces with the same name are merged.

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const myPet: Animal = { name: 'Buddy', age: 3 };

- Class Contracts – Classes can implement interfaces.

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

---

🔧 Types – Versatility Beyond Objects

`type` can describe more than object shapes — including primitives, unions, and intersections.

type ID = string | number;
type WindowStates = "open" | "closed" | "minimized";
type Point = { x: number; y: number };
type LabeledPoint = Point & { label: string };

✅ Features

- Union & Intersection Types

type Status = 'pending' | 'completed';
type UserInfo = { name: string } & { age: number };

- No Declaration Merging

type Status = 'active';
// type Status = 'inactive'; // ❌ Error: Duplicate identifier

- Primitive Aliases

type UserID = number;
type Mode = 'light' | 'dark';

---

🧠 When to Use What?

| Use Case                               | Use `interface` | Use `type` |
|----------------------------------------|------------------|------------|
| Defining object structure              | ✅               | ✅         |
| Declaring function signatures          | ✅               | ✅         |
| Supporting declaration merging         | ✅               | ❌         |
| Class implementation                   | ✅               | ❌         |
| Creating unions or intersections       | ❌               | ✅         |
| Literal types (e.g., `"yes" | "no"`)   | ❌               | ✅         |
| Aliasing primitives (`string`, `number`)| ❌               | ✅         |

---

📌 TL;DR

- Use `interface` for object shapes, class contracts, and when merging is helpful.
- Use `type` for more flexible and expressive definitions like unions, literals, and complex combinations.
- For simple object shapes, both work — but knowing when to use which makes your codebase more maintainable and scalable.
