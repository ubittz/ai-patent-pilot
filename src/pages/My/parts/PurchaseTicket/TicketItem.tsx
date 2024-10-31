import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TICKET_TYPE_ICONS, TICKET_TYPE_PRICE, TICKET_TYPE_STRING } from '@@pages/My/constants';
import { TicketItemProps } from '@@pages/My/types';

const StyledTicketItem = styled(Flex.Horizontal)<{ $selected: boolean }>`
  padding: 0 8px;
  height: 70px;
  border-radius: 12px;

  background: ${({ $selected }) => ($selected ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_000)};
  border: 1px solid;
  border-color: ${({ $selected }) => ($selected ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_050)};

  .ticket_item__icon {
    width: 36px;
    height: 36px;

    background: ${({ $selected }) => ($selected ? COLORS.GRAY_SCALE_000 : COLORS.GRAY_SCALE_050)};
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
        <Typography.SmallBody color={selected ? COLORS.GRAY_SCALE_000 : COLORS.GRAY_SCALE_900}>{TICKET_TYPE_STRING[type]}</Typography.SmallBody>
      </Flex.Horizontal>
      <Typography.SmallBody color={selected ? COLORS.GRAY_SCALE_000 : COLORS.GRAY_SCALE_900}>
        {TICKET_TYPE_PRICE[type].toLocaleString()}원
      </Typography.SmallBody>
    </StyledTicketItem>
  );
}

export default TicketItem;
