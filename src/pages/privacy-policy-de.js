import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function PrivacyPolicyPage() {
  return (
    <Main>
      <Seo title="Datenschutzrichtlinie" description="Datenschutzrichtlinie" />
      <StyledAbout>
        <h1>Datenschutzrichtlinie /                 <a
          href="/privacy-policy"
          target="_self"
          rel="noopener noreferrer"
        >
        Privacy Policy
        </a></h1>
        <div>
          <div className="section starter">
            <h2>Einführung</h2>
            <p>Willkommen bei myclub | die nächste Generation. Diese Datenschutzrichtlinie umreisst unsere Praktiken bezüglich der Sammlung, Nutzung und Offenlegung Ihrer Informationen, wenn Sie unsere App verwenden, sowie die damit verbundenen Wahlmöglichkeiten.</p>
          </div>
          <div className="section starter">
            <h2>Sammlung und Nutzung von Informationen</h2>
            <p>Für ein besseres Erlebnis bei der Nutzung unserer App benötigen wir möglicherweise bestimmte persönlich identifizierbare Informationen von Ihnen, einschliesslich, aber nicht beschränkt auf Ihre E-Mail-Adresse, Vor- und Nachnamen. Die gesammelten Informationen werden zur Identifikation und Verwaltung Ihrer Clubmitgliedschaft verwendet und sind für die Funktionalität unserer App notwendig.</p>
            <p>a. Profilerstellung</p>
            <p><ul>
              <li>Erforderliche Informationen: Zur Erstellung eines Kontos benötigen wir Ihre E-Mail-Adresse, Vor- und Nachnamen. Dies ist notwendig, damit Clubadministratoren Ihre Mitgliedschaftsanfrage genehmigen können.</li>
              <li>Zusätzliche Informationen: Ihre Wohnadresse und Telefonnummer werden für die Verwaltung Ihrer Clubmitgliedschaft gesammelt und sind nur für Ihre Club- und Teamadministratoren sichtbar.</li>
              </ul>
              </p>
              <p>b. Datenhosting</p>
            <p><ul>
              <li>Ihre Daten werden in der Schweiz (Region Europa-West6) verarbeitet und gespeichert, um die Einhaltung lokaler Datenschutz- und Privatsphäre-Vorschriften zu gewährleisten.</li>
              </ul>
              </p>              
          </div>

          <div className="section starter">
            <h2>Löschung Ihres Profils</h2>
            <p>Sie haben die Möglichkeit, Ihr Profil direkt in der App zu löschen. Navigieren Sie zu Ihrer Profilseite, scrollen Sie nach unten und wählen Sie "Gefahrenzone: Profil löschen". Bitte beachten Sie, dass diese Aktion sofortig und unwiderruflich ist und zur Löschung aller Ihrer persönlichen Daten aus unseren Systemen führt.</p>
          </div>
          <div className="section starter">
            <h2>Standortdaten</h2>
            <p>Unsere App speichert Ihre Standortdaten nicht. Standortdienste werden ausschliesslich zur Bereitstellung von Navigationshilfen für Ihre Spiele und Veranstaltungen verwendet.</p>
          </div>
          <div className="section starter">
            <h2>Sicherheit</h2>
            <p>Wir schätzen Ihr Vertrauen in die Bereitstellung Ihrer persönlichen Informationen und bemühen uns, diese mit kommerziell akzeptablen Mitteln zu schützen. Denken Sie jedoch daran, dass keine Übertragungsmethode über das Internet oder elektronische Speichermethode zu 100% sicher und zuverlässig ist und wir ihre absolute Sicherheit nicht garantieren können.</p>
          </div>
          <div className="section starter">
            <h2>Änderungen dieser Datenschutzrichtlinie</h2>
            <p>Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Daher wird empfohlen, diese Seite regelmässig auf Änderungen zu überprüfen. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen. Diese Änderungen sind unmittelbar nach ihrer Veröffentlichung auf dieser Seite wirksam.</p>
          </div>
          <div className="section starter">
            <h2>Kontaktieren Sie uns</h2>
            <p>Wenn Sie Fragen oder Anregungen zu unserer Datenschutzrichtlinie haben, zögern Sie nicht, uns unter info@my-club.app zu kontaktieren.</p>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
