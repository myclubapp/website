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
            <h2>myclub | the next generation</h2>
            <p>This app is used to manage (sports-) clubs in switzerland.</p>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
