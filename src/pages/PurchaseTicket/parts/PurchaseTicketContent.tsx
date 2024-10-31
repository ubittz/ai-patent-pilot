import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { TICKET_TYPE_PRICE } from '@@pages/PurchaseTicket/constants';
import PurchaseConsent from '@@pages/PurchaseTicket/parts/PurchaseConsent';
import PurchaseInfo from '@@pages/PurchaseTicket/parts/PurchaseInfo';
import TicketInfo from '@@pages/PurchaseTicket/parts/TicketInfo';
import { PurchaseTicketDto } from '@@pages/PurchaseTicket/types';

const StyledPurchaseTicketContent = styled(FullScreen)``;

function PurchaseTicketContent() {
  const navigate = useNavigate();

  const { values } = useFormikContext<PurchaseTicketDto>();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form>
      <StyledPurchaseTicketContent>
        <Header onBack={handleClickBack}>
          <Typography.Header4>이용권 구매</Typography.Header4>
        </Header>
        <Flex.Vertical className='body'>
          <TicketInfo />
          <PurchaseInfo />
          <PurchaseConsent />
        </Flex.Vertical>
        <FooterContainer>
          <Button.Large type='submit'>{TICKET_TYPE_PRICE[values.ticketType] / 10000}만원 결제하기</Button.Large>
        </FooterContainer>
      </StyledPurchaseTicketContent>
    </Form>
  );
}

export default PurchaseTicketContent;
