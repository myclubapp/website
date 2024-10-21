import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import useTheme from '@hooks/use-theme';
import { StyledHero } from './styles';

export default function Hero() {
  const { isDark } = useTheme();
  return (
    <StyledHero>
      <section>
        <div className="hero-welcome">
          <h1>
            <span className="greeting">
              Grüezi
              <span role="img" aria-label="Hand wave emoji">
                👋
              </span>{' '}
            </span>
            This is <span className="gatsby">myclub | the next generation</span>
            .
          </h1>
          {
            //#region
          }
          {
            //#endregion
          }
        </div>
        <h2>
        Willkommen bei  <span className="gatsby">myclub | the next generation</span> – die umfassende Lösung für die Verwaltung deines Vereins! Egal ob Unihockey, Handball oder Volleyball, <span className="gatsby">myclub</span> bietet dir alles, was du für ein effizientes Vereinsmanagement benötigst. 
        Entdecke die  {' '}
          <a href="https://my-club.app/docs/" target="_self" rel="noopener noreferrer">
          App
          </a>{' '} hier und konzentriere dich auf das, was wirklich zählt: 
          deinen Erfolg!{' '}
          <span>{isDark ? '😍' : '😎'}</span>
        </h2>
      </section>
    </StyledHero>
  );
}
