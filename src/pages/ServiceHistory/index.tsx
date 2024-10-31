import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import CategoryFilter from '@@pages/ServiceHistory/parts/CategoryFilter';
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

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <StyledServiceHistory>
      <Header onBack={handleClickBack}>
        <Typography.Header4>서비스 이력 확인</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <CategoryFilter />
        <ServiceList />
      </Flex.Vertical>
    </StyledServiceHistory>
  );
}

export default ServiceHistory;
