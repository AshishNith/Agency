import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import AdminLayout from './admin/Layout'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Projects from './Sections/Projects'
import Auth from './pages/Auth'
import AdminDashboard from './admin/Admin'
import Clients from './Sections/Clients'
import Process from './pages/Process'
import NeonAnimatedBg from './Components/NeonAnimatedBg'


const App = () => {
  return (
    <div className='relative bg-black overflow-x-hidden'>
      <NeonAnimatedBg />
    <Routes>
      <Route element={<Layout />}>
      
        <Route path="/" element={
          <>
          
          <Hero />
          <Services />
          <Projects />
          <Clients />
          <Process />
          </>
          
        } />
        
      </Route>
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/auth" element={<Auth />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="projects" element={<Projects />} />
        {/* Add other admin routes here */}
      </Route>
    </Routes>
    </div>
  )
}

export default App