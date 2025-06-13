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
import Blog from './pages/Blog';
import ParallaxScroller from './Components/ParallaxScroller';
import Projects from './Sections/Projects';
import AboutTheFounder from './Sections/AboutTheFounder';
// import Work from './pages/Works';
// import Scroller_ from './Components/Scroller_';

// Create loading context
export const LoadingContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  // Initial app load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Handle route transitions
  const handleRouteChange = () => {
    setPageLoading(true);
    setTimeout(() => setPageLoading(false), 1000);
  };

  if (loading) {
    return <Preloader />;
  }

  // Add sectionRefs prop to Hero and other components
  return (
    <LoadingContext.Provider value={{ pageLoading, setPageLoading, handleRouteChange }}>
      <div className="relative overflow-x-hidden">
        <NeonAnimatedBg />
        {pageLoading && <Preloader />}
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                // Wrap components in a React.Fragment or div to ensure proper mounting
                <React.Fragment>
                  <Hero />
                  <AboutTheFounder />
                  <Projects />
                  <Services />    
                  <Clients />
                  <Process />
                  {/* <Chatbot /> */}
                </React.Fragment>
              }
            />
            <Route 
              path="/services" 
              element={<Servises onLoad={handleRouteChange} />} 
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
              path="/blog" 
              element={<Blog onLoad={handleRouteChange} />} 
            />
            <Route 
              path="/b" 
              element={<Clients onLoad={handleRouteChange} />} 
            />
            {/* <Route path="/work" element={<Work />} /> */}
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
      </div>
    </LoadingContext.Provider>
  );
};

export default App;
