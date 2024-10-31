import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ServiceHistoryArrowIcon } from '@@pages/ServiceHistory/icons';
import { BaseServiceDescriptionProps } from '@@pages/ServiceHistory/types';

const StyledBaseServiceDescription = styled(Flex.Vertical)`
  padding: 30px;

  .service_description__content {
    padding: 40px 0;

    &:not(:last-child) {
      border-bottom: 1px solid ${COLORS.LINE};
    }

    .service_description__content_description {
      ${({ theme }) => theme.typography.Header6}
      color: ${COLORS.SUB_TEXT}
    }
  }
`;

function BaseServiceDescription({ title, contents }: BaseServiceDescriptionProps) {
  return (
    <StyledBaseServiceDescription>
      <Flex.Vertical gap={24}>
        <Typography.Header2>{title}</Typography.Header2>
        <ServiceHistoryArrowIcon />
      </Flex.Vertical>
      <Flex.Vertical>
        {contents.map((content, index) => (
          <Flex.Vertical key={index} className='service_description__content' gap={4}>
            <Typography.Header4>{content.title}</Typography.Header4>
            <Flex.Vertical className='service_description__content_description' gap={4}>
              {content.description}
            </Flex.Vertical>
          </Flex.Vertical>
        ))}
      </Flex.Vertical>
    </StyledBaseServiceDescription>
  );
}

export default BaseServiceDescription;
