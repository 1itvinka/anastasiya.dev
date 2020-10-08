---
title: "Clean JavaScript Code: Functions"
date: "2020-09-10T06:06:21+00:00"
updatedOnDate: "2020-09-10T06:06:21+00:00"
image: img.jpg
---

This article is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/).

In many examples below, I use the code from [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript). It's a fantastic resource for learning how to write clean code in JavaScript — highly recommended!

### Main Principles

#### 1. A function should do one thing, and only one thing

I can't emphasise enough the importance of this principle. If you follow this rule, the world would be a happier place. :)

Bad:

```javascript
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
```

Good:

```javascript
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email)
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client)
  return clientRecord.isActive()
}
```

#### 2. Use up to 2 parameters

The ideal number of arguments for a function is 0. And functions with more than two parameters are hard to test, hard to read, and hard to change.

If you absolutely need more than two arguments, at least use an object and the destructuring syntax.

Bad:

```javascript
function createProduct(title, description, price, isAvailable) {
  // ...
}

createProduct("Foo", "Lorem Ipsum", 25, true)
```

Good:

```javascript
function createProduct({ title, description, price, isAvailable }) {
  // ...
}

createProduct({
  title: "Foo",
  description: "Lorem Ipsum",
  price: 25",
  isAvailable: true
});
```

#### 3. Avoid flag arguments

Passing a boolean into a function loudly says that this function does more than one thing. It's better to split out your functions in this case.

Bad:

```javascript
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`)
  } else {
    fs.create(name)
  }
}
```

Good:

```javascript
function createFile(name) {
  fs.create(name)
}

function createTempFile(name) {
  createFile(`./temp/${name}`)
}
```

#### 4. The blocks within statements like "if", "else", "while" should be one line long.

In most cases, that line should be a function call.

The benefits of doing this:

- this keeps function nice and small;
- it's easier to read and understand;
- it can help you to avoid redundant comments;
- it's easier to test.

#### 5. Avoid side effects

A function has "side effects" if it promises to do one thing, but it also does other hidden things. Such code is very error-prone.

#### 6. Use descriptive names

The smaller and more focused the function is, the easier it is to choose a descriptive name. Don't be afraid to make the name long. A long descriptive name is better than a short name that requires a long descriptive comment.
