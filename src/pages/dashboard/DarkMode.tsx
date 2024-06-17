import React, { useContext } from 'react'
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from '../../context/theme';
import { Switch } from '@headlessui/react';

const DarkMode = () => {
  const {theme,setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme = "";

    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  
  return (
    <div className="bg-gray-400 flex justify-between">     
      <Switch onClick={() => toggleTheme} className='items-center mr-3'>
        <div>
          {theme === "dark" ? (
            <SunIcon className="h-8 w-8 shadow-lg shadow-slate-400" />
            ) : (
            <MoonIcon className="h-6 w-6 shadow-lg shadow-slate-400" />
            )}
        </div>
      </Switch>
    </div>
  )
}

export default DarkMode;