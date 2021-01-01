---
title: "Clean JavaScript Code: Formatting"
date: "2020-09-12T05:16:34+00:00"
updatedOnDate: "2020-09-12T05:16:34+00:00"
image: img.jpg
---

## 1. Automate it!

Formatting should be consistent across the project. But doing it manually is a massive waste of time. Luckily we have tools like [Prettier](https://prettier.io/). I fell in love with this tool the moment I've tried it. And it was very easy to persuade our team to use it. Such a game-changer!

I use linters for rules only, and [Prettier](https://prettier.io/) for code styles.

## 2. Use consistent capitalisation

Capitalization can carry valuable information about your variables,
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

## 3. Make it readable from top to bottom

We tend to read code from top to bottom like an article. So ideally, every function should be followed by those at the next level of abstraction.

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

<section class="separator"><em></em><em></em><em></em></section>

This article is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/).

In many examples above, I use the code from [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript). It’s a fantastic resource for learning how to write clean code in JavaScript — highly recommended!

My website is not a standard blog — it's a [digital garden](https://anastasiya.dev/why-digital-garden/), and I constantly add, move around, and remove stuff. So please feel free to join the conversation. All the content is on [github](https://github.com/1itvinka/anastasiya.dev/tree/master/content/blog). Or it might be easier to [discuss it on Twitter](https://mobile.twitter.com/search?q=https://anastasiya.dev/formatting/).
