import { useState } from 'react'
import { useRecoilValue , RecoilRoot , useRecoilState} from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { networkAtom , jobsAtom, messagingAtom, notificationsAtom,   } from './Atoms'

function App() {
  return <RecoilRoot>
    <Main />
  </RecoilRoot>
}

function Main(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const totalNotificationsCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <ButtonUpdater />
    </>
  )
}

import { useSetRecoilState } from 'recoil'

function ButtonUpdater(){
  const setMessagingAtomCount = useSetRecoilState(messagingAtom)
  return (
    <button onClick={function(){
      setMessagingAtomCount(c => c + 1)
    }}>Me</button>
  )
}

export default App
