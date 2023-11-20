import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function PrivacyPolicyPage() {
  return (
    <Main>
      <Seo title="PrivacyPolicy" description="PrivacyPolicy" />
      <StyledAbout>
        <h1>Privacy Policy</h1>
        <div>
          <div className="section starter">
            <h2>myclub | the next generation</h2>
            <p>This app is used to manage (sports-) clubs in switzerland.</p>
          </div>
          <div className="section starter">
            <h2>Hosting</h2>
            <p>Your data is processed in switzerland (europe-west6).</p>
          </div>

          <div className="section starter">
            <h2>Create Profile</h2>
            <p>To create an account we need your email address, first- and lastname. This is required, that administrators from a club can approve your request.</p>
          </div>
          <div className="section starter">
            <h2>Delete Profile</h2>
            <p>You can delete your profile directly in your app. Please open your profile page, scroll to the bottom and hit "Danger Zone: Profil löschen". Your data is deleted imidealty and can not be undone.</p>
          </div>
          <div className="section starter">
            <h2>Other data: location</h2>
            <p>We don't store your location. It's only used to provide you a navigation service for your games. </p>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
