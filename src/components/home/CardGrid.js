import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledCardGrid, StyledCard } from './styles';

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <section>
        <h2>Philosophy</h2>
        <p>
          We work hard to provide the best solution to you. myclub's architecture follows these principles:
          <ul>
            <li>mobile first</li>
            <li>always bet on the web</li>
          </ul>
the latest version of the app is always available as PWA. In a second stage we also support iOS and Android Apps.
        </p>
        <ul className="cards">
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-1.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">association</span>
              <h3>swissunihockey</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-2.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">association</span>
              <h3>swiss volley</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-3.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">feature</span>
              <h3>mobile first</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                et tortor consequat id porta nibh venenatis cras. Mauris
                pellentesque.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-4.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">trust</span>
              <h3>open source</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum dolor sit amet consectetur. Et malesuada fames ac turpis
                egestas.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-5.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">tech</span>
              <h3>data and servers hosted in switzerland</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                viverra aliquet eget sit amet tellus cras.
              </p>
            </div>
          </StyledCard>
        </ul>
      </section>
    </StyledCardGrid>
  );
}
