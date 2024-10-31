import { useParams } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';

import { SERVICE_HISTORY_LIST } from './constants';
import BaseServiceDescription from './parts/BaseServiceDescription';
import BaseServiceInfo from './parts/BaseServiceInfo';
import { serviceDescriptionContentGenerator, serviceDescriptionTitleGenerator, serviceInfoContentGenerator } from './utils';

function ServiceHistoryDetail() {
  const { id } = useParams();

  const service = SERVICE_HISTORY_LIST.find((service) => service.id === +(id ?? 0));

  if (!service) return;

  return (
    <FullScreen>
      <Header>
        <Typography.Header4>서비스 이력 확인</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <BaseServiceInfo category={service.category} contents={serviceInfoContentGenerator(service)} />
        <BaseServiceDescription title={serviceDescriptionTitleGenerator(service)} contents={serviceDescriptionContentGenerator(service)} />
      </Flex.Vertical>
    </FullScreen>
  );
}

export default ServiceHistoryDetail;
