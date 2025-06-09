import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import AdminLayout from './admin/Layout';
import Hero from './Sections/Hero';
import Services from './Sections/Services';
import Projects from './Sections/Projects';
import Auth from './pages/Auth';
import AdminDashboard from './admin/Admin';
import Clients from './Sections/Clients';
import Process from './pages/Process';
import NeonAnimatedBg from './Components/NeonAnimatedBg';
import AdminLogin from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import ProjectHandle from './admin/pages/ProjectHandle';
import ClientHandle from './admin/pages/ClientHandle';
import TeamManage from './admin/pages/TeamManage';
import About from './pages/About';

import Preloader from './Components/Preloader';
// import Scroller_ from './Components/Scroller_';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <NeonAnimatedBg />
          {/* <Scroller_ /> */}
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Services />
                    <Projects />
                    <Clients />
                    <Process />
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
            </Route>

            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<ProjectHandle />} />
              <Route path="clients" element={<ClientHandle />} />
              <Route path="team" element={<TeamManage />} />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
