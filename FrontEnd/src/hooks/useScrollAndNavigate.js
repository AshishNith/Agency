import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollAndNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (location.pathname !== '/' && !element) {
      // If not on homepage, navigate first then scroll
      navigate('/');
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
      return;
    }

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return { scrollToSection, navigateTo };
};
