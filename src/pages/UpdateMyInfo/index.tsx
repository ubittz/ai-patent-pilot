import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Popup from '@@components/Popup';
import { useToggle } from '@@hooks/common';
import UpdateMyInfoContent from '@@pages/UpdateMyInfo/parts/UpdateMyInfoContent';
import { UpdateMyInfoForm } from '@@pages/UpdateMyInfo/types';

function UpdateMyInfo() {
  const navigate = useNavigate();

  const [popup, togglePopup] = useToggle();
  const [completePopup, toggleCompletePopup] = useToggle();

  const initialValues: UpdateMyInfoForm = {
    name: '김준수',
    id: 'kimjunsu1004',
    password: '',
    passwordCheck: '',
    phone: '',
    publish: true,
    email: '',
  };

  const handleSubmit = (form: UpdateMyInfoForm) => {
    if (form.password?.trim() && form.password?.trim() !== form.passwordCheck?.trim()) {
      return togglePopup();
    }

    toggleCompletePopup();
  };

  const handleConfirmComplete = () => {
    toggleCompletePopup();
    navigate(-1);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div>
        <Popup visible={popup} onConfirm={togglePopup} content='비밀번호가 일치하지 않습니다.' />
        <Popup visible={completePopup} onConfirm={handleConfirmComplete} content='내 정보 수정이 완료되었습니다.' />
        <UpdateMyInfoContent />
      </div>
    </Formik>
  );
}

export default UpdateMyInfo;
