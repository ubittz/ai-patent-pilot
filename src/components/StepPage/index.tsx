import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { StepPageProps } from '@@components/StepPage/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledStepPage = styled(FullScreen)<{ $gauge: number }>`
  .step_page__progress {
    height: 4px;
    background: ${COLORS.LINE};

    &::before {
      content: '';
      display: block;
      height: 100%;
      width: ${({ $gauge }) => $gauge}%;
      background: ${COLORS.MAIN_GREEN};

      transition: width 0.5s;
    }
  }
`;

function StepPage({ title, buttonProps, gauge, children }: StepPageProps) {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <StyledStepPage $gauge={gauge}>
      <Header onBack={handleClickBack}>
        <Typography.Header4>{title}</Typography.Header4>
      </Header>
      <div className='step_page__progress' />
      {children}
      <FooterContainer>
        <Button.Large {...buttonProps}>{buttonProps?.children ?? '다음'}</Button.Large>
      </FooterContainer>
    </StyledStepPage>
  );
}

export default StepPage;
