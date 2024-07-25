import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddSchool from './pages/AddSchool';
import TopLeftCard from './components/TopLeftCard';
import RightHomeSectionContainer from './components/RightHomeSectionContainer';
import Intro from './components/Intro';

const App = () => {
  return (
    
    <Router>
        <Layout leftCard={<TopLeftCard />} schoolDetail={<RightHomeSectionContainer />} homeIntro={<Intro />}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/add-school' element={<AddSchool />}/>
          </Routes>
        </Layout>

    </Router>
    
  )
}

export default App