import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

const DefaultLayout: React.FC = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
