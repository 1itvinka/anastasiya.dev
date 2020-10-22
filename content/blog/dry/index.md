---
title: "Clean JavaScript Code: DRY"
date: "2020-07-20T15:24:06+00:00"
updatedOnDate: "2020-07-20T15:24:06+00:00"
image: img.jpg
---

DRY is a fundamental principle of software development which stands for "Don't Repeat Yourself". That means that every piece of knowledge or logic must have a single representation in the system. Otherwise, the code quickly becomes a maintenance nightmare.

DRY is not only about copy-pasted lines of code. DRY is about the duplication of information. It's about explaining the same thing in different places, and even in different ways.

Although it's important to eliminate copy-pasted code, it's also critical to remember that **not all code duplication is knowledge duplication**. Sometimes that's just a coincidence that different things have the same rules. In this case, you shouldn't over-optimise and remove the "duplication".

That's important to note that the mindset "nothing will be repeated in my code" creates monstrous abstractions that are impossible to maintain. It is better to have some duplication than a bad abstraction. [The WET Codebase](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase?ck_subscriber_id=868357049) is a good talk about it.

A comment that rephrases what is already expressed in the code is a violation of the DRY principle.

A project is DRY if, after a change, you don't need to remember to do the same change in other parts of your system: in code, or comments, or documentation, etc.

<section class="separator"><em></em><em></em><em></em></section>

This article is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/).

My website is not a standard blog — it's a [digital garden](https://anastasiya.dev/why-digital-garden/), and I constantly add, move around, and remove stuff. So please feel free to join the conversation. All the content is on [github](https://github.com/1itvinka/anastasiya.dev/tree/master/content/blog). Or it might be easier to [discuss it on Twitter](https://mobile.twitter.com/search?q=https://anastasiya.dev/dry/).
