import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { PopupProps } from '@@components/Popup/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

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

    background: ${COLORS.WHITE_TEXT};
    border-radius: 12px;

    .popup_box__content {
      text-align: center;
      flex: 1;
      padding-top: 44px;
    }

    .popup_box__button {
      width: 156px;
    }
  }
`;

function Popup({ visible, confirmText = '확인', children, onConfirm }: PopupProps) {
  return (
    <StyledPopup $visible={visible}>
      <Flex.Vertical className='popup_box' alignItems='center'>
        <Typography.Header4 className='popup_box__content' fontWeight={400}>
          {children}
        </Typography.Header4>
        <Button.Small className='popup_box__button' onClick={onConfirm}>
          {confirmText}
        </Button.Small>
      </Flex.Vertical>
    </StyledPopup>
  );
}

export default Popup;
