import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const SearchBar = () => {
    
    const showSearch = useSelector((store) => store.search.showSearch);
    const searchElement = useRef();

    useEffect(() => {
        if (showSearch && searchElement.current) {
          searchElement.current.focus();
        }
      }, [showSearch]);


  return (
    <div className='text-white w-full flex justify-center items-center'>
        <input ref={searchElement} className='w-1/2 rounded-lg bg-black border border-white px-2 py-1 mx-auto' type="text"  placeholder='Search'/>
    </div>
  )
}

export default SearchBar;