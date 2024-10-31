import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { useToggle } from '@@hooks/common';
import { TICKET_STATUS, TICKET_STATUS_STRING } from '@@pages/TicketHistory/constants';
import { DownArrowIcon, UpArrowIcon } from '@@pages/TicketHistory/icons';
import { TicketHistoryItem, TicketStatus } from '@@pages/TicketHistory/types';

const StyledTicketItem = styled(Flex.Vertical)<{ $spread: boolean; $status: TicketStatus }>`
  border-radius: 16px;
  border: 1px solid ${COLORS.LINE};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

  .ticket_item__info {
    padding: 12px 16px 20px;
    border-bottom: 1px solid ${COLORS.LINE};

    .ticket_item__status_badge {
      padding: 4px 8px;
      border-radius: 100px;
      ${({ theme }) => theme.typography.Header6}
      background: ${({ $status }) => ($status === TICKET_STATUS.USING ? COLORS.MAIN_GREEN : COLORS.SUB_TEXT)};
      color: ${COLORS.WHITE_TEXT};
    }
  }

  .ticket_item__history {
    display: ${({ $spread }) => ($spread ? 'flex' : 'none')};
    padding: 15px 16px 20px;
    .ticket_item__history_title {
      flex: 0 0 auto;
    }
  }
`;

function TicketItem({ ticket }: { ticket: TicketHistoryItem }) {
  const [spread, toggle] = useToggle();

  return (
    <StyledTicketItem $spread={spread} $status={ticket.status}>
      <Flex.Horizontal className='ticket_item__info' justifyContent='space-between'>
        <Flex.Vertical gap={12}>
          <div className='ticket_item__status_badge'>{TICKET_STATUS_STRING[ticket.status]}</div>
          <Typography.Header4>{ticket.number}회권</Typography.Header4>
        </Flex.Vertical>
        <Flex.Vertical gap={23} alignItems='flex-end'>
          <Typography.Header6>2024.10.21</Typography.Header6>
          {spread ? <UpArrowIcon onClick={toggle} /> : <DownArrowIcon onClick={toggle} />}
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Vertical className='ticket_item__history' gap={8}>
        <Flex.Horizontal gap={5}>
          <Typography.Header6 className='ticket_item__history_title' fontWeight={400} color={COLORS.SUB_TEXT}>
            이용한 카테고리
          </Typography.Header6>
          <Flex.Horizontal justifyContent='space-between' flex={1}>
            <Typography.Header6>기술레벨 측정</Typography.Header6>
            <Typography.Header6 fontWeight={400} color={COLORS.SUB_TEXT}>
              2024.10.21
            </Typography.Header6>
          </Flex.Horizontal>
        </Flex.Horizontal>
        <Flex.Horizontal gap={5}>
          <Typography.Header6 className='ticket_item__history_title' fontWeight={400} color={COLORS.SUB_TEXT}>
            이용한 카테고리
          </Typography.Header6>
          <Flex.Horizontal justifyContent='space-between' flex={1}>
            <Typography.Header6>기술레벨 측정</Typography.Header6>
            <Typography.Header6 fontWeight={400} color={COLORS.SUB_TEXT}>
              2024.10.21
            </Typography.Header6>
          </Flex.Horizontal>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledTicketItem>
  );
}

export default TicketItem;
