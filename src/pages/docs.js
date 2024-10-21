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
          <div className="section features">
            <h2>Benutzeraccount erstellen</h2>

            <p><b>Anmeldung</b></p>
            <ul>
              <li>Öffnen Sie die App “my-club” und klicken Sie auf die Schaltfläche “Registrieren”.</li>
              <li>Sie werden auf die Anmeldeseite weitergeleitet, wo Sie das Registrierungsformular ausfüllen müssen.    </li>

              <li>Geben Sie Ihre E-Mail-Adresse ein.</li>
              <li>Erstellen Sie ein Passwort und geben Sie es ein.</li>
              <li>Geben Sie Ihren Vorname und Nachname ein.</li>


              <li>Klicken Sie auf “Registrieren”, um Ihre Daten zu übermitteln.</li>
            </ul>


            <p><b>Bestätigung der Anmeldung</b></p>
            <ul>
              <li>Nach dem Ausfüllen des Formulars wird ein Bestätigungslink an Ihre E-Mail-Adresse gesendet.</li>
              <li>Überprüfen Sie Ihr E-Mail-Postfach (und eventuell den Spam-Ordner) und klicken Sie auf den Link, um Ihre E-Mail-Adresse zu verifizieren.</li>
              <li>Sobald Ihre E-Mail-Adresse verifiziert ist, können Sie sich in der App anmelden.</li>
            </ul>
          </div>



          <div className="section features">

            <h2>Onboarding (Email & Club)</h2>

            <p><b>E-Mail-Verifizierung</b></p>
            <ul>
              <li>Nach der Registrierung müssen Sie Ihre E-Mail-Adresse verifizieren:
              </li>

              <li>Sie sehen eine Nachricht, die Sie daran erinnert, Ihre E-Mail-Adresse zu überprüfen.</li>
              <li>Überprüfen Sie Ihr E-Mail-Postfach und klicken Sie auf den Verifizierungslink.</li>
              <li>Falls Sie keine E-Mail erhalten haben, klicken Sie auf “E-Mail erneut senden”, um die Verifizierungs-E-Mail erneut zu senden.</li>

            </ul>

            <p><b>Club beitreten</b></p>
            <ul>
              <li>Nach der E-Mail-Verifizierung müssen Sie einem Club beitreten, um Ihr Profil zu vervollständigen:  </li>

              <li>Sie sehen eine Liste mit verfügbaren Clubs.</li>
              <li>Verwenden Sie die Suchleiste, um nach Ihrem Club zu suchen.</li>
              <li>Klicken Sie auf den gewünschten Club, um eine Beitrittsanfrage zu stellen.</li>


              <li>Ihre Beitrittsanfrage wird vom Club überprüft, und Sie erhalten eine Benachrichtigung per E-Mail, sobald die Anfrage genehmigt wurde.</li>
            </ul>

          </div>

          <div className="section features">
            <h2>Trainings</h2>
            <ul>
              <li>folgt </li>

            </ul>
          </div>
          <div className="section features">
            <h2>Veranstaltungen</h2>
            <ul>
              <li>folgt </li>

            </ul>
          </div>
          <div className="section features">
            <h2>Mitgliederverwaltung</h2>
            <ul>
              <li>folgt </li>
            </ul>
          </div>
        </div>
      </StyledAbout >
    </Main >
  );
}
