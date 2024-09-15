import { Route, Routes } from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import SignIn from './pages/SignIn'
import Sidebar from './pages/Sidebar'

function App() {
  return ( 
    <>
      <Routes>
        <Route path='/sign-in' element={ <SignIn /> } />
        <Route path="/*" element={ <Sidebar /> } />
      </Routes>
    </>
  )
}

export default App
