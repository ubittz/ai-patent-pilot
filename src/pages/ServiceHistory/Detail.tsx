import { useNavigate, useParams } from 'react-router-dom';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SERVICE_CATEGORY, SERVICE_HISTORY_LIST } from '@@pages/ServiceHistory/constants';
import BaseServiceDescription from '@@pages/ServiceHistory/parts/BaseServiceDescription';
import BaseServiceInfo from '@@pages/ServiceHistory/parts/BaseServiceInfo';
import { serviceDescriptionContentGenerator, serviceDescriptionTitleGenerator, serviceInfoContentGenerator } from '@@pages/ServiceHistory/utils';
import { useAppState } from '@@store/hooks';

function ServiceHistoryDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const me = useAppState((state) => state.home.me);

  const service = SERVICE_HISTORY_LIST.find((service) => service.id === +(id ?? 0));

  const handleClickBack = () => {
    navigate(-1);
  };

  if (!service) return;

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Header4>서비스 이력 확인</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <BaseServiceInfo category={service.category} contents={serviceInfoContentGenerator(service)} />
        <BaseServiceDescription title={serviceDescriptionTitleGenerator(me.name, service)} contents={serviceDescriptionContentGenerator(service)} />
      </Flex.Vertical>
      {service.category === SERVICE_CATEGORY.CUSTOM_PATENT && (
        <Flex.Vertical className='tw-py-[9px] tw-px-[30px]' gap={4}>
          <Button.Large disabled>다운로드</Button.Large>
          <Typography.Header7 className='tw-ml-[10px]' color={COLORS.SUB_TEXT}>
            ⓘ 서비스 준비중입니다.
          </Typography.Header7>
        </Flex.Vertical>
      )}
    </FullScreen>
  );
}

export default ServiceHistoryDetail;
