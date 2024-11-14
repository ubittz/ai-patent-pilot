import { ChangeEventHandler, useState } from 'react';

import { ALL_TECH_SECTION } from '@@components/PatentCheckPage/constants';
import { TechSection } from '@@components/PatentCheckPage/types';

export const usePatentCheckbox = () => {
  const [values, setValues] = useState<TechSection[]>(ALL_TECH_SECTION);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = (e.target.value || undefined) as TechSection | undefined;

    if (!value) {
      setValues(values.length === ALL_TECH_SECTION.length ? [] : ALL_TECH_SECTION);
      return;
    }

    if (values.length === ALL_TECH_SECTION.length) {
      setValues([value]);
      return;
    }

    if (!values.includes(value)) {
      setValues((prev) => prev.concat(value));
    } else {
      const index = values.indexOf(value);
      const newValues = [...values];
      newValues.splice(index, 1);
      setValues(newValues);
    }
  };

  return { values, handleChange };
};
