export const CHECK_LEVEL_RESULT_STEP = {
  STEP_1: 'step1',
  STEP_2: 'step2',
  STEP_3: 'step3',
  STEP_4: 'step4',
  STEP_5: 'step5',
} as const;

export const ALL_CHECK_LEVEL_RESULT_STEP = Object.values(CHECK_LEVEL_RESULT_STEP);

export const CHECK_LEVEL_RESULT_STEP_DESCRIPTION = {
  [CHECK_LEVEL_RESULT_STEP.STEP_1]:
    '고객님의 특허/아이디어의 기술수준은 1단계입니다. 기술수준 1단계는 유사분야 기술과 비교하여 기술의 진보성이 낮은 상태를 의미하고, 아이디어의 경우 등록가능성이 낮은 단계입니다.',
  [CHECK_LEVEL_RESULT_STEP.STEP_2]:
    '고객님의 특허/아이디어의 기술수준은 2단계입니다. 기술수준 2단계는 유사분야 기술과 비교하여 기술의 진보성이 다소 낮은 상태를 의미하고, 아이디어의 경우 등록가능성이 높지는 않은 단계입니다.',
  [CHECK_LEVEL_RESULT_STEP.STEP_3]:
    '고객님의 특허/아이디어의 기술수준은 3단계입니다. 기술수준 3단계는 유사분야 기술과 비교하여 기술의 진보성이 평균적인 상태를 의미하고, 아이디어의 경우 등록가능성이 다소 있는 단계입니다.',
  [CHECK_LEVEL_RESULT_STEP.STEP_4]:
    '고객님의 특허/아이디어의 기술수준은 4단계입니다. 기술수준 4단계는 유사분야 기술과 비교하여 기술의 진보성이 높은 상태를 의미하고, 아이디어의 경우 등록가능성이 높은 단계입니다.',
  [CHECK_LEVEL_RESULT_STEP.STEP_5]:
    '고객님의 특허/아이디어의 기술수준은 5단계입니다. 기술수준 5단계는 유사분야 기술과 비교하여 기술의 진보성이 매우 높은 상태를 의미하고, 아이디어의 경우 등록가능성이 매우 높은 단계입니다.',
};
