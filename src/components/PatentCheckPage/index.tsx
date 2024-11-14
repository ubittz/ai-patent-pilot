import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

import { ALL_TECH_SECTION, TECH_SECTION_STRINGS } from './constants';
import PatentCheckBox from './parts/PatentCheckBox';
import { PatentCheckPageProps } from './types';

const StyledPatentCheckPage = styled(Flex.Vertical)``;

function PatentCheckPage({ title, values, onChange }: PatentCheckPageProps) {
  return (
    <StyledPatentCheckPage className='body tw-px-[30px] tw-py-[30px]' gap={40}>
      <Typography.Header2>{title}</Typography.Header2>
      <Flex.Vertical gap={12}>
        <Typography.Header6>기술 분야</Typography.Header6>
        <Flex.Vertical gap={8}>
          <PatentCheckBox value='' checked={values.length === ALL_TECH_SECTION.length} onChange={onChange}>
            <Typography.Header4 color='inhrit' fontWeight={400}>
              전체
            </Typography.Header4>
          </PatentCheckBox>
          {ALL_TECH_SECTION.map((section) => (
            <PatentCheckBox key={section} value={section} onChange={onChange} checked={values.includes(section)}>
              <div>
                {TECH_SECTION_STRINGS[section].split('\n').map((text) => (
                  <Typography.Header4 key={text} color='inhrit' fontWeight={400}>
                    {text}
                  </Typography.Header4>
                ))}
              </div>
            </PatentCheckBox>
          ))}
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledPatentCheckPage>
  );
}

export default PatentCheckPage;
