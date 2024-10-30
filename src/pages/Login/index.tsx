import { useState } from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Popup from '@@components/Popup';
import { useToggle } from '@@hooks/common';
import LoginContent from '@@pages/Login/parts/LoginContent';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { LoginForm } from './types';

const initialValues: LoginForm = {
  id: '',
  password: '',
};

function Login() {
  const navigate = useNavigate();
  const [popupContent, setPopupContent] = useState<string>('');
  const [visiblePopup, togglePopup] = useToggle();

  const handleSubmit = (form: LoginForm) => {
    if (!form.id.trim()) {
      setPopupContent('아이디를 입력해주세요');
    } else if (!form.password.trim()) {
      setPopupContent('비밀번호를 입력해주세요');
    } else {
      return navigate(pathGenerator(PAGES.HOME));
    }

    togglePopup();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div>
        <Popup visible={visiblePopup} content={popupContent} onConfirm={togglePopup} />
        <LoginContent />
      </div>
    </Formik>
  );
}

export default Login;
