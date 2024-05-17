import React, { useState } from 'react';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`p-5 ${darkMode ? 'dark' : ''}`}>

      <h1 className='text-center text-lg text-blue-400'>
        Hare Krishna
      </h1>

      <div className='w-full h-10 bg-violet-200 border-violet-600 border-2 rounded-md my-4 p-2'>
        <p className='text-center font-mono font-extrabold'> 
          A div
        </p>
      </div>

      {/* layout */}
      <div className='fixed w-10 h-10 bg-red-500 top-0'></div>
      <div className='flex justify-between'>
        <div className='w-10 h-10 rounded-full bg-green-500'></div>
        <div className='w-10 h-10 rounded-full bg-green-500'></div>
        <div className='w-10 h-10 rounded-full bg-green-500'></div>
        <div className='w-10 h-10 rounded-full bg-green-500'></div>
      </div>

      <div className='grid grid-cols-3 gap-2 mt-3'>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
      </div>

      <div className='md:block hidden'>
        <p>I will appear if the screen size &gt; 786px</p>
      </div>
      <div className='max-md:block hidden'>
        <p>I will appear if the screen size &lt; 786px</p>
      </div>

      <button className='bg-blue-400 my-2 px-3 py-1 rounded-md border-2 border-black text-white hover:bg-blue-700'>
        Click Me !! 
      </button>

      <ul className='space-y-2 my-2'>
        <li className='bg-white p-2 first:bg-yellow-400'>Item-1</li>
        <li className='bg-white p-2 first:bg-yellow-400 odd:bg-blue-200 even:bg-green-400'>Item-2</li>
        <li className='bg-white p-2 first:bg-yellow-400 odd:bg-blue-200 even:bg-green-400'>Item-2</li>
        <li className='bg-white p-2 first:bg-yellow-400 odd:bg-blue-200 even:bg-green-400'>Item-2</li>
        <li className='bg-white p-2 first:bg-yellow-400 odd:bg-blue-200 even:bg-green-400'>Item-2</li>
        <li className='bg-white p-2 first:bg-yellow-400 odd:bg-blue-200 even:bg-green-400'>Item-2</li>
      </ul>

      {/* theme dark */}
      <div className='card'>
        <h3 className='text-base font-medium tracking-tight dark:text-slate-200'>This is a text element</h3>
        <p className='py-2 text-sm text-slate-500 dark:text-slate-300'>This is a even long p tag elment</p>

        <button id='toggleDark' className='text-blue-700 mt-5 px-6 py-2 bg-blue-100 rounded-md hover:bg-blue-500 hover:text-white' onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
      
      <p className='text-chestnut p-5 bg-stone-200 rounded-lg'>
        Chestnut Colour
      </p>
    </div>
  );
}



export default App;
