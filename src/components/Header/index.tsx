import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="fixed-top bg-white">
        <div className="container py-2">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3">
              <Link to="/">
                <img
                  src="https://via.placeholder.com/100x60?text=Logo"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="col-lg-4">
              <nav className="w-100 d-flex justify-content-end">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/" className="mx-5">
                  Sobre Nós
                </NavLink>
                <AnchorLink offset="100" href="#contato">
                  Contato
                </AnchorLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
