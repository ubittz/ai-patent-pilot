import { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { useToggle } from '@@hooks/common';
import { ActiveFlagIcon, ActiveFolderIcon, ActiveMedalIcon, InactiveFlagIcon, InactiveFolderIcon, InactiveMedalIcon } from '@@pages/FutureTech/icons';
import FutureTechItem from '@@pages/FutureTech/parts/FutureTechItem';
import { PatentContactItem } from '@@pages/FutureTech/types';

const StyledContactSection = styled(Flex.Vertical)`
  padding: 40px 30px;
  padding-bottom: 80px;
`;

const CONTACT_LIST: PatentContactItem[] = [
  {
    id: 1,
    title: '특허1 만나보기',
    activeIcon: <ActiveMedalIcon />,
    inactiveIcon: <InactiveMedalIcon />,
  },
  {
    id: 2,
    title: '특허2 만나보기',
    activeIcon: <ActiveFlagIcon />,
    inactiveIcon: <InactiveFlagIcon />,
  },
  {
    id: 3,
    title: '특허3 만나보기',
    activeIcon: <ActiveFolderIcon />,
    inactiveIcon: <InactiveFolderIcon />,
  },
];

function FutureTechContact() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [visible, toggle] = useToggle();

  const handleSelectItem = (id: number) => {
    setSelectedId(id);
  };

  const handleClickConfirm = () => {
    toggle();
  };

  return (
    <StyledContactSection gap={40}>
      <Popup visible={visible} content='미래 기술 상담 접수가 완료되었습니다.' onConfirm={toggle} />
      <Flex.Vertical gap={4}>
        <Typography.Header3>
          AI로 분석한 진보된
          <br />
          미래 기술을 만나보세요.
        </Typography.Header3>
        <Typography.Header6 color={COLORS.SUB_TEXT}>AI로 분석한 진보된 미래 기술을 만나보세요.</Typography.Header6>
      </Flex.Vertical>
      <Flex.Vertical gap={12}>
        <Flex.Vertical gap={8}>
          {CONTACT_LIST.map((contact) => (
            <FutureTechItem key={contact.id} item={contact} selected={contact.id === selectedId} onSelect={handleSelectItem} />
          ))}
        </Flex.Vertical>
        <Button.Large onClick={handleClickConfirm}>특허기술 선택 완료</Button.Large>
      </Flex.Vertical>
    </StyledContactSection>
  );
}

export default FutureTechContact;
