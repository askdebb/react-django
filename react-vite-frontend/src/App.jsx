import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AddSchool from './pages/AddSchool';
import MainLayout from './layouts/MainLayout';



const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/add-school' element={<AddSchool />} />
  

    </Route>

  ));

  return (<RouterProvider router={router} />)
  
};

export default App;
