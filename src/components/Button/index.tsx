import BasicButton from './BasicButton';
import { BUTTON_SIZE } from './constants';

const Button = {
  [BUTTON_SIZE.LARGE]: BasicButton(BUTTON_SIZE.LARGE),
  [BUTTON_SIZE.MEDIUM]: BasicButton(BUTTON_SIZE.MEDIUM),
  [BUTTON_SIZE.SMALL]: BasicButton(BUTTON_SIZE.SMALL),
};

export default Button;
