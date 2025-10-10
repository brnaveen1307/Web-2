import React, { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [render, setRender] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r)
    }, 5000)
  }, [])

  return (
    <>
      {/* <MyComponent /> */}
      {render ? <MyComponent2 /> : <div></div> }
    </>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0)

  const incrementCount = function(){
    setCount(count + 1)
  }

  return(
    <>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </>
  )
}

// class MyComponent extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = { count: 0 }
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render(){
//     return(
//       <>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </>
//     )
//   }
// }

function MyComponent2(){
    useEffect(() => {
      console.error('Component mounted')
  

    return () => {
      console.log('Component unmounted')
    }
  }, [])

  return <div>
    From inside the my component
  </div>

}

  

export default App
