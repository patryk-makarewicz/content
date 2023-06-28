import { Button } from 'components/Button';

import * as Styled from './Regulations.styles';
import PrivacyPolicy from './Terms/PrivacyPolicy';
import TermsOfService from './Terms/TermsOfService';

type ListProps = {
  showTerms: boolean;
  showPrivacy: boolean;
  onHandleCloseBoxRegulation: () => void;
};

export const Regulations = ({ showTerms, showPrivacy, onHandleCloseBoxRegulation }: ListProps) => (
  <Styled.Wrapper>
    <Styled.InnerWrapper>
      {showTerms && <TermsOfService />}
      {showPrivacy && <PrivacyPolicy />}
      <Styled.Container>
        <Button onClick={onHandleCloseBoxRegulation}>Zamknij</Button>
      </Styled.Container>
    </Styled.InnerWrapper>
  </Styled.Wrapper>
);
