import React, { useEffect, useState, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import AdminLayout from './admin/Layout';
import Hero from './Sections/Hero';
import Services from './Sections/Services';
// import Projects from './Sections/NotProjects';
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
import Chatbot from './Components/Chatbot';
import Servises from './pages/Servises';
import Portfolio from './pages/Portfolio';
import ParallaxScroller from './Components/ParallaxScroller';
import Projects from './Sections/Projects';
import AboutTheFounder from './Sections/AboutTheFounder';
import LeadMagnet from './Sections/Leadmagnet';
import GoranInfo from './Sections/GoranInfo';
import WhyUs from './Sections/WhyUs';
import Contact from './pages/Contact';
import ProtectedRoute from './auth/ProtectedRoute';
import CalendlyPage from './pages/CalendlyPage';
import ClientTestimonials from './Sections/ClientTestimonials';
import VoiceAgent from './Components/VoiceAgent';

// Create loading context
export const LoadingContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Initial app load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Modified route change handler
  const handleRouteChange = (type = 'route', path = '') => {
    if (type === 'route' && !isNavigating) {
      setIsNavigating(true);
      setPageLoading(true);
      
      // Shorter timeout for better UX
      setTimeout(() => {
        setPageLoading(false);
        setIsNavigating(false);
      }, 500); // Reduced from 1000 to 500ms
    }
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <LoadingContext.Provider value={{ pageLoading, setPageLoading, handleRouteChange }}>
      <div className="relative overflow-x-hidden bg-black text-white">
        {pageLoading && <Preloader />}
        <VoiceAgent />

        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <NeonAnimatedBg />
                  <Hero />
                  {/* <Contact /> */}
                  <GoranInfo />
                  <WhyUs />
                  <Services />    
                  <Clients />
                  <Projects />
                  <AboutTheFounder />
                  <Process />
                  <Chatbot />
                </React.Fragment>
              }
              />
            <Route 
              path="/services" 
              element={<Servises onLoad={handleRouteChange} />} 
              />
            <Route 
              path="/testimonials" 
              element={<ClientTestimonials />} 
              />
            
            <Route 
              path="/calendlymeet" 
              element={
                <ProtectedRoute>
                  <CalendlyPage onLoad={handleRouteChange} />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/parallax" 
              element={<ParallaxScroller />} 
              />
            <Route 
              path="/about" 
              element={<About onLoad={handleRouteChange} />} 
              />
            <Route 
              path="/portfolio" 
              element={<Portfolio onLoad={handleRouteChange} />} 
              />
            <Route 
              path="/b" 
              element={<Clients onLoad={handleRouteChange} />} 
              />
            <Route 
              path="/contact" 
              element={<Contact onLoad={handleRouteChange} />} 
              />
            {/* <Route path="/work" element={<Work />} /> */}
          </Route>

          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<ProjectHandle />} />
            <Route path="clients" element={<ClientHandle />} />
            <Route path="team" element={<TeamManage />} />
          </Route>
        </Routes>
      </div>
    </LoadingContext.Provider>
  );
};

export default App;
