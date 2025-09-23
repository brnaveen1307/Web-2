import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <Main />
  </RecoilRoot>
}

function Main(){
  const [networkCount, SetNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return(
    <>
      <button>Home</button>
      
      <button>My Network ({networkCount.networks >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({notificationsAtomCount})</button>
    </>
  )
}

export default App
