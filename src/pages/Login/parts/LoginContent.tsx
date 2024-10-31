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
import { LoginForm } from '@@pages/Login/types';

const StyledLoginContent = styled(FullScreen)`
  .body {
    padding: 0 30px;
    padding-top: 30px;
  }
`;

function LoginContent() {
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit } = useFormikContext<LoginForm>();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLoginContent>
        <Header onBack={handleClickBack} />
        <Flex.Vertical className='body' gap={30}>
          <Typography.Header2>
            반가워요!
            <br />
            다양한 서비스를 이용해보세요.
          </Typography.Header2>
          <InputFormGroup
            label='아이디'
            inputProps={{
              ...getFieldProps('id'),
              placeholder: '아이디를 입력하세요',
            }}
          />
          <InputFormGroup
            label='비밀번호'
            inputProps={{
              ...getFieldProps('password'),
              type: 'password',
              placeholder: '비밀번호를 입력하세요.',
            }}
          />
        </Flex.Vertical>
        <FooterContainer>
          <Button.Large type='submit'>로그인</Button.Large>
        </FooterContainer>
      </StyledLoginContent>
    </Form>
  );
}

export default LoginContent;
