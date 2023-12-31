
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route to='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
