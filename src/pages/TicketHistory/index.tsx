import { useNavigate } from 'react-router-dom';

import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';

function TicketHistory() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Header4>서비스 이용권 내역</Typography.Header4>
      </Header>
    </FullScreen>
  );
}

export default TicketHistory;
