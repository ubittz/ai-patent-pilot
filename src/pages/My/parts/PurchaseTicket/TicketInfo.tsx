import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

import TicketList from './TicketList';

const StyledTicketInfo = styled(Flex.Vertical)`
  padding: 30px 30px 40px;

  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
`;

function TicketInfo() {
  return (
    <StyledTicketInfo gap={30}>
      <Typography.LargeTitle>이용권 구매를 원하시나요?</Typography.LargeTitle>
      <TicketList />
    </StyledTicketInfo>
  );
}

export default TicketInfo;
