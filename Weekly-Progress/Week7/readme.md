# Week 6 Important points : 

## Routing : 

1. Single Page Applications : Single-page applications (SPAs) are web applications that load a single HTML page and dynamically update the content as the user interacts with the application. In React, SPAs are typically created using client-side routing and a client-side bundle.

2. Client Side Routing : Client-side routing is a technique used in single-page applications (SPAs) to navigate between different views or pages without requiring a full page reload. This is achieved by using JavaScript to manipulate the browser's history and URL, and to update the DOM with the new view or page.

In React, client-side routing is typically implemented using the react-router library. This library provides a set of components and hooks that can be used to define routes, navigate between them, and access route parameters and query strings.

3. Client Side Bundle : A client-side bundle is a collection of JavaScript, CSS, and other assets that are loaded by the browser when a user visits a web page. In the context of React, a client-side bundle typically includes the React library, the application code, and any third-party libraries or dependencies.

4. Routing : Routing in React is the process of navigating between different views or pages in a single-page application (SPA). In React, routing is typically implemented using the react-router library, which provides a set of components and hooks for defining routes, navigating between them, and accessing route parameters and query strings.

5. UseNavigate() hook : 
The useNavigate hook is a part of the react-router-dom library in React. It is used to navigate between different routes in a React application. The useNavigate hook returns a function that can be used to navigate to a different route.

6. Note that useNavigate() works when it is under a parent <BrowserRouter> component.

7. Lazy Loading:  It's a technique used to improve the performance of a web application by loading only the necessary code and data when it is needed, rather than loading everything at once. In React, lazy loading can be achieved using the React.lazy function and the Suspense component.

8. Note that when you are appling lazy loading, you have to wrap the component with <Suspense> component. Also you have to export the component as default so that object destructing can be avoided . 

9. The Suspense component is a built-in component in React that allows you to specify a fallback UI to be displayed while a component is being loaded asynchronously using the React.lazy function.
