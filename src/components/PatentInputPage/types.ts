import { CheckBoxProps } from '@@components/CheckBox/types';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';

export interface PatentInputPageProps {
  title: string;
  inputFormGroupProps: InputFormGroupProps;
  checkBoxProps?: CheckBoxProps;
}
