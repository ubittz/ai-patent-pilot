import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { useToggle } from '@@hooks/common';

import { AccountForm } from '../types';

const StyledAccountContent = styled(FullScreen)`
  .body {
    padding: 0 30px;
    padding-top: 30px;
  }
`;

function AccountContent() {
  const navigate = useNavigate();

  const { values, getFieldProps, handleSubmit } = useFormikContext<AccountForm>();

  const [, toggleCheck] = useToggle();

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickCheck = () => {
    toggleCheck();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledAccountContent>
        <Header onBack={handleClickBack} />
        <Flex.Vertical className='body' gap={30}>
          <Typography.Header2>
            가입하고 더 많은 기능을
            <br />
            만나보세요.
          </Typography.Header2>
          <InputFormGroup
            label='아이디'
            inputProps={{ ...getFieldProps('id'), placeholder: '아이디를 입력하세요.' }}
            buttonProps={{
              children: '중복확인',
              onClick: handleClickCheck,
              type: 'button',
              disabled: !values.id.trim(),
            }}
          />
          <Flex.Vertical gap={8}>
            <InputFormGroup label='비밀번호' inputProps={{ ...getFieldProps('password'), type: 'password', placeholder: '비밀번호를 입력하세요.' }} />
            <InputFormGroup inputProps={{ ...getFieldProps('passwordCheck'), type: 'password', placeholder: '비밀번호를 한번 더 입력하세요.' }} />
          </Flex.Vertical>
        </Flex.Vertical>
        <FooterContainer>
          <Button.Large type='submit'>가입하기</Button.Large>
        </FooterContainer>
      </StyledAccountContent>
    </Form>
  );
}

export default AccountContent;
