import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../components/AppBar'


const SiteLayout = () => {
  return (
    <>
    <ResponsiveAppBar />
    <Outlet />
    </>
  )
}

export default SiteLayout