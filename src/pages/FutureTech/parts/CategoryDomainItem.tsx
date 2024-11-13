import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { CategoryDomain } from '../types';

const StyledCategoryDomainItem = styled(Flex.Vertical)<{ $selected: boolean }>`
  padding: 16px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ $selected }) => ($selected ? COLORS.MAIN_GREEN : COLORS.LINE)};
  border-radius: 16px;
`;

function CategoryDomainItem({ domain, selected, onClick }: { domain: CategoryDomain; selected: boolean; onClick: (id: number) => void }) {
  return (
    <StyledCategoryDomainItem gap={8} $selected={selected} onClick={() => onClick(domain.id)}>
      <Typography.Header5>{domain.title}</Typography.Header5>
      <Typography.Header6 color={COLORS.SUB_TEXT}>{domain.description}</Typography.Header6>
    </StyledCategoryDomainItem>
  );
}

export default CategoryDomainItem;
