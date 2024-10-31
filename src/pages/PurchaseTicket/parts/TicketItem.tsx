import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TICKET_TYPE_ICONS, TICKET_TYPE_PRICE, TICKET_TYPE_STRING } from '@@pages/PurchaseTicket/constants';
import { TicketItemProps } from '@@pages/PurchaseTicket/types';

const StyledTicketItem = styled(Flex.Horizontal)<{ $selected: boolean }>`
  padding: 0 8px;
  height: 70px;
  border-radius: 12px;

  background: ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.WHITE_TEXT)};
  border: 1px solid;
  border-color: ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.LINE)};

  .ticket_item__icon {
    width: 36px;
    height: 36px;

    background: ${({ $selected }) => ($selected ? COLORS.WHITE_TEXT : '#F9F9F9')};
    border-radius: 50%;
  }
`;

function TicketItem({ type, selected, onClick }: TicketItemProps) {
  const Icon = TICKET_TYPE_ICONS[type];

  const handleClick = () => {
    onClick(type);
  };

  return (
    <StyledTicketItem $selected={selected} justifyContent='space-between' alignItems='center' onClick={handleClick}>
      <Flex.Horizontal gap={8} alignItems='center'>
        <Flex.Horizontal className='ticket_item__icon' justifyContent='center' alignItems='center'>
          <Icon selected={selected} />
        </Flex.Horizontal>
        <Typography.Header4 fontWeight={400} color={selected ? COLORS.WHITE_TEXT : COLORS.MAIN_TEXT}>
          {TICKET_TYPE_STRING[type]}
        </Typography.Header4>
      </Flex.Horizontal>
      <Typography.Header4 fontWeight={400} color={selected ? COLORS.WHITE_TEXT : COLORS.MAIN_TEXT}>
        {TICKET_TYPE_PRICE[type].toLocaleString()}원
      </Typography.Header4>
    </StyledTicketItem>
  );
}

export default TicketItem;
