import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard = lazy( () =>  import('./components/dashboard'))
const Landing = lazy( () =>  import('./components/landing'))
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback = {"loading..."}><Dashboard /> </Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /> </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();

  return (
      <div>
        <button onClick={function(){
          navigate("/")
        }}>Landing Page</button>
          
        <button onClick={function(){
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
  )
}

export default App
