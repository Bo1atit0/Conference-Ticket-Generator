import './App.css'
import Homepage from './pages/homePage/homepage'
import Form from './pages/form/form'
import Ticket from './pages/ticket/ticket'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <Router>

      <Routes>
        <Route path='/' element= {<Homepage />}/>
        <Route path='/form' element= {<Form />} />
        <Route path='/ticket' element= {<Ticket />} />
      </Routes>
    </Router>
  )
}

export default App
