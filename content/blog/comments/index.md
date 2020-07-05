---
title: Comments in Clean JavaScript Code
date: "2020-07-05T08:00:21+00:00"
updatedOnDate: "2020-07-05T12:23:27+00:00"
image: img.jpg
---

This is a part of the series [My Principles For Writing Clean JavaScript Code](https://anastasiya.dev/clean-js-code/)

### Introduction

My rule of thumb is to **use comments as little as possible**. Good code mostly documents itself.

Comments can lie and mislead. They create noise and they can clutter your code. So use them only if you fail to express yourself otherwise. Always choose to have the single source of truth: the code.

### Common ways to clutter a codebase with comments:

**1. Comments to make up for bad code**

It happens when we write some code and we know it's confusing. But it's better to spend time cleaning the mess than to write comments that explain it.

**2. Comments that rephrase what is already expressed in the code**

For example:

```javascript
/* Declare the function 'showMessage' */
function showMessage() {
  /*
   * Declare variable 'user';
   * create and initialize a new Object;
   * assign reference to it to 'user'
   */
  const user = {
    id: "6e4ab6d2-1d76-4814-809b-ee2ad35f54a4",
    name: "Anastasiya",
    surname: "Tyshkavets",
  }

  /* Logs 'Hello Anastasiya' */
  console.log(`Hello ${user.name}`)
}
```

From my experience comments like this exist in a codebase if there're policies that code should be well-documented. As for me such rules are, at best, very annoying. More often than not such comments lie. Not intentionally. That's just because realistically it's very hard to maintain them. Inaccurate comments are far worse than no comments at all.

**3. Commented-out code**

No, really, just delete the dead code. It won't be lost forever. You can always use your version control system to restore it.

**4. Attributions and journal comments**

For example:

```javascript
/**
 * Created by Anastasiya on 2020-07-03
 */
```

or

```javascript
/**
 * 2020-07-03: Lorem ipsum dolor sit amet
 * 2020-07-04: Consectetur adipiscing elit
 */
```

If you're using a version control system such comments are absolutely redundant. Once I've worked on a project where attribution comments stayed around for years, getting absolutely irrelevant over time.

**5. Positional markers**

For example:

```javascript
///////////////////////////////////////
// Styles
///////////////////////////////////////
const useStyles = makeStyles(theme => ({
  // ...
}))
```

They just add noise. Lots of noise. Split the file into smaller pieces, use proper names, and let indentation and formatting give the visual structure to your code.

**6. Closing Brace Comments**

For example:

```javascript
const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark() {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid
                }
              } // childImageSharp
            } // image
          } // frontmatter
        } // node
      } // edges
    } // allMarkdownRemark
  } // query
`)
```

If you think you need such comments, try to shorten your functions. And even if you can't do it, all the modern IDEs are great at highlighting this.

### Sometimes the comments are necessary.

**1. Useful information that can't be expressed in code**

It can be intent behind a decision, warning of consequences, clarification, etc.

For example, as a frontend developer who deals with all sorts of weird browser bugs, sometimes I have to explain why this line of code is not nonsense but an important fix.

**2. Amplification**

It might be useful to amplify the importance of something that otherwise seems to be insignificant. In one of the projects I've worked on there was such a comment:

```javascript
// If you want to change it, think twice
```

It's not a good comment as it misses the information about why it's important to think twice. But at least I've stopped and carefully thought about it.

**3. TODO comments**

Sometimes there's a job that should be done, but you can't do it right now for some reason. In this case it can be reasonable to leave a "todo" note.

That's super important though to provide the detailed information about the task. There's nothing more frustrating than a bare "todo" in a codebase. Even if that's obvious to you what needs to be done, it might not be that obvious in a couple of weeks, and it definitely won't be obvious for your colleagues.

Of course needless to say that a "todo" note is not an excuse to leave bad code behind.

Scan through "todo"s regularly and eliminate them as fast as you can. Otherwise the codebase will be littered with "todo"s quite quickly.

**4. Legal comments**

Sometimes we're forced to write comments for legal reasons. For example, copyright statements.

**5. Auto-generation of public documentation**

If you're creating a public API it might be very useful to generate the documentation straight from the codebase. But as for the code that is not intended for public consumption such comments are redundant and will do more harm than good.

### Tips and Tricks

**1. Use meaningful names**

Bad:

```javascript
// First Name
const val = "Anastasiya"
```

Good:

```javascript
const firstName = "Anastasiya"
```

**2. Use a variable or a function to convey the information where possible**

Bad:

```javascript
// check if email is valid
if (/\S+@\S+\.\S+/.test(myEmail)) {
  // ...
}
```

Good:

```javascript
function isEmailValid(email) {
  const emailValidationRegex = /\S+@\S+\.\S+/
  return emailValidationRegex.test(email)
}

if (isEmailValid(myEmail)) {
  // ...
}
```

**3. Use short functions and files**

### Conclusion

Sometimes comments are necessary. But more often than not you can avoid them by writing cleaner and more readable code. Use comments only if you fail to express yourself in code.
