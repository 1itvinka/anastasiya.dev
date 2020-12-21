---
title: Accessible Website Checklist
date: "2020-12-20T16:51:20+00:00"
updatedOnDate: "2020-12-21T09:50:25+00:00"
image: img.jpg
---

Millions of people rely on websites being accessible. And not only because of disabilities and conditions, that can affect the way users interact with apps. Accessible websites provide much better experience for everybody who is using it.

Here's my checklist to make sure that the apps I develop are accessible:

## 1. Use semantic markup

Screen readers rely heavily on the semantics of the webpage.

In-depth explanation:

- [# Why do semantics matter? - A11ycasts #08](https://www.youtube.com/watch?v=g2tzEil5TL0&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
- [Why headings and landmarks are so important -- A11ycasts #18](https://www.youtube.com/watch?v=vAAzdi1xuUY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

## 2. Use native controls whenever possible

A `div` that is styled like a button won't behave like a `button` unless you add all sorts of event handlers to it. And even then, you can't be sure that it still works as expected on all the devises out there. Just use the native controls when you can. If a designer insists on a custom control, make sure that everybody understands the tradeoffs.

A good video about it: [Just use button - A11ycasts #05](https://www.youtube.com/watch?v=CZGqnp06DnI&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

## 3. Add keyboard support to custom controls

If you create a custom control, make sure that it's usable by keyboard only.

Useful techniques:

- [Roving tabindex -- A11ycasts #06](https://www.youtube.com/watch?v=uCIC2LNt0bk&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
- [How to Label Custom Elements - A11ycasts #24](https://www.youtube.com/watch?v=7a6bLXw2lqQ&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

## 4. Make sure that all interactive elements are reachable with the tab key

This is critical not only for people with disabilities but also for everyone who saves his time by navigating websites with his keyboard.

## 5. Never remove the focus ring

Never remove the outline of the element on focus, unless you know what you're doing, and you're providing a usable alternative. Yes, I also think that the focus ring might be ugly. But that's possible to make it look "good enough" in most browsers. By simply removing it, you make your website unusable by millions of people.

If you absolutely need to remove the default focus ring, enable it for the keyboard users. This video explains how: [Focus Ring! -- A11ycasts #16](https://www.youtube.com/watch?v=ilj2P5-5CjI&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=16).

## 6. Put the main action early in the content

In this case, the users who're using switch devices or a keyboard can quickly navigate to the main action.

## 7. Provide a logical tab order

Sometimes the order of the elements in the DOM is different from the order in which they're displayed on the page. In this case, the focus ring might be bouncing around all over the place. If that happens, make sure to change the tab order manually. Make sure that the next focused element is the one that you expect.

## 8. Use natural reading order of the elements in the DOM whenever possible

To avoid all the manual adjustments of `tabindex`es, just use the logical order in your layout whenever possible.

[Does reordering content affect accessibility? - A11ycasts #21](https://www.youtube.com/watch?v=8MAvH6vYbDo&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

## 9. Remove invisible elements from the tab order

That's very annoying when the focus is "disappearing" while it's going through the hidden elements.

## 10. Make sure that all the visually hidden elements are skipped by screen readers as well.

Otherwise, some content will be out of context and might not make any sense.

## 11. Be aware of colour contrasts

For example, light grey and white are indistinguishable for lots of people. And not only for people with visual impairment. Once I worked on a cheap old monitor that displayed light grey as white. 🤷‍♀️

But don't just guess if you're using the safe colour combinations or not. There're lots of useful tools out there:

- [OATMEAL Color Contrast](https://ebay.gitbook.io/oatmeal/color-contrast/)
- [aXe Chrome Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- [Contrast Ratio Tool By Lea Verou](https://contrast-ratio.com/)
- [Color Contrast Analyzer Chrome Extension](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)

## 12. Use `rem` not `px` at least for font-sizes

In most browsers, you can change the default font-size, which is typically 16px. If font-sizes on a website are defined in `rem` or `em`, users' settings are respected.

## 13. Images should have `alt` attributes

The primary purpose of `alt` attribute is to describe images to visitors who are unable to see them.

## 14. Use `aria-label` to provide a text alternative to an element that has no visible text on the screen

Sometimes our semantic markup isn't enough on its own to provide all the necessary information to the screen readers. In this case, use `aria-label` with the description of the element.

For example:

```javascript
<button class="menu-burger" aria-label="Menu"></button>
```

## 15. Don't forget about modal dialogs

[Accessible Modal Dialogs -- A11ycasts #19](https://www.youtube.com/watch?v=JS68faEUduk&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=19)

## 16. Double-check that your users have smooth keyboard experience

## 17. Move through the page with a screen reader

Lots of useful tips:

- [Screen Reader Basics: VoiceOver -- A11ycasts #07](https://www.youtube.com/watch?v=5R-6WvAihms&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=7)

- [Screen Reader Basics: NVDA -- A11ycasts #09](https://www.youtube.com/watch?v=Jao3s_CwdRU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=9)

## 18. Use tools to test accessibility

- [WebAIM](https://webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Dev Tools
- [aXe Chrome Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/?q=bitv-german-government-standard)
