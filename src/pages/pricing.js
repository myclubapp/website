import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function AboutPage() {
  return (
    <Main>
      <Seo title="my club | the next generation - Preis" description="my club | the next generation - Preis" />
      <StyledAbout>
        <h1>Preis</h1>
        <div>
          <div className="section starter">
            <h2>myclub | the next generation</h2>
            <p>Unser Preismodell ist fast so einfach wie unsere App. Ist dein Verein klein, zahlst du weniger - ist dein Verein grösser, dann bezahlst du auch mehr. Eigentlich logisch oder? Und das beste dabei: Kinder und Jugendliche unter 18 Jahren sind gratis!</p>
          </div>

          <div className="section tech">
            <h2>Monatliches Abonnement</h2>
            <ul>
              <li><b>CHF 8.90</b> pro Monat für kleine Vereine (bis zu 50 Mitglieder)
              </li>
              <li><b>CHF 13.90</b> pro Monat für mittlere Vereine (bis zu 100 Mitglieder)
              </li>
              <li><b>CHF 19.90</b> pro Monat für grosse Vereine (über 150 Mitglieder)
              </li>
            </ul>
          </div>
          <div className="section tech">
            <h2>Jährliches Abonnement</h2>
            <ul>
              <li><b>CHF 99.-</b> pro Jahr für kleine Vereine (bis zu 50 Mitglieder)
              </li>
              <li><b>CHF 149.-</b> pro Jahr für mittlere Vereine (bis zu 100 Mitglieder)
              </li>
              <li><b>CHF 219.-</b> pro Jahr für grosse Vereine (über 150 Mitglieder)
              </li>
            </ul>
          </div>

          <div className="section tech">
            <h2>Inklusive</h2>
         
            <ul>
              <li>
                sind eine unlimitierte Anzahl von Mannschaften/Teams
              </li>
              <li>
                mit unzählige Trainings, die dich noch besser machen
              </li>
              <li>
                und genügend Veranstaltungen um dein Vereinsleben zu unterstützen
              </li>
              <li>
                sowie einer einfachen Mitgliederverwaltung
              </li>

            </ul>
          </div>
          <div className="section features">
            <h2>Zusatzmodule</h2>
            <p>Du bezahlst nichts, was du nicht brauchst. Mit unseren Zusatzmodulen kannst du my club deinen persönlichen Bedürfnissen anpassen. </p>
            <p>Pro Modul bezahlst du CHF 50.-</p>
            
            <ul>
            <br></br>
              <li>Integration von Verbandsdaten wie Vereinsdaten, Teams, Meisterschaftsspiele und Tabellen</li>
              <li>Helfer-Einsätze für deine Vereinsmitglieder</li>
              <li>Trainingsplanung*</li>
              <li>Meisterschaftsaufgebot*</li>
              <li>E-Mail Reporting*</li>
              <li>Rechnungsversand*</li>
              <li>Wordpress Integration für News (gratis)</li>
            </ul>
          </div>
          <div className="section features">
            <h2>Premium</h2>
            <p>Du träumst von einer eigenen App in deinen Vereinsfarben? my club | premium ist genau das richtige für deinen Verein: </p>
            <ul>
              <li>Deine eigene Web-App </li>
              <li>mit einem persönlichen App Icon </li>
              <li>und einem tollen Splash Screen beim Start der App</li>
              <li>und natürlich mit deinem Vereinslogo </li>
            </ul>
          </div>

          <div><p>* = In Entwicklung</p></div>
        </div>
      </StyledAbout>
    </Main>
  );
}
