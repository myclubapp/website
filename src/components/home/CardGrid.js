import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledCardGrid, StyledCard } from './styles';

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <section>
        <h2>Mission</h2>
        <p>
        Unsere Mission ist es, eine leistungsstarke, benutzerfreundliche Plattform zu entwickeln, die es Vereinen ermöglicht, ihre Mitglieder, Spiele, Trainings und Veranstaltungen effizient zu verwalten. Wir setzen auf eine mobile-first Strategie und modernste Webtechnologie, um eine stets aktuelle, sichere und zuverlässige Anwendung zu gewährleisten.  <span className="gatsby">myclub | the next generation</span>soll durch die Integration von Daten aus nationalen Verbänden und der Bereitstellung von Open-Source-Lösungen Vertrauen schaffen und zur Weiterentwicklung des Sports beitragen.
        </p>
        <ul className="cards">
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/mountain-3.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">feature</span>
              <h3>Einfache und intuitive Benutzeroberfläche</h3>
              <p>
              Eine benutzerfreundliche Oberfläche, die es allen Vereinsmitgliedern ermöglicht, die App problemlos zu nutzen.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card1`}>
            <StaticImage src="../../images/pugs/mountain-4.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">tech</span>
              <h3>Integration mit nationalen Verbänden</h3>
              <p>
              Nahtlose Integration von Echtzeitdaten aus verschiedenen Sportverbänden, um stets aktuelle Informationen zu gewährleisten.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card2`}>
            <StaticImage src="../../images/pugs/mountain-5.jpg" alt="swiss" />
            <div className="card-content">
              <span className="type">trust</span>
              <h3>Open Source & Datenschutz</h3>
              <p>
              Transparente Open-Source-Lösungen und Datenhosting in der Schweiz, um höchste Sicherheits- und Datenschutzstandards zu gewährleisten.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card3`}>
            <StaticImage src="../../images/pugs/pug-1.jpg" alt="Unihockey" />
            <div className="card-content">
              <span className="type">Nationaler Sportverband</span>
              <h3>swissunihockey</h3>
              <p>Hast du schon wieder den Vorverkauf für den Superfinal verpasst? Dank der Integration von swissunihockey verpasst du keine Verbandneuigkeiten mehr und bist immer am Ball, was die aktuellen Spiele, Resultate und die Tabellensituation deiner Mannschaften angeht.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card4`}>
            <StaticImage src="../../images/pugs/pug-4.jpg" alt="volleyball" />
            <div className="card-content">
              <span className="type">Nationaler Sportverband</span>
              <h3>swiss volley</h3>
              <p>Punkt - Satz - Sieg! Mit der Integration von Swiss Volley verpasst du keine Meisterschaftsspiele mehr. Alle Regionalverbände und die Nationalliga sind mit Mannschaften, Meisterschaftsspielen und Ranglisten integriert, sodass du immer auf dem neuesten Stand bist wenn es um deinen Verein geht.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card5`}>
            <StaticImage src="../../images/pugs/pug-2.jpg" alt="Handball" />
            <div className="card-content">
              <span className="type">Nationaler Sportverband</span>
              <h3>swiss handball</h3>
              <p>
              In welcher Turnhalle? Oder doch ein Cupspiel? Dank der Integration von Swiss Handball verpasst du keine wichtigen Informationen mehr. Bleibe immer aktuell über deine Mannschaften, Meisterschaftsspiele und Ranglisten informiert.
              </p>
            </div>
          </StyledCard>
        </ul>
      </section>
    </StyledCardGrid>
  );
}
