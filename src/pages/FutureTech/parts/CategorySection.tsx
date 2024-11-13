import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

import CategoryDomainItem from './CategoryDomainItem';
import { CATEGORY_DOMAIN_LIST } from '../constants';
import { Category } from '../types';

function CategorySection({
  category,
  selectedDomainId,
  onClickDomain,
}: {
  category: Category;
  selectedDomainId: number;
  onClickDomain: (id: number) => void;
}) {
  return (
    <Flex.Vertical gap={20}>
      <Typography.Header4>{category.name}</Typography.Header4>
      <Flex.Vertical gap={20}>
        {CATEGORY_DOMAIN_LIST.filter(({ categoryId }) => categoryId === category.id).map((domain) => (
          <CategoryDomainItem key={domain.id} selected={selectedDomainId === domain.id} domain={domain} onClick={onClickDomain} />
        ))}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default CategorySection;
