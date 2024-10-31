import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { ConfigItem } from '@@pages/My/types';

const StyledMyInfoConfigItem = styled(Flex.Horizontal)`
  padding: 16px 0;

  .my_info_config__item_icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f9f9f9;
  }
`;

function MyInfoConfigItem({ item }: { item: ConfigItem }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.path);
  };

  return (
    <StyledMyInfoConfigItem className='my_info_config__item' alignItems='center' gap={8} onClick={handleClick}>
      <Flex.Horizontal className='my_info_config__item_icon' alignItems='center' justifyContent='center'>
        {item.icon}
      </Flex.Horizontal>
      <Typography.Header4 fontWeight={400}>{item.title}</Typography.Header4>
    </StyledMyInfoConfigItem>
  );
}

export default MyInfoConfigItem;
