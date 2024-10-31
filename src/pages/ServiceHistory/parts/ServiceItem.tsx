import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ServiceHistoryItem } from '@@pages/ServiceHistory/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledServiceItem = styled(Flex.Vertical)`
  border-radius: 16px;
  padding: 12px 16px 16px;
  background: ${COLORS.WHITE_TEXT};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

  .service_item__badge {
    border-radius: 100px;
    background: ${COLORS.MAIN_GREEN};
    padding: 4px 8px;
  }
`;

function ServiceItem({ service }: { service: ServiceHistoryItem }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(`${PAGES.MY}/service-history/${service.id}`));
  };

  return (
    <StyledServiceItem gap={12} alignItems='flex-start' onClick={handleClick}>
      <Flex.Horizontal className='service_item__badge'>
        <Typography.Header6 color={COLORS.WHITE_TEXT}>{service.category}</Typography.Header6>
      </Flex.Horizontal>
      <Typography.Header4 fontWeight={400}>{service.title}</Typography.Header4>
    </StyledServiceItem>
  );
}

export default ServiceItem;
