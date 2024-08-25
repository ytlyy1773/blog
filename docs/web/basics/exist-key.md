---
title: javascript(js)判断对象是否包含某个 key
description: javascript(js)判断对象是否包含某个 key
---

# javascript(js)判断对象是否包含某个 key

## 方法对比

| 方法        |      特点      |
| ------------- | :-----------: |
| in 操作符      | 会检查对象的原型链 |
| hasOwnProperty() 方法      |   不会检查对象的原型链    |
| Object.hasOwn() 方法 |   不会检查对象的原型链（旨在取代 hasOwnProperty方法）    |
| Reflect.has() 方法 |   es6方法，不会受对象的 Symbol 属性的影响    |

## in 操作符
```js
key in object

// eg
const obj = {
  name: 'John',
  age: 30
};

console.log('name' in obj); // true
console.log('age' in obj); // true
console.log('gender' in obj); // false
```

## hasOwnProperty() 方法
```js
object.hasOwnProperty(key)

// eg
const obj = {
  name: 'John',
  age: 30
};

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // true
console.log(obj.hasOwnProperty('gender')); // fal
```

## Object.hasOwn() 方法
```js
Object.hasOwn(object, key)

// eg
const obj = {
  name: 'John',
  age: 30
};

console.log(Object.hasOwn(obj, 'name')); // true
console.log(Object.hasOwn(obj, 'age')); // true
console.log(Object.hasOwn(obj, 'gender')); // false
```

## Reflect.has() 方法

```js
const obj = {
  name: 'John',
  age: 30
};

console.log(Reflect.has(obj, 'name')); // true
console.log(Reflect.has(obj, 'age')); // true
console.log(Reflect.has(obj, 'gender')); // false
```