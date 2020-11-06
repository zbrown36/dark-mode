import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'


function useDarkMode(key, initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
        // Now to add the class to the body.If we need to manipulate the DOM directly, 
        // how do we do that ? Any direct DOM manipulation is considered a side effect, right ? 
        // So let's use the effect hook. -Import and set up your effect hook. 
    useEffect(()=>{
        // Inside it, check to see if the value from useLocalStorage is true or false.
        if (darkMode){
            let body = document.querySelector('body')
            //If it's true, add the class dark-mode to the body element
            body.classList.add('dark-mode')
        } else {
            let body = document.querySelector('body')
            //If it's false, remove the class from the body element.
            body.classList.remove('dark-mode')
        }
        //We don't want this effect to run every time anything in the component changes, right? 
        //Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.
    }, [darkMode]);

    const toggleMode = (e) => {
        console.log(e)
        e.preventDefault();
        setDarkMode(!darkMode);
    };
// Forward the value and the setter that were returned out of the useLocalStorage call. 
//Return those two values in an array as well.
    return [darkMode, toggleMode];

}

export default useDarkMode