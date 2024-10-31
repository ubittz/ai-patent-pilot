import { useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import CategoryItem from '@@pages/ServiceHistory/parts/CategoryItem';

const StyledCategoryFilter = styled(Flex.Vertical)`
  border-bottom: 8px solid #fbfbfb;
  padding: 30px;

  .category_filter__list {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CATEGORY_LIST = ['기술 레벨 측정', '등록 특허 찾기', '내가 원하는 특허', '미래 기술'];

function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectCategory = (title: string) => {
    setSelectedCategory(title);
  };

  const handleSelectAll = () => {
    setSelectedCategory('');
  };

  return (
    <StyledCategoryFilter gap={12}>
      <Typography.Header2>
        이용했던 서비스 이력을
        <br />
        확인해보세요!
      </Typography.Header2>
      <Flex.Horizontal className='category_filter__list' gap={8}>
        <CategoryItem title='전체' selected={!selectedCategory} onSelect={handleSelectAll} />
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category} title={category} selected={category === selectedCategory} onSelect={handleSelectCategory} />
        ))}
      </Flex.Horizontal>
    </StyledCategoryFilter>
  );
}

export default CategoryFilter;
