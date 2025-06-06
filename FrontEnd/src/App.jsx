import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import AdminLayout from './admin/Layout'
import Hero from './Components/Sections/Hero'
import Services from './Components/Sections/Services'
import Projects from './Components/Sections/Projects'
import Auth from './pages/Auth'
import AdminDashboard from './admin/Admin'
import Clients from './Components/Sections/Clients'
import Process from './pages/Process'


const App = () => {
  return (
    <div className='relative bg-black overflow-x-hidden'>
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