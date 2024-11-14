import { ChangeEventHandler, useState } from 'react';

import { RouteObject, useNavigate } from 'react-router-dom';

import PatentCheckPage from '@@components/PatentCheckPage';
import { usePatentCheckbox } from '@@components/PatentCheckPage/hooks';
import PatentInputPage from '@@components/PatentInputPage';
import StepPage from '@@components/StepPage';
import { useRouteStepper } from '@@hooks/common';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function CheckLevel() {
  const naviate = useNavigate();
  const { values, handleChange } = usePatentCheckbox();
  const [inputValues, setInputValues] = useState<{
    number: string;
    idea: string;
    keyword: string;
  }>({
    number: '',
    idea: '',
    keyword: '',
  });
  const [withoutNumber, setWithoutNumber] = useState<boolean>(false);

  const handleChangeInputValues =
    (key: 'number' | 'idea' | 'keyword'): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      setInputValues({
        ...inputValues,
        [key]: e.target.value,
      });
    };

  const ROUTES: RouteObject[] = [
    {
      path: '/check',
      element: (
        <PatentCheckPage
          title={
            <>
              나의 특허/아이디어 관련
              <br />
              정보를 입력해주세요.
            </>
          }
          values={values}
          onChange={handleChange}
        />
      ),
    },
    {
      path: '/number',
      element: (
        <PatentInputPage
          title='나의 특허/아이디 관련\n정보를 입력해주세요.'
          inputFormGroupProps={{
            label: '등록번호',
            inputProps: {
              placeholder: '등록번호를 입력해주세요.',
              value: inputValues.number,
              onChange: handleChangeInputValues('number'),
            },
          }}
          checkBoxProps={{
            children: '등록번호 없음',
            checked: withoutNumber,
            onChange: (e) => {
              setWithoutNumber(e.target.checked);
            },
          }}
        />
      ),
    },
    {
      path: '/idea',
      element: (
        <PatentInputPage
          title='나의 특허/아이디 관련\n정보를 입력해주세요.'
          inputFormGroupProps={{
            label: '아이디어',
            inputProps: {
              placeholder: '아이디어를 입력해주세요.',
              value: inputValues.idea,
              onChange: handleChangeInputValues('idea'),
            },
          }}
        />
      ),
    },
    {
      path: '/keyword',
      element: (
        <PatentInputPage
          title='나의 특허/아이디 관련\n정보를 입력해주세요.'
          inputFormGroupProps={{
            label: '키워드',
            inputProps: {
              placeholder: '키워드를 입력해주세요.',
              value: inputValues.keyword,
              onChange: handleChangeInputValues('keyword'),
            },
          }}
        />
      ),
    },
  ];

  const { routes, gauge, currentStep } = useRouteStepper(ROUTES, PAGES.CHECK_LEVEL);

  const handleClickNext = (step: number) => () => {
    if (step === ROUTES.length - 1) {
      naviate(pathGenerator(`${PAGES.CHECK_LEVEL}/result`));
    } else {
      naviate(pathGenerator(`${PAGES.CHECK_LEVEL}${ROUTES[currentStep + 1].path}`));
    }
  };

  const getButtonDisabled = (step: number) => {
    switch (step) {
      case 0:
        return !values.length;
      case 1:
        return !withoutNumber && !inputValues.number.trim();
      case 2:
        return !inputValues.idea.trim();
      case 3:
        return !inputValues.keyword.trim();
    }
    return true;
  };

  return (
    <StepPage
      title='기술 레벨 측정'
      gauge={gauge}
      buttonProps={{
        children: currentStep === ROUTES.length - 1 ? '레벨 측정' : '다음',
        disabled: getButtonDisabled(currentStep),
        onClick: handleClickNext(currentStep),
      }}
    >
      {routes}
    </StepPage>
  );
}

export default CheckLevel;
