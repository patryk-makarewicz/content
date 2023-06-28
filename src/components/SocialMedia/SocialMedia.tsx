import { default as Github } from '../../assets/github.svg';
import { default as LinkedIn } from '../../assets/linkedin.svg';
import * as Styled from './SocialMedia.styles';

type SocialMediaType = {
  $white?: boolean;
};

export const SocialMedia = ({ $white }: SocialMediaType) => (
  <Styled.Wrapper>
    <Styled.ButtonIcon
      $white={$white}
      href="https://www.linkedin.com/in/patryk-makarewicz/"
      target="_blank"
      title="Go to LinkedIn">
      <img src={LinkedIn} alt="LinkedIn logo" width={36} height={36} />
    </Styled.ButtonIcon>
    <Styled.ButtonIcon $white={$white} href="https://github.com/patryk-makarewicz" target="_blank" title="Go to Github">
      <img src={Github} alt="Github logo" width={36} height={36} />
    </Styled.ButtonIcon>
  </Styled.Wrapper>
);
