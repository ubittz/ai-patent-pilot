import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import ServiceFilter from '@@components/ServiceFilter';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import PurchaseHistoryList from '@@pages/PurchaseHistory/parts/PurchaseHistoryList';

const StyledPurchaseHistory = styled(FullScreen)``;

const CATEGORY_LIST = ['1회 이용권', '3회 이용권', '5회 이용권', '10회 이용권'];

function PurchaseHistory() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <StyledPurchaseHistory>
      <Header onBack={handleClickBack}>
        <Typography.Header4>결제 내역</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <ServiceFilter label='사용내역' selectedCategory={selectedCategory} onSelect={handleSelectCategory} categoryList={CATEGORY_LIST}>
          <Typography.Header2>
            현재까지 결제하신 내역은
            <br /> 총{' '}
            <Typography.Header2 as='span' color={COLORS.MAIN_GREEN}>
              4
            </Typography.Header2>
            번 입니다.
          </Typography.Header2>
        </ServiceFilter>
        <PurchaseHistoryList />
      </Flex.Vertical>
    </StyledPurchaseHistory>
  );
}

export default PurchaseHistory;
