import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';



const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />

    </Route>
  ));

  return (<RouterProvider router={router} />)
  
};

export default App;
