import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SERVICE_CATEGORY_STRING } from '@@pages/ServiceHistory/constants';
import { BaseServiceInfoProps } from '@@pages/ServiceHistory/types';

const StyledBaseServiceInfo = styled(Flex.Vertical)`
  border-bottom: 8px solid #fbfbfb;
  padding: 30px;

  .service_info__badge {
    border-radius: 100px;
    padding: 12px;
    background: ${COLORS.MAIN_GREEN};
    color: ${COLORS.WHITE_TEXT};
  }

  .service_info__content_key {
    flex: 0 0 auto;
    width: 120px;
  }

  .service_info__content_value {
    flex: 1;
  }
`;

function BaseServiceInfo({ category, contents }: BaseServiceInfoProps) {
  return (
    <StyledBaseServiceInfo gap={20} alignItems='flex-start'>
      <div className='service_info__badge'>
        <Typography.Header5 color='inherit'>{SERVICE_CATEGORY_STRING[category]}</Typography.Header5>
      </div>
      <Flex.Vertical gap={8}>
        {contents.map((content) => (
          <Flex.Horizontal key={content.key}>
            <Typography.Header4 className='service_info__content_key' color={COLORS.SUB_TEXT} fontWeight={400}>
              {content.key}
            </Typography.Header4>
            <Typography.Header4 className='service_info__content_value' fontWeight={400}>
              {content.value}
            </Typography.Header4>
          </Flex.Horizontal>
        ))}
      </Flex.Vertical>
    </StyledBaseServiceInfo>
  );
}

export default BaseServiceInfo;
