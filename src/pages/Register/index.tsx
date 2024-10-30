import { useState } from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Popup from '@@components/Popup';
import { useToggle } from '@@hooks/common';
import RegisterContent from '@@pages/Register/parts/RegisterContent';
import { RegisterForm } from '@@pages/Register/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: RegisterForm = {
  name: '',
  email: '',
  phone: '',
  otp: '',
};

function Register() {
  const navigate = useNavigate();

  const [popupVisible, togglePopupVisible] = useToggle();
  const [popupContent, setPopupContent] = useState<string>('');

  const handleSubmit = (form: RegisterForm) => {
    if (!form.name.trim()) {
      setPopupContent('이름을 입력해주세요.');
    } else if (!form.email.trim()) {
      setPopupContent('이메일을 입력해주세요.');
    } else if (!form.phone.trim()) {
      setPopupContent('연락처를 입력해주세요');
    } else if (!form.otp) {
      setPopupContent('인증번호를 입력해주세요');
    } else {
      return navigate(pathGenerator(`${PAGES.REGISTER}/account`));
    }

    togglePopupVisible();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div>
        <Popup visible={popupVisible} content={popupContent} onConfirm={togglePopupVisible} />
        <RegisterContent />
      </div>
    </Formik>
  );
}

export default Register;
