import { ChangeEventHandler } from 'react';

import { Field, FieldProps, Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FormGroup from '@@components/FormGroup';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import Radio from '@@components/Radio';
import Typography from '@@components/Typography';
import { UpdateMyInfoForm } from '@@pages/My/types';

const StyledUpdateMyInfoContent = styled(FullScreen)`
  .body {
    padding: 30px;

    .update_my_info__radio_box {
      padding: 10px 0;
    }
  }
`;

function UpdateMyInfoContent() {
  const navigate = useNavigate();

  const { values, getFieldProps, handleSubmit, setFieldValue } = useFormikContext<UpdateMyInfoForm>();

  const handleBack = () => {
    navigate(-1);
  };

  const handleChangePublish: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFieldValue('publish', e.target.value === 'true');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledUpdateMyInfoContent>
        <Header onBack={handleBack}>
          <Typography.Header4>내 정보 수정</Typography.Header4>
        </Header>
        <Flex.Vertical className='body' gap={30}>
          <Typography.Header2>
            새로운 정보가
            <br />
            있나요?
          </Typography.Header2>
          <InputFormGroup label='이름' inputProps={{ ...getFieldProps('name'), placeholder: '이름을 입력하세요.' }} />
          <InputFormGroup label='아이디' inputProps={{ ...getFieldProps('id'), placeholder: '이름을 입력하세요.', readOnly: true }} />
          <Flex.Vertical gap={8}>
            <InputFormGroup label='비밀번호 수정' inputProps={{ ...getFieldProps('password'), placeholder: '비밀번호를 입력하세요.' }} />
            <InputFormGroup inputProps={{ ...getFieldProps('passwordCheck'), placeholder: '비밀번호를 한번 더 입력하세요.' }} />
          </Flex.Vertical>
          <InputFormGroup
            label='연락처'
            inputProps={{ ...getFieldProps('phone'), placeholder: "'-'를 빼고 입력하세요." }}
            buttonProps={{
              children: '인증하기',
              type: 'button',
              disabled: !values.phone?.trim(),
            }}
          />
          <FormGroup label='연락처 공개 여부'>
            <Flex.Horizontal gap={30} className='update_my_info__radio_box'>
              <Field
                type='radio'
                {...getFieldProps('publish')}
                onChange={handleChangePublish}
                value={true}
                as={(props: FieldProps['field']) => <Radio {...props}>공개</Radio>}
              />
              <Field
                type='radio'
                {...getFieldProps('publish')}
                onChange={handleChangePublish}
                value={false}
                as={(props: FieldProps['field']) => <Radio {...props}>비공개</Radio>}
              />
            </Flex.Horizontal>
          </FormGroup>
          <InputFormGroup
            label='이메일'
            inputProps={{
              ...getFieldProps('email'),
              placeholder: '이메일을 입력해주세요.',
            }}
          />
        </Flex.Vertical>
        <FooterContainer>
          <Button.Large type='submit'>변경하기</Button.Large>
        </FooterContainer>
      </StyledUpdateMyInfoContent>
    </Form>
  );
}

export default UpdateMyInfoContent;
