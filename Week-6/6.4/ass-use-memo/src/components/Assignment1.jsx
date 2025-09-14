import { useState , useMemo } from 'react'

export function Assignment1() {
  const [input, setInput] = useState(0);

  const expensiveValue = useMemo(function(){
    let value = 1;

    for(let i = 1; i <= input; i++){
      value = value * i;
    }

    return value;
  }, [input]);
  

  return (
    <>
      <input 
      type="number" 
      value= {input} 

      onChange = {function(e){
        setInput(Number(e.target.value))
      }} />

      <p>Calculated Value: {expensiveValue}</p>
    </>
  )
}