import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function PrivacyPolicyPage() {
  return (
    <Main>
      <Seo title="Privacy Policy" description="Privacy Policy" />
      <StyledAbout>
        <h1>Privacy Policy /         <a
          href="/privacy-policy-de"
          target="_self"
          rel="noopener noreferrer"
        >
        Datenschutzrichtlinie
        </a></h1>
        <div>
          <div className="section starter">
            <h2>Introduction</h2>
            <p>Welcome to myclub | the next generation. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our app and the choices you have associated with that information.</p>
            <p></p>
          </div>
          <div className="section starter">
            <h2>Information Collection and Use</h2>
            <p>For a better experience while using our app, we may require you to provide us with certain personally identifiable information, including but not limited to your email address, first and last name. The information that we collect will be used to identify and manage your club membership and is necessary for the functionality of our app.</p>
            <p>a. Profile Creation</p>
            <p><ul>
              <li>Required Information: To create an account, we need your email address, first and last name. This is essential for club administrators to approve your membership request.</li>
              <li>Additional Information: Your home address and phone number are collected for the administration of your club membership and are visible only to your club and team administrators.</li>
              </ul>
              </p>
              <p>b. Data Hosting</p>
            <p><ul>
              <li>Your data is processed and stored in Switzerland (Europe-West6 region), ensuring compliance with local data protection and privacy regulations.</li>
              </ul>
              </p>              
          </div>

          <div className="section starter">
            <h2>Deleting Your Profile</h2>
            <p>You have the option to delete your profile directly within the app. Navigate to your profile page, scroll to the bottom, and select "Danger Zone: Profil löschen". Please note that this action is immediate, irreversible, and will result in the deletion of all your personal data from our systems.</p>
          </div>
          <div className="section starter">
            <h2> Location Data</h2>
            <p>Our app does not store your location data. Location services are used solely for providing navigation assistance for your games and events.</p>
          </div>
          <div className="section starter">
            <h2>Security</h2>
            <p>We value your trust in providing us your Personal Information, and we strive to use commercially acceptable means of protecting it. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
          </div>
          <div className="section starter">
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
          </div>
          <div className="section starter">
            <h2>Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@my-club.app.</p>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
