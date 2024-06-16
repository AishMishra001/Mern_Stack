import { useState } from 'react'
import useIsOnline from './hooks/UseOnlineHook'
import UseMousePointer from './hooks/UseMousePointer';
// import useDebounce from './useDebounce';
import UseInterval from './hooks/UseInterval';
import useDebounce from './hooks/UseDebounce';




// function App() {
//   const isOnline = useIsOnline() ; 
//   const position = UseMousePointer() ;
//   const clock = UseInterval() ; 

//   if(isOnline){
//     return "You are Online"
//   }
  
//   else{
//     return "You are Offline"
//   }


// return(
//   <div>
//     <h1>Your clock is at {clock}</h1>
//   </div>
// )
// }




const SearchBar = () => {
  const [ value, setValue ] = useState(0);
  const debouncedValue = useDebounce( value, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
     <p>the debouncing value is {debouncedValue}</p>
    <input
      type="text"
      onChange={(e) => setValue (e.target.value)}
      placeholder="Search..."
    />
    </>
  );
};

export default SearchBar;