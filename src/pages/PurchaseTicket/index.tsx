import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Popup from '@@components/Popup';
import { useToggle } from '@@hooks/common';
import { PURCHASE_TYPE, TICKET_TYPE } from '@@pages/PurchaseTicket/constants';
import PurchaseTicketContent from '@@pages/PurchaseTicket/parts/PurchaseTicketContent';
import { PurchaseTicketDto } from '@@pages/PurchaseTicket/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: PurchaseTicketDto = {
  ticketType: TICKET_TYPE.TIME_1,
  purchaseType: PURCHASE_TYPE.ACCOUNT,
};

function PurchaseTicket() {
  const navigate = useNavigate();

  const [visible, toggle] = useToggle();

  const handleSubmit = () => {
    toggle();
  };

  const handleConfirm = () => {
    toggle();
    navigate(pathGenerator(PAGES.MY));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div>
        <Popup visible={visible} onConfirm={handleConfirm}>
          결제가 완료되었습니다.
        </Popup>
        <PurchaseTicketContent />
      </div>
    </Formik>
  );
}

export default PurchaseTicket;
