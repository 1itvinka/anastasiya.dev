---
title: "Clean JavaScript Code: Testing"
date: "2020-10-16T15:39:07+00:00"
updatedOnDate: "2020-10-16T15:39:07+00:00"
image: img.jpg
imageRef:
  link: https://www.pexels.com/photo/technology-lens-laboratory-medical-60022/
  platform: Pexels
  authorName: Public Domain Pictures
  authorLink: https://www.pexels.com/@public-domain-pictures
---

### Main Principles

#### 1. Single Concept per Test

Bad:

```javascript
import assert from "assert"

describe("MomentJS", () => {
  it("handles date boundaries", () => {
    let date

    date = new MomentJS("1/1/2015")
    date.addDays(30)
    assert.equal("1/31/2015", date)

    date = new MomentJS("2/1/2016")
    date.addDays(28)
    assert.equal("02/29/2016", date)

    date = new MomentJS("2/1/2015")
    date.addDays(28)
    assert.equal("03/01/2015", date)
  })
})
```

Good:

```javascript
import assert from "assert"

describe("MomentJS", () => {
  it("handles 30-day months", () => {
    const date = new MomentJS("1/1/2015")
    date.addDays(30)
    assert.equal("1/31/2015", date)
  })

  it("handles leap year", () => {
    const date = new MomentJS("2/1/2016")
    date.addDays(28)
    assert.equal("02/29/2016", date)
  })

  it("handles non-leap year", () => {
    const date = new MomentJS("2/1/2015")
    date.addDays(28)
    assert.equal("03/01/2015", date)
  })
})
```

#### 2. Tests Should Run Fast

Almost instantly. You should be able to run them after even a minor change.

#### 3. Tests Should Never Depend on Each Other

You should be able to run each test independently, and in any order you like.

<section class="separator"><em></em><em></em><em></em></section>

This article is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/).

In many examples above, I use the code from [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript). It’s a fantastic resource for learning how to write clean code in JavaScript — highly recommended!

My website is not a standard blog — it's a [digital garden](https://anastasiya.dev/why-digital-garden/), and I constantly add, move around, and remove stuff. So please feel free to join the conversation. All the content is on [github](https://github.com/1itvinka/anastasiya.dev/tree/master/content/blog). Or it might be easier to [discuss it on Twitter](https://mobile.twitter.com/search?q=https://anastasiya.dev/tests/).
