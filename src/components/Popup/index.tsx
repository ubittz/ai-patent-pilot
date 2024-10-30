import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

import { PopupProps } from './types';

const StyledPopup = styled.div<{ $visible: boolean }>`
  position: fixed;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  padding: 20px;

  z-index: 1000;

  .popup_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 82%;
    height: 195px;
    padding: 20px 0;

    background: ${COLORS.GRAY_SCALE_000};
    border-radius: 12px;

    .popup_box__content {
      flex: 1;
      padding-top: 44px;
    }

    .popup_box__button {
      width: 156px;
    }
  }
`;

function Popup({ visible, content, confirmText = '확인', onConfirm }: PopupProps) {
  return (
    <StyledPopup $visible={visible}>
      <Flex.Vertical className='popup_box' alignItems='center'>
        <div className='popup_box__content'>{content}</div>
        <Button.Medium className='popup_box__button' onClick={onConfirm}>
          {confirmText}
        </Button.Medium>
      </Flex.Vertical>
    </StyledPopup>
  );
}

export default Popup;
