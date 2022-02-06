import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledCardGrid, StyledCard } from './styles';

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <section>
        <h2>Our values</h2>
        <p>
          We work hard to provide the best solution to you. myclub's architecture follows these principles: <b>mobile first & always bet on the web</b>
the latest version of the app is always available as PWA. In a second stage we also support iOS and Android Apps.
        </p>
        <ul className="cards">

          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-1.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">feature</span>
              <h3>mobile first</h3>
              <p>
                myclub works best on your smartphone. We use latest web technology provided by ionicframework, capacitor and angular. 
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card1`}>
            <StaticImage src="../../images/pugs/pug-2.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">trust</span>
              <h3>open source</h3>
              <p>
                Not sure what happens with your data? have a look at github and checkout the code. Wanna help to improve the app? Submit a PR.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card2`}>
            <StaticImage src="../../images/pugs/pug-3.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">tech</span>
              <h3>data and servers hosted in switzerland</h3>
              <p>
                your data stays in switzerland. we use powerful cloud services, all hosted in switzerland.
              </p>
            </div>
          </StyledCard>
                    <StyledCard as="li" title={`Project`} key={`Card3`}>
            <StaticImage src="../../images/pugs/pug-1.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">association</span>
              <h3>swissunihockey</h3>
              <p>
                With the integration of the swissunihockey api, you will never miss a game again. Checkout the latest stadings of your team and plan your next win!
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card4`}>
            <StaticImage src="../../images/pugs/pug-4.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">association</span>
              <h3>swiss volley</h3>
              <p>
                With the integration of the swiss volley api, you will never miss a game again. Checkout the latest stadings of your team and plan your next win!
              </p>
            </div>
          </StyledCard>
        </ul>
      </section>
    </StyledCardGrid>
  );
}
