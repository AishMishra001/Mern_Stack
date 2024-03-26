   
 ## Note : 
  1. using <div> </div> below leads to an extra parent div in the html code render 
  2. to remove this extra parent div we can use <> </> in place of <div> </div> 
  3. a we have to use a parent element anyways 
  4. Also <React.Fragment> </React.Fragment> 
  



### Note : 
1. In react we will eventually have to make a parent component which have childs and thoughs childs also have childs ...like a tree . 
                           
                                                     [1]
                                                    /  \   
                                                   [2]  [3]
                                                 / | \  | \
                                              [4][5][6] [7] [8]

2. So if it has a state variable which has to change say 6 only than we keep it at the lowest comman  asester which in this case is [2] 

3. Why can't we put it in 6 itself? because it can only go down in the tree not up means that if we put the state varible in 6 itself and say it is needed in 5 so there won't be any way to do so 

4. There is another way to handle it issue by using React.memo()

5. React.memo() is a higher-order component provided by React that you can use to memoize functional components.

6. Memoization in this context means that React will only re-render the component if its props have changed. 

7. This can be helpful in optimizing performance, especially for components that are expensive to render but have the same output given the same props.

8. When rendering a list of items in React, it's important to provide a unique key to each item in the list. The key prop is a special string attribute you can add to the elements in the list.

9. The key prop helps React identify which items have changed, added, or removed. React uses the key prop to efficiently update and render the list of items.

10. When the key prop changes, React will create a new DOM element for that item. If the key prop remains the same, React will update the existing DOM element instead of recreating it.

11. useEffect Hook : 

Here is the syntax for the useEffect hook in React:

useEffect(callback, [dependencies]);

callback: A function containing the side effects to perform. This function will be executed after the component is rendered and when its dependencies change.

dependencies: An array of variables that the effect depends on. If this array is empty, the effect will run only once, after the initial render (component mount). If this array contains variables, the effect will run after the initial render and then whenever any of the variables in the array change.

12. Side effects in react : 

In React, a "side effect" generally refers to any action that a component performs in addition to rendering its output, such as:

Fetching data from an API or server
Updating the browser's URL or title
Setting up event listeners or timers
Manipulating the DOM directly
Updating some global state outside of React
Side effects are typically handled in React using the useEffect hook 

13. React Hooks : 
Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class. They are functions that "hook into" React state and lifecycle methods from functional components . 

React provides a few built-in Hook : 

useState
useEffect
useContext
useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue

14. Lifecycle methods : 
Lifecycle methods are special methods that automatically get called as a part of a component's life cycle in React. They allow you to run code at different points in a component's life, such as when a component is first created, when it is updated, and when it is destroyed.

There are three categories of lifecycle methods in React:
Mounting - Called when a component is first created and inserted into the DOM.
Updatting - Called whenever one or more of the component’s props change.
Unmounting - Calalled just before a component is removed from the DOM.

15. useState() : Let’s you describe the state of your app 
Whenever state updates, it triggers a re-render 
which finally results in a DOM update 

Syntax : const[state, setState] = useState(initialState)

setState accepts a function that receives the previous state as its argument.

16. useEffect() :  The useEffect hook is a built-in hook in React that allows you to perform side effects, such as fetching data, updating the DOM, or updating global state, in a functional component.

The useEffect hook has the following syntax:


       useEffect(callback function , [dependencies])

The callback parameter is a function that contains the side effects that you want to perform. The callback function will be called after the component has rendered, and it can be used to perform tasks such as fetching data, updating the DOM, or updating global state.

The dependencies parameter is an optional array of variables that the useEffect hook should watch for changes. If any of the variables in the dependencies array change, the callback function will be called again. If the dependencies array is empty, the callback function will be called only once, after the component has rendered.

17. useMemo() : The useMemo hook is a built-in hook in React that allows you to memoize a value, which is a value that is only recalculated when its dependencies change. The useMemo hook is used to optimize the performance of a component by reducing the number of unnecessary re-calculations and re-renders.

The useMemo hook has the following syntax : 
       const memoizedValue = useMemo(callback, dependencies)

The callback parameter is a function that contains the value that you want to memoize. The callback function will be called after the component has rendered, and it will return the memoized value. 

18. useCallback() : The useCallback hook is a built-in hook in React that allows you to memoize a function, which is a function that is only recreated when its dependencies change. The useCallback hook is used to optimize the performance of a component by reducing the number of unnecessary re-creations and re-renders.

The useCallback hook has the following syntax:
const memoizedFunction = useCallback(callback, dependencies)

The callback parameter is a function that you want to memoize. The callback function will be returned as the memoizedFunction. The dependencies parameter is an optional array of variables that the useCallback hook should watch for changes. If any of the variables in the dependencies array change, the memoizedFunction will be recreated with the new callback function. If the dependencies array is empty, the memoizedFunction will be created only once, and it will not be recreated again.