import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import { PatentInputPageProps } from '@@components/PatentInputPage/types';
import Typography from '@@components/Typography';

function PatentInputPage({ title, inputFormGroupProps, checkBoxProps }: PatentInputPageProps) {
  return (
    <Flex.Vertical className='body tw-pt-[30px] tw-px-[30px]' gap={40}>
      <Flex.Vertical>
        {title.split('\\n').map((text, index) => (
          <Typography.Header2 key={index}>{text}</Typography.Header2>
        ))}
      </Flex.Vertical>
      <Flex.Vertical gap={8}>
        <InputFormGroup {...inputFormGroupProps} />
        {checkBoxProps && <CheckBox {...checkBoxProps} />}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default PatentInputPage;
