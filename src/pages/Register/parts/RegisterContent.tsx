import { useState } from 'react';

import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { useToggle } from '@@hooks/common';
import { RegisterForm } from '@@pages/Register/types';

const StyledRegisterContent = styled(FullScreen)`
  .body {
    padding: 0 30px;
    padding-top: 30px;

    .register__phone_wrap {
      .register__phone_input {
        flex: 1;
      }
      .register__phone_button {
        flex: 0 0 auto;
        padding: 0 19.5px;
      }
    }
  }
`;

function RegisterContent() {
  const navigate = useNavigate();

  const [visible, toggle] = useToggle();
  const [isRequestVerify, setIsRequestVerify] = useState<boolean>(false);

  const { values, getFieldProps, handleSubmit } = useFormikContext<RegisterForm>();

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickVerify = () => {
    toggle();
    setIsRequestVerify(true);
  };

  const handleConfirm = () => {
    toggle();
    setIsRequestVerify(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Popup visible={visible} onConfirm={handleConfirm}>
        인증번호 전송이 완료되었습니다.
      </Popup>
      <StyledRegisterContent>
        <Header onBack={handleClickBack} />
        <Flex.Vertical className='body' gap={30}>
          <Typography.Header2>
            가입하고 더 많은 기능을
            <br />
            만나보세요.
          </Typography.Header2>
          <InputFormGroup label='이름' inputProps={{ ...getFieldProps('name'), placeholder: '이름을 입력해주세요' }} />
          <InputFormGroup label='이메일' inputProps={{ ...getFieldProps('email'), placeholder: '이메일을 입력해주세요' }} />
          <Flex.Horizontal className='register__phone_wrap' alignItems='flex-end' gap={12}>
            <InputFormGroup
              className='register__phone_input'
              label='연락처'
              inputProps={{ ...getFieldProps('phone'), readOnly: isRequestVerify, placeholder: `'-'를 빼고 입력해주세요` }}
              buttonProps={{
                children: '인증하기',
                type: 'button',
                disabled: isRequestVerify || !values.phone,
                onClick: handleClickVerify,
              }}
            />
          </Flex.Horizontal>
          <InputFormGroup
            label='인증번호'
            inputProps={{ ...getFieldProps('otp'), readOnly: !isRequestVerify, placeholder: '인증번호을 입력해주세요' }}
          />
        </Flex.Vertical>
        <FooterContainer>
          <Button.Large type='submit'>다음</Button.Large>
        </FooterContainer>
      </StyledRegisterContent>
    </Form>
  );
}

export default RegisterContent;
