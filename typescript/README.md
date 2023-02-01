# Typescript

Typescript is a powerful typed superset of JavaScript that compiles to plain JavaScript. It is an open-source programming language developed and maintained by Microsoft.

It adds JavaScript type.


## Installation

To install Typescript, you can use the following command:

```
npm install -g typescript
```

## Usage

Typescript can be used to write modern JavaScript code that is both safe and easy to read. It offers type safety, classes, modules, and much more.

## Examples

Here are some examples of how Typescript can be used:

#### Classes

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says Hello!`);
  }
}

const dog = new Animal("Fido");
dog.speak();
```

#### Modules

```typescript
import { Animal } from "./animal";

class Dog extends Animal {
  constructor(name: string)

### Contributing

CLone this repository using the following command 
```git clone https://github.com/30-Days-Of-JavaScript
```
Create a pull request and discuss the features or the bug with me before your changes can be published.
### Author
[Dovine Owuor](https://github.com/dovineowuor)