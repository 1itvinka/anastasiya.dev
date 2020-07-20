---
title: "Clean JavaScript Code: DRY"
date: "2020-07-20T15:24:06+00:00"
updatedOnDate: "2020-07-20T15:24:06+00:00"
image: img.jpg
---

This is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/). Although this topic is not language specific, any JavaScript developer should understand its importance.

DRY is a basic principle of software development which stands for "Don't Repeat Yourself". That means that every piece of knowledge or logic must have a single representation in the system. Otherwise the code quickly becomes a maintenance nightmare.

DRY is not only about copy-pasted lines of code. DRY is about the duplication of information. It's about explaining the same thing in different places, and even in different ways.

Although it's really important to eliminate copy-pasted code, that's also critical to remember that **not all code duplication is knowledge duplication**. Sometimes that's just a coincidence that different things happen to have the same rules.

And even if it's not a coincidence - that's important not to over-optimise. The mindset "nothing will be repeated in my code" creates monstrous abstractions that are impossible to maintain. It is better to have some duplication than a bad abstraction. [The WET Codebase](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase?ck_subscriber_id=868357049) is a good talk about it.

Comments that rephrase what is already expressed in the code is violation of DRY principle.

A project is DRY if after a change you don't need to remember to do the same change in other parts of your system: in code, or comments, or documentation, etc.
