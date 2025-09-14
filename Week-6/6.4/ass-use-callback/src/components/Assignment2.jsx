import { useState, memo, useCallback } from 'react'

export function Assignment2(){
    const [inputText, setinputText] = useState("");

    const showAlert = useCallback(function(){
        alert(inputText);
    }, [inputText])

    return (
        <div>
            <input 
                type="text"
                value={inputText}
                onChange={function(e){
                    setinputText(e.target.value)
                }}
                placeholder="Enter some text"
            />

            <Alert showAlert={showAlert} />

        </div>
    )
}

function Alert({showAlert}) {
    return <button onClick={showAlert}>Show Alert</button>
}