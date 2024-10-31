import styled from 'styled-components';

import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledPurchaseConsent = styled(Flex.Vertical)`
  padding: 30px;
  padding-bottom: 80px;
`;

function PurchaseConsent() {
  return (
    <StyledPurchaseConsent gap={30}>
      <Typography.Header3>이용 동의</Typography.Header3>
      <Flex.Vertical gap={12}>
        <CheckBox>개인정보 수집 및 이용 동의(필수)</CheckBox>
        <CheckBox>이용약관 동의(필수)</CheckBox>
        <CheckBox>결제 동의(필수)</CheckBox>
      </Flex.Vertical>
    </StyledPurchaseConsent>
  );
}

export default PurchaseConsent;
