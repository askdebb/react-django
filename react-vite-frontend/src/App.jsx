import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './pages/Home/Homepage';
import AddSchool from './pages/AddSchool/AddSchool';

const App = () => {
  return (
    <div >
      <Header />
      <div className='bg-white h-100vh'>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/add-school" element={<AddSchool />} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App