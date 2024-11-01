import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { FutureTechItemProps } from '@@pages/FutureTech/types';

const StyledFutureTechItem = styled(Flex.Horizontal)<{ $selected: boolean }>`
  background: ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.LINE)};
  border: 1px solid ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.LINE)};
  border-radius: 12px;
  padding: 8px 17px;

  .future_tech_item__icon {
    width: 36px;
    height: 36px;
    background: ${({ $selected }) => ($selected ? COLORS.WHITE_TEXT : '#F9F9F9')};
    border-radius: 50%;
  }
`;

function FutureTechItem({ item, selected, onSelect }: FutureTechItemProps) {
  const handleClick = () => {
    onSelect(item.id);
  };

  return (
    <StyledFutureTechItem $selected={selected} gap={8} alignItems='center' onClick={handleClick}>
      <Flex.Horizontal className='future_tech_item__icon' alignItems='center' justifyContent='center'>
        {selected ? item.activeIcon : item.inactiveIcon}
      </Flex.Horizontal>
      <Typography.Header4 fontWeight={400} color={selected ? COLORS.WHITE_TEXT : COLORS.MAIN_TEXT}>
        {item.title}
      </Typography.Header4>
    </StyledFutureTechItem>
  );
}

export default FutureTechItem;
