import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledCategoryItem = styled(Flex.Horizontal)<{ $selected: boolean }>`
  flex: 0 0 auto;

  border-radius: 100px;
  padding: 12px 17.5px;

  background: ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.WHITE_TEXT)};
  border: 1px solid ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.LINE)};
  color: ${({ $selected }) => ($selected ? COLORS.WHITE_TEXT : COLORS.MAIN_TEXT)};
`;

function CategoryItem({ title, selected, onSelect }: { title: string; selected: boolean; onSelect: (title: string) => void }) {
  const handleClick = () => {
    onSelect(title);
  };

  return (
    <StyledCategoryItem $selected={selected} onClick={handleClick}>
      <Typography.Header5 fontWeight={400} color='inherit'>
        {title}
      </Typography.Header5>
    </StyledCategoryItem>
  );
}

export default CategoryItem;
