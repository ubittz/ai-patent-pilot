import Flex from '@@components/Flex';
import { SERVICE_HISTORY_LIST } from '@@pages/ServiceHistory/constants';
import ServiceItem from '@@pages/ServiceHistory/parts/ServiceItem';

function ServiceList() {
  return (
    <Flex.Vertical className='service_history__service_list' gap={12}>
      {SERVICE_HISTORY_LIST.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </Flex.Vertical>
  );
}

export default ServiceList;
