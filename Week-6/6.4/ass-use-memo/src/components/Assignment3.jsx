import { useState, useMemo } from 'react'

export function Assignment3() {
  const [items, setItems] = useState([
    { name: 'Chocolates', value: 10 },
    { name: 'Chips', value: 20 },
    { name: 'Onion', value: 30 },
    { name: 'Tomato', value: 30 },
    { name: 'Potato', value: 30 },
  ])

  // compute totalValue from `input` and memoize it so it's only recalculated when `input` changes
  const totalValue = useMemo(() => {
    let totalValue = 0;
    for (let i = 0; i < items.length; i++){
        totalValue = totalValue + items[i].value;
    }

    return totalValue
  }, [items])

  return (
    <>
      <ul>
        {items.map(function (item, index) {
          return (
            <li key={index}>{item.name} - Price: ${item.value}</li>
          )
        })}
      </ul>

      <p>Total Value: $ {totalValue}</p>
    </>
  )
}