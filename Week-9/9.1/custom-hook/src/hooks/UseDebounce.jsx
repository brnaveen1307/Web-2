import React, { useState, useEffect, use} from 'react'
import useDebounce from './UseDebounce';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timerId)
        }
    }, [value, delay]) 

    return debouncedValue
}

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500);

    useEffect(() => {
      fetch("")  
    }, [debouncedValue])

    return(
        <>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
            />
        </>
    )
}

export default SearchBar
