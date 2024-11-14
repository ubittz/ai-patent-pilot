import { ChangeEventHandler, useState } from 'react';

import { RouteObject, useNavigate } from 'react-router-dom';

import PatentCheckPage from '@@components/PatentCheckPage';
import { usePatentCheckbox } from '@@components/PatentCheckPage/hooks';
import PatentInputPage from '@@components/PatentInputPage';
import StepPage from '@@components/StepPage';
import { useRouteStepper } from '@@hooks/common';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function FindPatent() {
  const naviate = useNavigate();
  const { values, handleChange } = usePatentCheckbox();
  const [inputValues, setInputValues] = useState<{
    keyword: string;
    content: string;
  }>({
    keyword: '',
    content: '',
  });

  const handleChangeInputValues =
    (key: 'keyword' | 'content'): ChangeEventHandler<HTMLInputElement> =>
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
              찾으시는 특허 관련
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
      path: '/keyword',
      element: (
        <PatentInputPage
          title='찾으시는 특허 관련\n정보를 입력해주세요.'
          inputFormGroupProps={{
            label: '핵심키워드',
            inputProps: {
              placeholder: '핵심 키워드를 입력해주세요.',
              value: inputValues.keyword,
              onChange: handleChangeInputValues('keyword'),
            },
          }}
        />
      ),
    },
    {
      path: '/content',
      element: (
        <PatentInputPage
          title='찾으시는 특허 관련\n정보를 입력해주세요.'
          inputFormGroupProps={{
            label: '기술 내용',
            inputProps: {
              placeholder: '기술 내용를 입력해주세요.',
              value: inputValues.content,
              onChange: handleChangeInputValues('content'),
            },
          }}
        />
      ),
    },
  ];

  const { routes, gauge, currentStep } = useRouteStepper(ROUTES, PAGES.FIND_PATENT);

  const handleClickNext = (step: number) => () => {
    if (step === ROUTES.length - 1) {
      naviate(pathGenerator(`${PAGES.FIND_PATENT}/result`));
    } else {
      console.log(currentStep);
      naviate(pathGenerator(`${PAGES.FIND_PATENT}${ROUTES[currentStep + 1].path}`));
    }
  };

  const getButtonDisabled = (step: number) => {
    switch (step) {
      case 0:
        return !values.length;
      case 1:
        return !inputValues.keyword.trim();
      case 2:
        return !inputValues.content.trim();
    }
    return true;
  };

  return (
    <StepPage
      title='등록된 특허 찾기'
      gauge={gauge}
      buttonProps={{
        children: currentStep === ROUTES.length - 1 ? '특허 찾기' : '다음',
        disabled: getButtonDisabled(currentStep),
        onClick: handleClickNext(currentStep),
      }}
    >
      {routes}
    </StepPage>
  );
}

export default FindPatent;
