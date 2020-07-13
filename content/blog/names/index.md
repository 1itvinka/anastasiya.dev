---
title: "Clean JavaScript Code: Names"
date: "2020-07-13T15:14:46+00:00"
updatedOnDate: "2020-07-13T15:14:46+00:00"
image: img.jpg
---

This is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/)

Most of the principles below are not language specific, although I use JavaScript for the code examples.

In many examples I use the code from [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript). It's a fantastic resource for learning how to write clean code in JavaScript. Highly recommended!

### Introduction

Choosing a good name can take time and effort. But it's totally worth it as proper names make it much easier to maintain code. If a name requires a comment - it's a bad name.

### Main Principles

**1. Use meaningful and pronounceable names**

Bad:

```javascript
const yyyymmdstr = moment().format("YYYY/MM/DD")
```

Good:

```javascript
const currentDate = moment().format("YYYY/MM/DD")
```

**2. Use Searchable Names**

Bad:

```javascript
const n = "Anastasiya"
```

Good:

```javascript
const firstName = "Anastasiya"
```

**3. Name constants that are meaningful for understanding the code**

Bad:

```javascript
setTimeout(blastOff, 86400000)
```

Good:

```javascript
const MILLISECONDS_IN_A_DAY = 86_400_000
setTimeout(blastOff, MILLISECONDS_IN_A_DAY)
```

**4. Function names should say what they do**

Bad:

```javascript
function addToDate(date, month) {
  // ...
}

const date = new Date()

// It's hard to tell from the function name what is added
addToDate(date, 1)
```

Good:

```javascript
function addMonthToDate(month, date) {
  // ...
}

const date = new Date()
addMonthToDate(1, date)
```

**5. Don't use names which vary in small ways.**

Bad:

```javascript
getActiveAccount()
getActiveAccountInfo()
```

**6. Avoid Mental Mapping**

In most cases a single letter name is a poor choice. The only exception is a loop counter if its scope is very small.

Bad:

```javascript
const locations = ["Austin", "New York", "San Francisco"]
locations.forEach(l => {
  doStuff()
  doSomeOtherStuff()
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l)
})
```

Good:

```javascript
const locations = ["Austin", "New York", "San Francisco"]
locations.forEach(location => {
  doStuff()
  doSomeOtherStuff()
  // ...
  // ...
  // ...
  dispatch(location)
})
```

**6. Don't use lower-case `L` or uppercase `o` in names**

They can be easily confused with one and zero, respectively. Hope it's a very obvious rule.

Bad:

```javascript
const l = 1
const O = 0
```

**7. Avoid noise words**

Never use `variable` in a variable name. It, at best, just adds noise. Quite often it can lie and mislead.

Bad:

```javascript
const firstNameString = "Anastasiya"
```

Good:

```javascript
const firstName = "Anastasiya"
```

### Conclusion

Names should reveal intent, should be easy to read and discuss, should be searchable, and shouldn't be confusing and misleading. Quite simple, right? Not always. But that's super important to do it right.