import styled from 'styled-components';

import Flex from '@@components/Flex';
import MyInfoConfigItem from '@@pages/My/parts/MyInfoConfigItem';
import { ConfigItem } from '@@pages/My/types';

const StyledMyInfoConfigList = styled(Flex.Vertical)`
  padding: 14px 30px 0;

  .my_info_config__item:not(:last-child) {
    border-bottom: 1px solid #ededed;
  }
`;

function MyInfoConfigList({ itemList }: { itemList: ConfigItem[] }) {
  return (
    <StyledMyInfoConfigList>
      {itemList.map((item) => (
        <MyInfoConfigItem key={item.title} item={item} />
      ))}
    </StyledMyInfoConfigList>
  );
}

export default MyInfoConfigList;
