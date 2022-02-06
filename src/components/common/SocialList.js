import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faInstagram, 
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

import { StyledSocialList, StyledButton } from './styles';

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/myclubapp"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://twitter.com/my_club_app"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://www.instagram.com/p/CD2LeTkJisD/"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://www.facebook.com/myclubthenextgeneration"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </StyledButton>
      </li>

     
    </StyledSocialList>
  );
}
