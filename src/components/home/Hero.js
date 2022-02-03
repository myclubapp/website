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
              Hi there 
              <span role="img" aria-label="Hand wave emoji">
                👋
              </span>{' '}
            </span>
            This is <span className="gatsby">myclub | the next generation</span>. 
          </h1>
          {
            //#region
          }
          {
            //#endregion
          }
        </div>
        <h2>
        myclub is the way to manage your club. Based on real data from swissunihockey, swiss volley and swiss handball and swiss basketball association, we generate real value for your teammates. Check out the app {' '}
          <a
            href="https://unihockeyclub.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}
          and focus on what matters most, your success! <span>{isDark ? '😍' : '😎'}</span>
        </h2>
      </section>
    </StyledHero>
  );
}
