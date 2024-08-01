import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddSchool from "./pages/AddSchool";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import SiteLayout from "./layouts/SiteLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/school-profile" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/school-profile/add-school" element={<AddSchool />} />
        </Route>
        
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
