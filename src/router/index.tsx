import { Navigate, Route, Routes } from 'react-router-dom';

import CheckLevel from '@@pages/CheckLevel';
import Error from '@@pages/Error';
import FutureTech from '@@pages/FutureTech';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Main from '@@pages/Main';
import My from '@@pages/My';
import PurchaseHistory from '@@pages/PurchaseHistory';
import PurchaseHistoryDetail from '@@pages/PurchaseHistory/Detail';
import PurchaseTicket from '@@pages/PurchaseTicket';
import RecommendService from '@@pages/RecommendService';
import Register from '@@pages/Register';
import Account from '@@pages/Register/Account';
import ServiceHistory from '@@pages/ServiceHistory';
import ServiceHistoryDetail from '@@pages/ServiceHistory/Detail';
import TicketHistory from '@@pages/TicketHistory';
import UpdateMyInfo from '@@pages/UpdateMyInfo';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />

      <Route path={pathGenerator(PAGES.MAIN)} element={<Main />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />

      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(`${PAGES.REGISTER}/account`)} element={<Account />} />

      <Route path={pathGenerator(PAGES.HOME)} element={<Home />} />

      <Route path={pathGenerator(`${PAGES.RECOMMEND_SERVICE}`)} element={<RecommendService />} />

      <Route path={pathGenerator(PAGES.FUTURE_TECH)} element={<FutureTech />} />

      <Route path={pathGenerator(PAGES.MY)} element={<My />} />
      <Route path={pathGenerator(`${PAGES.MY}/update`)} element={<UpdateMyInfo />} />
      <Route path={pathGenerator(`${PAGES.MY}/purchase-ticket`)} element={<PurchaseTicket />} />
      <Route path={pathGenerator(`${PAGES.MY}/service-history`)} element={<ServiceHistory />} />
      <Route path={pathGenerator(`${PAGES.MY}/service-history/:id`)} element={<ServiceHistoryDetail />} />
      <Route path={pathGenerator(`${PAGES.MY}/ticket-history`)} element={<TicketHistory />} />
      <Route path={pathGenerator(`${PAGES.MY}/purchase-history`)} element={<PurchaseHistory />} />
      <Route path={pathGenerator(`${PAGES.MY}/purchase-history/:id`)} element={<PurchaseHistoryDetail />} />

      <Route path={pathGenerator(`${PAGES.CHECK_LEVEL}/*`)} element={<CheckLevel />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
