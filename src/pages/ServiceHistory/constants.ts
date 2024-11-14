import { ServiceHistoryItem } from '@@pages/ServiceHistory/types';

export const SERVICE_CATEGORY = {
  CHECK_LEVEL: 'checkLevel',
  FIND_PATENT: 'findPatent',
  CUSTOM_PATENT: 'customPatent',
  FUTURE_TECH: 'futureTech',
} as const;

export const ALL_SERVICE_CATEGORY = Object.values(SERVICE_CATEGORY);

export const SERVICE_CATEGORY_STRING = {
  [SERVICE_CATEGORY.CHECK_LEVEL]: '기술 레벨 측정',
  [SERVICE_CATEGORY.FIND_PATENT]: '등록 특허 찾기',
  [SERVICE_CATEGORY.CUSTOM_PATENT]: '내가 원하는 특허',
  [SERVICE_CATEGORY.FUTURE_TECH]: '미래기술',
} as const;

export const SERVICE_HISTORY_LIST: ServiceHistoryItem[] = [
  {
    id: 1,
    category: SERVICE_CATEGORY.CHECK_LEVEL,
    title: '인공지능을 이용한 기술수준평가',
  },
  {
    id: 2,
    category: SERVICE_CATEGORY.FIND_PATENT,
    title: '#드론 #카메라 #센서',
  },
  {
    id: 3,
    category: SERVICE_CATEGORY.CUSTOM_PATENT,
    title: '드론을 활용한 녹조제거 및 개선시스템',
  },
  {
    id: 4,
    category: SERVICE_CATEGORY.FUTURE_TECH,
    title: '인공지능을 활용한 안내서비스를 제공하는 로봇장치',
  },
];
