import React, { useState, useEffect } from 'react'

function usePrev(value){
    const [lastValue, setLastValue] = useState(null)
    const [lastToLastValue, setLastToLastValue] = useState(null)

    useEffect(() => {
        setLastToLastValue(lastValue)  
    }, [value])

    return lastToLastValue
}