import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <>
       <div className="layout-container">
        <NavBar />
        
        <Outlet />
        
        <footer className="footer bg-dark text-white text-center py-3">
            codeBOLT | &copy; {new Date().getFullYear()} School Profiler. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default MainLayout