import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import ServiceFilter from '@@components/ServiceFilter';
import Typography from '@@components/Typography';
import { SERVICE_CATEGORY_STRING } from '@@pages/ServiceHistory/constants';
import ServiceList from '@@pages/ServiceHistory/parts/ServiceList';

const StyledServiceHistory = styled(FullScreen)`
  .body {
    .service_history__service_list {
      padding: 30px;
    }
  }
`;

function ServiceHistory() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <StyledServiceHistory>
      <Header onBack={handleClickBack}>
        <Typography.Header4>서비스 이력 확인</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <ServiceFilter categoryList={Object.values(SERVICE_CATEGORY_STRING)} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>
          <Typography.Header2>
            이용했던 서비스 이력을
            <br />
            확인해보세요!
          </Typography.Header2>
        </ServiceFilter>
        <ServiceList />
      </Flex.Vertical>
    </StyledServiceHistory>
  );
}

export default ServiceHistory;
