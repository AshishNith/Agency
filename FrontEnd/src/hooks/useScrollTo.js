import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollTo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const isSamePage = location.pathname === '/' || location.pathname === `/${sectionId.toLowerCase()}`;
    
    if (isSamePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${sectionId.toLowerCase()}`);
    }
  };

  return scrollToSection;
};
