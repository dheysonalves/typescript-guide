# TYPESCRIPT GUIDE

Typescript general studies with mini-apps about tuples, generics, decorators, typed annotations, and typed arrays.

## Lessons

Focused studies about tuples, generics, decorators, typed annotations, and typed arrays.

### Lesson 1

The lesson was focused about the advantages of using the superset. Creating a specific scenario with axios to fetch json data, and how library can be better used with custom types for your requests.

- /lesson1/fetchjson

### Lesson 2

The lesson was focused some specifics subjects from the documentation:

#### Variables

- Primitives and Objects typing;
- Variables assertions and inferences;

#### Functions

- Contextual Typing;
- Function Anotations;
- Function Inferences;

#### Classes and interfaces

- Classes assertions and inferences;
- Interface typing;

#### Typed Arrays, Tuples

- Tuples typing

```typescript
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
```

- Typed Arrays

```typescript
let carMakers: string[];
const dates = [new Date(), new Date()];
const carsByMake = [["f15"], ["corolla"]];

// Flexible types
const importantDates = [new Date(), "2030-10-10"];
const importantValues: (Date | string)[] = [];
```

## Mini Apps

Focusing in praticing typescript typing with some OOP design patterns with the superset.

### Maps with Google Maps API

![Maps desktop mini-app](/images/maps-miniapp/desktop-1.png)

#### Overview

A location API using Google Maps API and Faker BR for data generation. **Not focusing on style**

The purpose of the application was using OOP with typescript and some design patterns.

- Facade
- Singleton
