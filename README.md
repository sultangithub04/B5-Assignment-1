# Interview Questions - Blog Task

---

## 1. An Impactful Blog Post on Some Differences Between Interfaces and Types in TypeScript

TypeScript elevates JavaScript development by introducing static typing, leading to more robust and maintainable code. Two key tools for defining the shape of data are:

- `interface`: Best for object contracts and class structure  
- `type`: Best for flexibility, unions, intersections, and literals

---

### Interfaces – Defining Object Contracts

Interfaces define the structure an object should have:

```ts
interface Point {
  x: number;
  y: number;
}

const myPoint: Point = { x: 10, y: 20 };
```

#### ✅ Declaration Merging

Multiple interfaces with the same name are merged:

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const myPet: Animal = { name: 'Buddy', age: 3 };
```

#### ✅ Class Contracts

Classes can implement interfaces:

```ts
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
```

---

### `type` – More Than Object Shapes

Types can describe objects, primitives, unions, and intersections:

```ts
type ID = string | number;
type WindowStates = "open" | "closed" | "minimized";
type Point = { x: number; y: number };
type LabeledPoint = Point & { label: string };
```

#### ✅ Features

- **Union & Intersection Types**

```ts
type Status = 'pending' | 'completed';
type UserInfo = { name: string } & { age: number };
```

- **No Declaration Merging**

```ts
type Status = 'active';
// type Status = 'inactive'; // ❌ Error: Duplicate identifier
```

- **Primitive Aliases**

```ts
type UserID = number;
type Mode = 'light' | 'dark';
```

---

### 💡 Use Case Comparison

| Use Case                                 | Use `interface` | Use `type` |
|------------------------------------------|-----------------|------------|
| Defining object structure                | ✅              | ✅         |
| Declaring function signatures            | ✅              | ✅         |
| Supporting declaration merging           | ✅              | ❌         |
| Class implementation                     | ✅              | ❌         |
| Creating unions or intersections         | ❌              | ✅         |
| Literal types (e.g., `"yes" | "no"`)     | ❌              | ✅         |
| Aliasing primitives (`string`, `number`) | ❌              | ✅         |

> ✅ Use `interface` for object shapes, class contracts, and merging.
> ✅ Use `type` for unions, literals, primitives, and complex combinations.

---

## 2. Use of the `keyof` Keyword in TypeScript

### 🔑 What is `keyof`?

The `keyof` keyword gets all the property names (keys) of a type as a union of string values.

#### Example:

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
}

type ProductKeys = keyof Product; 
// Result: 'id' | 'name' | 'price' | 'category'
```

---

### ✅ Why is `keyof` Useful?

#### 1. Safe Property Access

Create a generic function that only allows access to valid properties:

```ts
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const myProduct: Product = { id: 123, name: 'Laptop', price: 1200 };

const productId = getPropertyValue(myProduct, 'id'); // ✅ number
const productName = getPropertyValue(myProduct, 'name'); // ✅ string

// ❌ Error: 'description' is not a valid key of Product
// const invalid = getPropertyValue(myProduct, 'description');
```

---

#### 2. Creating Optional Types

Make all properties optional using `keyof` and mapped types:

```ts
type OptionalProduct = {
  [K in keyof Product]?: Product[K];
};

const optional: OptionalProduct = {}; // ✅ All properties optional
const another = { name: 'Mouse' };    // ✅ Only 'name' provided
```

---

#### 3. Looping Over Properties Safely

When looping through keys, `keyof` ensures you're working with valid properties:

```ts
function logProductDetails(product: Product) {
  for (const key in product) {
    if (Object.prototype.hasOwnProperty.call(product, key)) {
      console.log(`${key}: ${product[key as keyof Product]}`);
    }
  }
}
```

---

### 📌 Summary

- `keyof` gives a list of valid property names in a type.
- It helps safely access object properties.
- Useful in **generic functions**, **mapped types**, and **dynamic key access**.
- Mastering `keyof` leads to cleaner, safer, and more reliable TypeScript code.
