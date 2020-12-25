---
title: "New in JavaScript Cheatsheet: ES2020"
date: "2020-11-30T12:54:27+00:00"
updatedOnDate: "2020-11-30T12:54:27+00:00"
image: img.jpg
imageRef:
  link: https://www.pexels.com/photo/silver-macbook-air-and-goose-neck-lamp-939331/
  platform: Pexels
  authorName: Daan Stevens
  authorLink: https://www.pexels.com/@daan-stevens-66128
---

#### 1. Optional chaining

The optional chaining is a safe way to access nested object properties, even if an intermediate property doesn't exist.

```javascript
const user = {
  name: "Alice",
  age: 20,
}

console.log(user.address?.street)
// output: undefined
```

#### 2. globalThis

globalThis always refers to the global object, no matter where you are executing your code: in the browser, in Node, or inside web-workers.

```javascript
console.log(globalThis.setInterval === window.setInterval)
// output: true
```

#### 3. Nullish coalescing

It's intended to handle the cases when you need to check for only nullish values (`null` or `undefined`), rather than all the falsey values, including empty strings, the number 0, `false`, `NaN`, etc.

```javascript
console.log(null ?? "value") // "value"
console.log(undefined ?? "value") // "value"

console.log(false ?? "value") // false
console.log(false || "value") // "value"

console.log(0 ?? "value") // 0
console.log(0 || "value") // "value"
```

#### 4. Dynamic import

Dynamic imports can drastically speed up your load time. Another reason you might want to import a module dynamically is if it doesn't exist at the load time.

```javascript
if (myCondition) {
  await import("/modules/dynamic-module.js")
}
```

#### 5. BigInt

Before ES2020, the maximum number you can store as an integer was `pow(2, 53) - 1`. BigInt allows you to go beyond that. 🔥

An "n" appended at the very end of the number denotes that this is a BigInt and should be treated differently by the JavaScript engine.

```javascript
let myNumber = 9007199254740992n
```

#### 6. Promise.allSettled

It accepts an array of Promises and only resolves when all of them are settled –either resolved or rejected.

```javascript
Promise.allSettled([
  Promise.resolve(100),
  Promise.resolve(true),
  Promise.reject("Error!"),
]).then(results => console.log(results))

/*
[
  { status: "fulfilled", value: 100 },
  { status: "fulfilled", value: true },
  { status: "rejected", reason: "Error!" }
]
*/
```

#### 7. Well defined for-in mechanics

Before ES2020, it wasn't specified in which order `for (x in y)` should run. Finally, it was officially standardised.

#### 8. Module namespace exports

It can be useful for re-exporting from another module.

The following code

```javascript
export * as shapes from "./shapes.mjs"
```

is equivalent to

```javascript
import * as shapes from "./shapes.mjs"
export { shapes }
```

#### 9. import.meta

The `import.meta` object exposes context-specific metadata to a JavaScript module. [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta).

#### 10. String.prototype.matchAll

The `matchAll()` method returns an iterator of all results matching a string against a regular expression, including capturing groups. [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll).
