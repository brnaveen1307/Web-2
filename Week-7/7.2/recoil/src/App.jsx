import { countAtom } from './store/atoms/count'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRecoilValue , RecoilRoot , useSetRecoilState} from 'recoil'
import './App.css'

function App() {

  return (
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot> 
    </>
  )
}

function Count(){
  return <div>
    <RecoilRoot>
      <CountReRender />
      <Buttons />
    </RecoilRoot>
  </div>
}

function CountReRender(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "It is even" : null}
  </div>
  
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={function(){
      setCount(count => count + 1)
    }}>Increase</button>
    <button onClick={function(){
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
