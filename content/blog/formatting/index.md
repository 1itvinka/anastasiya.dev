---
title: "Clean JavaScript Code: Formatting"
date: "2020-09-12T05:16:34+00:00"
updatedOnDate: "2020-09-12T05:16:34+00:00"
image: img.jpg
---

This is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/).

In many examples below I use the code from [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript). It’s a fantastic resource for learning how to write clean code in JavaScript. Highly recommended!

### Main Principles

#### 1. Automate it!

Formatting should be consistent across the project. But doing it manually is a huge waste of time. Luckily we have tools like [Prettier](https://prettier.io/). I fell in love with this tool the moment I've tried it. And it was quite easy to persuade our team to use it. Such a game changer!

I use linters for rules only, and [Prettier](https://prettier.io/) for code styles.

#### 2. Use consistent capitalisation

Capitalisation can carry the important information about your variables,
functions, etc. These rules are subjective, but the point is to be consistent.

Bad:

```javascript
const DAYS_IN_WEEK = 7
const daysInMonth = 30

function eraseDatabase() {}
function restore_database() {}
```

Good:

```javascript
const DAYS_IN_WEEK = 7
const DAYS_IN_MONTH = 30

function eraseDatabase() {}
function restoreDatabase() {}
```

#### 3. Make it readable from top to bottom

We tend to read code from top to bottom like an article. So ideally every function should be followed by those at the next level of abstraction.

Bad:

```javascript
class PerformanceReview {
  constructor(employee) {
    this.employee = employee
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers")
  }

  getPeerReviews() {
    const peers = this.lookupPeers()
    // ...
  }

  getReviews() {
    this.getPeerReviews()
    this.getManagerReview()
  }

  getManagerReview() {
    // ...
  }
}
```

Good:

```javascript
class PerformanceReview {
  constructor(employee) {
    this.employee = employee
  }

  getReviews() {
    this.getPeerReviews()
    this.getManagerReview()
  }

  getPeerReviews() {
    const peers = this.lookupPeers()
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers")
  }

  getManagerReview() {
    // ...
  }
}
```
