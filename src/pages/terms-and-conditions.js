import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function TermsAndConditionsPage() {
  return (
    <Main>
      <Seo title="TermsAndConditions" description="TermsAndConditions" />
      <StyledAbout>
        <h1>Terms and Conditions</h1>
        <div>
          <div className="section starter">
            <h2>Introduction</h2>
            <p>Welcome to myclub | the next generation. These Terms of Use ("Terms") govern your use of the MyClub website and mobile application ("Service"). By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy.</p>
          </div>
          <div className="section starter">
            <h2>Use of Service</h2>
            <p>a. The Service is intended for users who are at least 13 years old.</p>
            <p>b. You may use the Service only for lawful purposes and in accordance with these Terms.</p>
            <p>c. Any use or access by anyone under the age of 13 is prohibited.</p>
          </div>
          <div className="section starter">
            <h2>Accounts</h2>
            <p>a. To access certain features of the Service, you must create an account.</p>
            <p>b. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <p>c. You agree to notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
          </div>
          <div className="section starter">
            <h2>Intellectual Property Rights</h2>
            <p>a. The Service and its original content, features, and functionality are and will remain the exclusive property of myclub | the next generation and its licensors.</p>
            <p>b. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
          </div>
          <div className="section starter">
            <h2>User Content</h2>
            <p>a. You retain all rights in, and are solely responsible for, the content you post to the Service.</p>
            <p>b. By posting content, you grant MyClub a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with the Service.</p>
          </div>
          <div className="section starter">
            <h2>Prohibited Activities</h2>
            <p>You agree not to engage in any of the following prohibited activities:
              <ul>
                <li>Illegal Activities: Using the service for any illegal purposes or in violation of any local, state, national, or international law or regulation.</li>
                <li>Infringement of Intellectual Property: Copying, distributing, or disclosing any part of the service in any medium, including without limitation by any automated or non-automated “scraping,” or reproducing or circumventing the navigational structure or presentation of the service without our prior written consent.</li>
                <li>Harassment and Abuse: Engaging in harassing, bullying, or discriminatory behavior towards other users; posting or displaying content that is abusive, defamatory, libelous, or hateful.</li>
                <li>False Information: Providing false information on your registration or profile, or impersonating someone else.</li>
                <li>Hacking and Unauthorized Access: Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service.</li>
                <li>Malware and Viruses: Uploading or transmitting viruses, malware, or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the service.</li>
                <li>Spamming: Engaging in any automated use of the system, such as using scripts to send comments or messages, or using the service to send unsolicited communications.</li>
                <li>Commercial Activities: Using the service for any commercial solicitation purposes without our prior written consent.</li>
                <li>Content Violations: Posting or uploading content that infringes upon the rights of others, including copyright, privacy, or publicity rights.</li>
                <li>Disruption of Service: Interfering with, disrupting, or creating an undue burden on the service or the networks or services connected to the service.</li>
                <li>Violation of Privacy: Attempting to collect or track the personal information of others; invading someone’s privacy by attempting to access sensitive information without permission.</li>
              </ul>
            </p>
          </div>
          <div className="section starter">
            <h2>Termination</h2>
            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.</p>
          </div>
          <div className="section starter">
            <h2>Disclaimer</h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
          </div>
          <div className="section starter">
            <h2>Limitation of Liability</h2>
            <p>In no event shall myclub | the next generation, nor its directors, employees, be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of the Service.</p>
          </div>
          <div className="section starter">
            <h2> Governing Law</h2>
            <p>These Terms shall be governed by the laws of Switzerland (Schaffhausen).</p>
          </div>
          <div className="section starter">
            <h2>Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>
          </div>
          <div className="section starter">
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at info@my-club.app</p>
      
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
