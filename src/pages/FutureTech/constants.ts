import { Category, CategoryDomain } from '@@pages/FutureTech/types';

export const CATEGORY_LIST: Category[] = [
  {
    id: 1,
    name: '인공지능/바이오헬스/로봇',
  },
  {
    id: 2,
    name: '화학/섬유/의료/환경',
  },
];

export const CATEGORY_DOMAIN_LIST: CategoryDomain[] = [
  {
    id: 1,
    categoryId: 1,
    title: '인공지능',
    description: '영상인식, 이미지 분석, 정보검색기술 및 트래픽 관리 등 인공지능과 빅데이터 관련발명에 속하는 분야입니다',
  },
  {
    id: 2,
    categoryId: 2,
    title: '화학',
    description: '유기화학, 약품화학, 기초재료화학 등 관련발명에 속하는 분야입니다(화장품, 바이오소재, 의약품, 유기광원소재, 세라믹스, 코팅소재 등) ',
  },
  {
    id: 3,
    categoryId: 1,
    title: '인공지능을 활용한 안내서비스를 제공하는 로봇장치',
    description:
      '객체인식, 음성인식의 인공지능과 센서기술 등을 활용, 자율주행기술과 연계한 인공지능 기반 스마트 안내서비스를 수행하는 자율주행 로봇에 관한 발명이다',
  },
  {
    id: 4,
    categoryId: 2,
    title: '플라즈마 발생기를 통한 온실가스 저감 시스템',
    description: '플라즈마 발생기의 모듈 구성을 달리하고, 이를 원격으로 제어하여 저감효과와 편의성을 향상시킨 발명이다',
  },
];
