import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function AboutPage() {
  return (
    <Main>
      <Seo title="About" description="About Us page" />
      <StyledAbout>
        <h1>About</h1>
        <div>
          <div className="section starter">
            <h2>myclub | the next generation</h2>
            <p>This app is used to manage (sports-) clubs in switzerland.</p>
          </div>
          <div className="section tech">
            <h2>Integrations</h2>
            <ul>
              <li>
                <a
                  className="gatsby"
                  href="https://www.swissunihockey.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swissunihockey:
                </a>{' '}
                News, Clubs, Teams, Statistics, Championship and Cup Data is
                supported..
              </li>
              <li>
                <a
                  className="emotion"
                  href="https://swissvolley.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swiss volley:
                </a>{' '}
                All regions supported (RVNO, GSGL, national... ), News, Clubs,
                Teams, Championship and Cup Data is supported...
              </li>
              <li>
                <a
                  className="tailwind"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swiss handball:
                </a>{' '}
                News, Clubs, Teams, Championship and more is supported.
              </li>
            </ul>
          </div>
          <div className="section features">
            <h2>Features</h2>
            <ul>
              <li>Opensource </li>
              <li>Dark & Light Theme</li>
              <li>Mobile friendly</li>
              <li>Offline support</li>
              <li>
                Wanna contribute? Open a PR on{' '}
                <a
                  href="https://github.com/myclubapp/app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
