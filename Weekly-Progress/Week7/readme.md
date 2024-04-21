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


## Prop Drilling 

1. The rule of thumb is to push down state as much as possible to the Least Common Ansester (LCA) of the components that need it.

2. Prop drilling is a term used to describe the process of passing props down through multiple levels of a component tree in React. This can make the code harder to maintain and understand, as it requires passing props through components that do not need to use them.

3. Note that prop drilling has nothing to do with re-rendering .

4. The problem with passing props ; 

Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.

5. The Context API is a built-in feature in React that allows you to share state and other data between components without having to pass props down through multiple levels of the component tree.

6. This can be especially useful when you have a complex component hierarchy and need to share state or data between components that are far removed from each other.

7. createContext() : 

The createContext() method is a built-in method in React that is used to create a context object. A context object is used to share state and other data between components without having to pass props down through multiple levels of the component tree.

8. Using the context api requires three steps: 

step 1. Create a context object using the createContext() method and export it .

step 2. Create a provider component that will be used to wrap the components that need access to the shared data.
  (we use Context_name.Provider in this)

step 3. Create a consumer component that will be used to access the shared data in the child . 
  (we use useContext() hook for this)

9. So there are two things in context api : 

to create it we use : createContext() in a file and export it . 

and 

to use it we use : useContext() 

10. Why do use ContextApi ?? 

A. To make rendering more performant (NO)

B. To make syntax clean and get rid of prop drilling (YES)

C. To make it easier to share data between components (YES)

D. To make it easier to share data between components (YES)


### Problem with Context api : 

------------ doesn't fixes the re-rendering problem , only fixed prop drilling .----------- 

## State Management Library : 

1. Recoil : 

  const [count,setCount] = useState() ;

  from here : useRecoilState() is same as useState() 
              count is same as useRecoilValue(Atom_Name) 
              setCount is same as useSetRecoilState() 

. <RecoilRoot> : Any component that uses the recoil logic should be wrap inside a <RecialRoot> </RecoilRoot>              

state in a normal react application is atom in recoil 

2. In Recoil, atoms are used to represent the state of your application. An atom is a piece of state that can be read and written by any component in your application.

3. To create an atom in Recoil, you can use the atom function, which takes an object with the following properties:

key: A unique string that identifies the atom.

default: The initial value of the atom.

4. selectors : In Recoil, selectors are used to derive data from atoms. A selector is a function (selector({
  
})) that takes one or more atoms as input and returns a derived value.

To create a selector in Recoil, you can use the selector function, which takes an object with the following properties:

key: A unique string that identifies the selector.
get: A function that returns the derived value of the selector.
set (optional): A function that sets the value of the selector. 

5. Async Data Queries : Say we have a list of data that we have to render on screen using recoil . 

so then in the atom defination the default value will become a selector like this : 

const UserInfoState = atom({
  key: 'UserInfo',
  default: selector({
    key: 'UserInfo/Default',
    get: ({get}) => myFetchUserInfo(get(currentUserIDState)),
  }),
}); 

and as selector can take two values key and get , so we can use get to fetch the data from the server . 

6. 

7. 

## Axios library : 

1. rfce : vc code shortcut to make function component 