# ReactJS Interview Notes

## What is ReactJS?
ReactJS is a JavaScript library for building user interfaces using reusable components. It uses a virtual DOM to make updates fast and is written in JSX, which lets you write HTML-like code in JavaScript.

---

## Important Features of React
- **Virtual DOM:** React keeps a copy of the real DOM in memory and updates it efficiently.
- **Component-Based:** UI is made from small, reusable pieces called components.
- **Hooks:** Hooks let you use state and other features in function components.

---

## What is MVC Architecture?
MVC stands for Model-View-Controller. It splits an app into three parts:
- **Model:** Handles data and logic
- **View:** Handles what you see (UI)
- **Controller:** Connects Model and View

---

## What is a Key in React?
A key is a unique identifier for items in a list. It helps React know which items changed, were added, or removed.

---

## What is Express.js?
Express.js is a simple web framework for Node.js. It makes building web servers and APIs easier.

---

## What is Spring Boot?
Spring Boot is a Java framework for building web apps and APIs quickly, with less setup.

---

## What are JavaScript Cookies?
Cookies are small pieces of data stored on your computer by websites. They remember information about you.

### How to Create a Cookie in JavaScript?
Set a cookie by assigning a string to `document.cookie`:
```js
document.cookie = "username=John";
```

---

## What is Conditional Rendering in React?
Conditional rendering means showing different components or content based on certain conditions.

---

## What is React Router?
React Router is a library that lets you add navigation and different pages to your React app.

---

## What is `this.setState` in React?
`setState()` is a function to update a component's state and re-render it.

---

## What is the use of `ref` in React?
Refs let you directly access a DOM element or a React component.

---

## What are Hooks in React?
Hooks let you use state and other React features in function components, without writing a class.

---

## What is `useEffect` in React?
`useEffect` lets you run code after rendering, like fetching data or updating the DOM. It's similar to lifecycle methods in class components.

---

## What is the Aggregation Framework in MongoDB?
It's a way to process and transform data in MongoDB using a series of steps (pipeline), like filtering, grouping, and sorting.

---

## What is Write Concern in MongoDB?
Write Concern controls how many MongoDB servers must confirm a write before it's considered successful.

---

## What is an API?
An API is a set of rules that lets different software talk to each other.

---

## What is CORS in Express.js?
CORS (Cross-Origin Resource Sharing) is a way to let your server accept requests from other websites. In Express, you use CORS middleware to control this.

---

## What is Hoisting in JavaScript?
Hoisting means variables and functions are moved to the top of their scope before the code runs.

---

## Difference Between `localStorage` and `sessionStorage`
- **localStorage:** Data stays even after closing the browser.
- **sessionStorage:** Data is gone when you close the tab or browser.

---

## How to Reduce Page Loading Time?
- Use image formats like WebP for smaller file sizes
- Use a CDN to serve files from servers closer to users
- Use lazy loading to load images only when needed

---

## Difference Between SOAP and REST

| Aspect           | SOAP                        | REST                                 |
|------------------|-----------------------------|--------------------------------------|
| What it is       | Strict protocol             | Flexible style                       |
| Data Format      | Only XML                    | JSON, XML, or plain text             |
| Connection Type  | Can be stateful or not      | Stateless                            |
| How it Works     | Own rules for messages      | Uses standard web methods            |

**Summary:**
- SOAP is strict and good for complex, secure apps.
- REST is simple and good for fast, scalable web services.

---

## How is GraphQL Different from REST?
- **REST:** You get data from specific endpoints and may get extra data you don't need.
- **GraphQL:** You ask for exactly the data you want in one request.

---

## What is the DOM?
The DOM (Document Object Model) is a tree-like structure of a web page. JavaScript can use the DOM to change the page content and style.

---

## Event Bubbling vs. Capturing in JavaScript
- **Capturing:** Event goes from the top (root) down to the target element.
- **Bubbling:** Event goes from the target element up to the root.

---

## What is 'use strict' in JavaScript?
`'use strict'` makes JavaScript catch more errors and behave in a safer way.

---

## React Hooks
- `useState`: Lets you add state to function components.
- `useEffect`: Lets you run code after rendering.
- `useContext`: Lets you use context (shared data) in components.

---

## Component Lifecycle
- **Mount:** Component is created and added to the DOM.
- **Update:** Component is updated (props or state change).
- **Unmount:** Component is removed from the DOM.

---

## What is Context API?
Context API lets you share data (like theme or user info) across components without passing props manually.

---

## What is Server-Side Rendering (SSR)?
SSR means the server creates the HTML for a page and sends it to the browser. This makes pages load faster and helps with SEO.

---

## What is Redux in React?
Redux is a tool to manage global state in React apps. It keeps all shared data in one place, so any component can access it.

---

## Asynchronous and Non-blocking Programming
- **Asynchronous:** Start a task and move on without waiting for it to finish.
- **Non-blocking:** Code keeps running while waiting for tasks (like reading files) to finish.

---

## What is the Event Loop in Node.js?
The event loop lets Node.js handle many tasks at once, even though JavaScript runs on a single thread.

---

## What is Middleware in Express.js?
Middleware is a function that can change the request or response, or end the request, or pass it to the next function.

---

## How Does Node.js Handle Child Threads?
Node.js can use worker threads for parallel tasks and child processes for separate tasks. Most work is done using the event loop and non-blocking code.

---

## What is Callback Hell and How to Fix It?
Callback hell is when you have lots of nested callbacks, making code hard to read. You can fix it by using promises or async/await to make code cleaner.

