export const TICKET_STATUS = {
  USING: 'using',
  EXPIRY: 'expiry',
} as const;

export const TICKET_STATUS_STRING = {
  [TICKET_STATUS.USING]: '사용 중',
  [TICKET_STATUS.EXPIRY]: '사용 완료',
};
