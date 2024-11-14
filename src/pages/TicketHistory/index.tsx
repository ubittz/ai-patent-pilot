import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import ServiceFilter from '@@components/ServiceFilter';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import TicketList from '@@pages/TicketHistory/parts/TicketList';

const CATEGORY_LIST = ['기술 레벨 측정', '등록 특허 찾기', '내가 원하는 특허', '미래 기술'];

function TicketHistory() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Header4>서비스 이용권 내역</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <ServiceFilter categoryList={CATEGORY_LIST} selectedCategory={selectedCategory} label='사용내역' onSelect={handleSelectCategory}>
          <Typography.Header2>
            현재 보유하신 이용권은
            <br />
            <Typography.Header2 as='span' color={COLORS.MAIN_GREEN}>
              3
            </Typography.Header2>
            개 입니다.
          </Typography.Header2>
        </ServiceFilter>
        <TicketList />
      </Flex.Vertical>
    </FullScreen>
  );
}

export default TicketHistory;
