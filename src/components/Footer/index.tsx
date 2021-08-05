import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <h4 className="fw-bold">SERVIÇOS</h4>
                <Link to="/" className="d-block">
                  Home
                </Link>
                <Link to="/" className="d-block my-3">
                  Sobre Nós
                </Link>
                <Link to="/" className="d-block">
                  Contato
                </Link>
              </div>
              <div className="col-lg-4">
                <h4 className="fw-bold">INSTITUCIONAL</h4>
                <Link to="/" className="d-block">
                  Home
                </Link>
                <Link to="/" className="d-block my-3">
                  Sobre Nós
                </Link>
                <Link to="/" className="d-block">
                  Contato
                </Link>
              </div>
              <div className="col-lg-4">
                <h4 className="fw-bold">INFRAESTRUTURA</h4>
                <Link to="/" className="d-block">
                  Home
                </Link>
                <Link to="/" className="d-block my-3">
                  Sobre Nós
                </Link>
                <Link to="/" className="d-block">
                  Contato
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34802.82519278728!2d-46.890618869211586!3d-23.525438646487423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01428c164399%3A0x774c0cf86f39ba78!2sR.%20Ces%C3%A1rio%20Verde%2C%20187%20-%20Jardim%20Tupa%2C%20Barueri%20-%20SP%2C%2006435-050!5e0!3m2!1spt-BR!2sbr!4v1628119286204!5m2!1spt-BR!2sbr"
              title="maps"
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
