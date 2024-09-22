import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import Sidebar from './pages/Sidebar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/*' element={<Sidebar />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
