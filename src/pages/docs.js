import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function AboutPage() {
  return (
    <Main>
      <Seo title="my club | the next generation - Dokumentation" description="my club | the next generation - Dokumentation" />
      <StyledAbout>
        <h1>Dokumentation</h1>
        <div>
          <div className="section starter">
            <h2>myclub | the next generation</h2>
            <p>Die folgende Seite hilft dir im Umgang mit  <span className="gatsby">myclub | the next generation</span>.</p>
          </div>
          <div className="section tech">
            <h2>App herunterladen</h2>
            <ul>
              <li>
                <a
                  className="gatsby"
                  href="https://apps.apple.com/ch/app/my-club-the-next-generation/id6443814973"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple App Store
                </a>{' '}
               
              </li>
              <li>
                <a
                  className="emotion"
                  href="https://play.google.com/store/apps/details?id=app.myclub.defaultapp&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Store
                </a>{' '}
                
              </li>
              <li>
                <a
                  className="tailwind"
                  href="https://app.kadetten-unihockey.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web App:
                </a>{' '}
                Funktioniert mit allen aktuellen Web Browsern und Smartphones.
              </li>
            </ul>
          </div>
          <div className="section features">
            <h2>Inhaltsverzeichnis</h2>
            <ul>
              <li>Benutzeraccount erstellen </li>
              <li>Profil einrichten</li>
              <li>Trainings</li>
              <li>Veranstaltungen</li>
              <li>Mitgliederverwaltung</li>
             
            </ul>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
