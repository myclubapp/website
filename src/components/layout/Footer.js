import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { StyledFooter } from './styles';
import { SocialList } from '@common';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <p className="title">
        <svg aria-hidden="true" focusable="false">
          <use xlinkHref="/logo.svg#logo" />
        </svg>
        {siteMetadata.title}
      </p>
      <SocialList />
      <p className="author">
        created by{' '}
        <a
          href="https://github.com/myclubapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteMetadata.author}
        </a>
      </p>
      <p className="author">
        <a
          href="/terms-and-conditions"
          target="_self"
          rel="noopener noreferrer"
        >
        Terms and Conditions
        </a>
      </p>
      <p className="author">
        <a
          href="/privacy-policy"
          target="_self"
          rel="noopener noreferrer"
        >
        Privacy Policy
        </a>
      </p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
