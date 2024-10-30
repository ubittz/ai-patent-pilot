import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Main from '@@pages/Main';
import My from '@@pages/My';
import UpdateMyInfo from '@@pages/My/UpdateMyInfo';
import Register from '@@pages/Register';
import Account from '@@pages/Register/Account';
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
      <Route path={pathGenerator(PAGES.MY)} element={<My />} />
      <Route path={pathGenerator(`${PAGES.MY}/update`)} element={<UpdateMyInfo />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
