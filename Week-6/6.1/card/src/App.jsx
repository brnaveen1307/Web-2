import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <CardWrapper>
        <div>
          Hey there!
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
          This is a card component
        </div>
      </CardWrapper>
    </>
  )
}

function CardWrapper({children}){
  console.log(children)
  return <div style={{border: "2px solid black", padding: "10px", margin: "10px"}}>
    {children}
  </div>
}

export default App
