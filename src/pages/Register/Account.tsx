import { useState } from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Popup from '@@components/Popup';
import { useToggle } from '@@hooks/common';
import AccountContent from '@@pages/Register/parts/AccountContent';
import { AccountForm } from '@@pages/Register/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: AccountForm = {
  id: '',
  password: '',
  passwordCheck: '',
};

function Account() {
  const navigate = useNavigate();

  const [completePopupVisible, toggleCompletePopupVisible] = useToggle();
  const [popupVisible, togglePopupVisible] = useToggle();
  const [popupContent, setPopupContent] = useState<string>('');

  const handleSubmit = (form: AccountForm) => {
    if (!form.id.trim()) {
      setPopupContent('아이디를 입력해주세요.');
    } else if (!form.password.trim()) {
      setPopupContent('비밀번호를 입력해주세요.');
    } else if (form.password !== form.passwordCheck) {
      setPopupContent('비밀번호가 일치하지 않습니다.');
    } else {
      return toggleCompletePopupVisible();
    }

    togglePopupVisible();
  };

  const handleConfirmComplete = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div>
        <Popup visible={popupVisible} onConfirm={togglePopupVisible}>
          {popupContent}
        </Popup>
        <Popup visible={completePopupVisible} onConfirm={handleConfirmComplete}>
          회원가입이 완료되었어요!
        </Popup>
        <AccountContent />
      </div>
    </Formik>
  );
}

export default Account;
