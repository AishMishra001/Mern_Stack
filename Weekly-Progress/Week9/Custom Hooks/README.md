## CUSTOM HOOKS : 

Custom hooks in React are functions that allow you to reuse stateful logic between different components. They follow the same rules as React hooks (useState, useEffect, etc.) and can call other hooks. Custom hooks start with the prefix "use" to indicate they are hooks and can leverage the power of React's hooks system.

### Why Use Custom Hooks?

#### Code Reusability:
 Encapsulate common logic in a hook to avoid code duplication.
#### Separation of Concerns: 
Separate logic from UI components, making code easier to understand and maintain.
#### Abstraction:
 Create high-level abstractions to handle complex logic, which can simplify component code.

 Hooks that you create yourself, so other people can use them are called custom hooks.

### A custom hook is effectively a function, but with the following properties - 
#### Uses another hook internally (useState, useEffect, another custom hook)
####  Starts with 'use'

### A few good examples of this can be -

1. Data fetching hooks
2. Browser functionality related hooks - useOnlineStatus , useWindowSize, useMousePosition
3. Performance/Timer based - useInterval, useDebounce

