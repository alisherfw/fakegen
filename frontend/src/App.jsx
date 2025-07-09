import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Builder from './pages/Builder'
import Landing from './pages/Landing'
import Documentation from './pages/Documentation'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/builder' element={<Builder />} />
                <Route path='/documentation' element={<Documentation />} />
            </Routes>
        </Router>
    )
}

export default App
