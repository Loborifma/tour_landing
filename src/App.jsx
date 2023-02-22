import { Route, Routes } from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar'
import HomePage from './pages/home_page/HomePage'
import TourPage from './pages/tour_page/TourPage'
import ContactPage from './pages/contact_page/ContactPage'
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route path='tour' element={<TourPage/>}/>
          <Route path='contacts' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
