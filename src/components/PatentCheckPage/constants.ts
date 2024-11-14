export const TECH_SECTION = {
  A_SECTION: 'aSection',
  B_SECTION: 'bSection',
  C_SECTION: 'cSection',
  D_SECTION: 'dSection',
  E_SECTION: 'eSection',
  F_SECTION: 'fSection',
  G_SECTION: 'gSection',
  H_SECTION: 'hSection',
} as const;

export const ALL_TECH_SECTION = Object.values(TECH_SECTION);

export const TECH_SECTION_STRINGS = {
  [TECH_SECTION.A_SECTION]: 'A섹션\n(생활필수품)',
  [TECH_SECTION.B_SECTION]: 'B섹션\n(처리조작;운수)',
  [TECH_SECTION.C_SECTION]: 'C섹션\n(화학; 야금)',
  [TECH_SECTION.D_SECTION]: 'D섹션\n(섬유, 지류)',
  [TECH_SECTION.E_SECTION]: 'E섹션\n(고정구조물)',
  [TECH_SECTION.F_SECTION]: 'F섹션\n(기계공학; 조명; 가열; 무기; 폭파)',
  [TECH_SECTION.G_SECTION]: 'G섹션\n(물리학)',
  [TECH_SECTION.H_SECTION]: 'H섹션\n(전기)',
};
