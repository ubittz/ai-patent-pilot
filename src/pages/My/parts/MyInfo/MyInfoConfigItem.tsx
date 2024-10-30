import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ConfigItem } from '@@pages/My/types';

const StyledMyInfoConfigItem = styled(Flex.Horizontal)`
  padding: 16px 0;

  .my_info_config__item_icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${COLORS.GRAY_SCALE_050};
  }
`;

function MyInfoConfigItem({ item }: { item: ConfigItem }) {
  return (
    <StyledMyInfoConfigItem className='my_info_config__item' alignItems='center' gap={8}>
      <Flex.Horizontal className='my_info_config__item_icon' alignItems='center' justifyContent='center'>
        {item.icon}
      </Flex.Horizontal>
      <Typography.MediumBody>{item.title}</Typography.MediumBody>
    </StyledMyInfoConfigItem>
  );
}

export default MyInfoConfigItem;
