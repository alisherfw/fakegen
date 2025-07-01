import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Builder from './pages/Builder'
import Landing from './pages/Landing'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/builder' element={<Builder />} />
            </Routes>
        </Router>
    )
}

export default App
