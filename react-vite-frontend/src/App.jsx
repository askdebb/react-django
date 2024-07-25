import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddSchool from './pages/AddSchool';
import TopLeftCard from './components/TopLeftCard';
import RightHomeSectionContainer from './components/RightHomeSectionContainer';
import Intro from './components/Intro';

const App = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);

  const fetchSchools = async () => {
    const serverURL = `http://127.0.0.1:8000`;

    try {
      const res = await axios.get(`${serverURL}/schools`);
      setSchools(res.data);
    } catch (error) {
      console.error('Error fetching schools:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <Router>
      <Layout
        leftCard={<TopLeftCard schools={schools} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />}
        schoolDetail={<RightHomeSectionContainer selectedSchool={selectedSchool} />}
        homeIntro={<Intro />}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-school' element={<AddSchool />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
