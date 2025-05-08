Interview Questions - Blog Task
++++++++++++++++++++++++++++++++++++++++

1. An impactful blog post on some differences between interfaces and types in TypeScript:
==========================================================================================
TypeScript elevates JavaScript development by introducing static typing, leading to more robust and maintainable code. Two key tools for defining the shape of data are:

`interface`: Best for object contracts and class structure
`type`: Best for flexibility, unions, intersections, and literals



Interfaces – Defining Object Contracts

Interfaces define the structure an object should have.

interface Point {
  x: number;
  y: number;
}

const myPoint: Point = { x: 10, y: 20 };



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



some differences between interfaces and types in TypeScript use case

| Use Case                               | Use `interface`   | Use `type` |
|-----------------------------------------------------------------------------
| Defining object structure              | ✅               | ✅         |
| Declaring function signatures          | ✅               | ✅         |
| Supporting declaration merging         | ✅               | ❌         |
| Class implementation                   | ✅               | ❌         |
| Creating unions or intersections       | ❌               | ✅         |
| Literal types (e.g., `"yes" | "no"`)   | ❌               | ✅         |
| Aliasing primitives(`string`, `number`)| ❌               | ✅         |



Use `interface` for object shapes, class contracts, and when merging is helpful.
Use `type` for more flexible and expressive definitions like unions, literals, and complex combinations.
For simple object shapes, both work — but knowing when to use which makes codebase more maintainable and scalable.


2. use of the keyof keyword in TypeScript with  example:
=========================================================


What is keyof

keyof  get all the property names (keys) of a type as a union of string values.

Example:

interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
}

type ProductKeys = keyof Product; 

// Result: 'id' | 'name' | 'price' | 'category'

Why is keyof useful

*Safe Property Access
make a generic function that only allows access to existing properties.


function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const myProduct: Product = { id: 123, name: 'Laptop', price: 1200 };

const productId = getPropertyValue(myProduct, 'id'); // ✅ number
const productName = getPropertyValue(myProduct, 'name'); // ✅ string

// ❌ Error: 'description' is not a valid key of Product
// const invalid = getPropertyValue(myProduct, 'description');

*Creating Optional Types

make all properties of a type optional using keyof and mapped types:


type OptionalProduct = {
  [K in keyof Product]?: Product[K];
};

const optional: OptionalProduct = {}; // ✅ All properties optional
const another = { name: 'Mouse' };    // ✅ Only 'name' provided


* Looping Over Properties Safely
When looping through object keys, keyof helps TypeScript understand what keys working with.


function logProductDetails(product: Product) {
  for (const key in product) {
    if (Object.prototype.hasOwnProperty.call(product, key)) {
      console.log(`${key}: ${product[key as keyof Product]}`);
    }
  }
}

Summary: 

keyof gives  a list of all valid property names in a type.

It helps  access object properties safely.

It's useful for generic functions, mapped types, and dynamic operations.

Mastering keyof helps  write cleaner, safer, and more reliable TypeScript code.
