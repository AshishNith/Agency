import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollTo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    
    // If on homepage and element exists, scroll to it
    if (location.pathname === '/' && element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // If not on homepage, navigate and then scroll
    navigate('/');
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return scrollToSection;
};
