import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import CategoryItem from '@@pages/ServiceHistory/parts/CategoryItem';

import { ServiceFilterProps } from './types';

const StyledServiceFilter = styled(Flex.Vertical)`
  border-bottom: 8px solid #fbfbfb;
  padding: 30px;

  .service_filter__list {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function ServiceFilter({ categoryList, selectedCategory, label, children, onSelect }: ServiceFilterProps) {
  return (
    <StyledServiceFilter gap={12}>
      <Flex.Vertical gap={20}>
        {children}
        {label && <Typography.Header6>{label}</Typography.Header6>}
      </Flex.Vertical>
      <Flex.Horizontal className='service_filter__list' gap={8}>
        <CategoryItem title='전체' selected={!selectedCategory} onSelect={() => onSelect('')} />
        {categoryList.map((category) => (
          <CategoryItem key={category} title={category} selected={category === selectedCategory} onSelect={() => onSelect(category)} />
        ))}
      </Flex.Horizontal>
    </StyledServiceFilter>
  );
}

export default ServiceFilter;
