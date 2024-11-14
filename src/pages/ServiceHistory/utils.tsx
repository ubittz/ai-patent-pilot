import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ServiceHistoryItem } from '@@pages/ServiceHistory/types';

import { SERVICE_CATEGORY } from './constants';

export const serviceInfoContentGenerator = ({ category }: ServiceHistoryItem) => {
  switch (category) {
    case SERVICE_CATEGORY.CHECK_LEVEL:
      return [
        {
          key: '기술분야명',
          value: 'B섹션(처리조작;운수)',
        },
        {
          key: '등록번호',
          value: '10-2443071',
        },
        {
          key: '아이디어',
          value: '인공지능을 이용한 기술수준평가',
        },
        {
          key: '키워드',
          value: '#인공지능 #기술평가 #특허정보검색 #명세서작성',
        },
      ];
    case SERVICE_CATEGORY.FIND_PATENT:
      return [
        {
          key: '기술분야명',
          value: 'F섹션(기계공학; 조명; 가열; 무기; 폭파)',
        },
        {
          key: '핵심 키워드',
          value: '드론용 카메라 부착',
        },
        {
          key: '기술 내용',
          value: '기술 내용입니다. 기술 내용입니다.',
        },
      ];
    case SERVICE_CATEGORY.CUSTOM_PATENT:
      return [
        {
          key: '기술분야명',
          value: 'F섹션(기계공학; 조명; 가열; 무기; 폭파)',
        },
        {
          key: '핵심 키워드',
          value: '#녹조 #적조 #드론',
        },
        {
          key: '기술 내용',
          value: '드론을 활용한 녹조 또는 적조 제거',
        },
      ];
    case SERVICE_CATEGORY.FUTURE_TECH:
      return [
        {
          key: '상담 신청일',
          value: '2024. 12. 23',
        },
        {
          key: '미래 기술 특허명',
          value: '인공지능을 활용한 안내서비스를 제공하는 로봇장치',
        },
      ];
  }
};

export const serviceDescriptionTitleGenerator = (name: string, { category }: ServiceHistoryItem) => {
  switch (category) {
    case SERVICE_CATEGORY.CHECK_LEVEL:
      return (
        <>
          {name}님의
          <br />
          특허/아이디어는
          <br />
          <Typography.Header2 as='span' color={COLORS.MAIN_GREEN}>
            5단계 중에 3단계
          </Typography.Header2>{' '}
          입니다.
        </>
      );
    case SERVICE_CATEGORY.FIND_PATENT:
      return (
        <>
          {name}께서
          <br />
          찾으시는 특허권의
          <br />
          정보입니다.
        </>
      );
    case SERVICE_CATEGORY.CUSTOM_PATENT:
      return (
        <>
          {name}께
          <br />
          추천드리는 특허는
          <br />
          <Typography.Header2 as='span' color={COLORS.MAIN_GREEN}>
            드론을 활용한 녹조제거 및 개선시스템
          </Typography.Header2>
          입니다.
        </>
      );
    case SERVICE_CATEGORY.FUTURE_TECH:
      return (
        <>
          미래 기술 특허 관련된
          <br />
          내용입니다.
        </>
      );
  }
};

export const serviceDescriptionContentGenerator = ({ category }: ServiceHistoryItem) => {
  switch (category) {
    case SERVICE_CATEGORY.CHECK_LEVEL:
      return [
        {
          title: '고객님의 특허/아이디어의 기술수준은 3단계입니다. ',
          description:
            '기술수준 3단계는 유사분야 기술과 비교하여 기술의 진보성이 평균적인 상태를 의미하고, 아이디어의 경우 등록가능성이 다소 있는 단계입니다.',
        },
      ];
    case SERVICE_CATEGORY.FIND_PATENT:
      return [
        {
          title: '방송용 카메라를 탑재한 드론',
          description:
            '드론을 활용하여 녹조의 위치, 분포 등을 파악하고, 녹조제거선의 효율적 이동경로를 제공하며, 녹조 분포가 심한 지역에 드론으로 화학약품을 살포하여 수질개선 조치를 하는 시스템에 대한 발명입니다.',
        },
        {
          title: '기술거래 요청한 특허에요.',
          description: (
            <>
              <Typography.Header6 color='inherit'>요청일자: 2024. 10. 21</Typography.Header6>
              <Typography.Header6 color='inherit'>특허명 : 방송용 카메라를 탑재한 드론.</Typography.Header6>
            </>
          ),
        },
      ];
    case SERVICE_CATEGORY.CUSTOM_PATENT:
      return [
        {
          title: (
            <>
              <Typography.Header4 color={COLORS.MAIN_GREEN} as='span'>
                드론을 활용한 녹조제거 및 개선시스템
              </Typography.Header4>
              특허는
            </>
          ),
          description:
            '드론을 활용하여 녹조의 위치, 분포 등을 파악하고, 녹조제거선의 효율적 이동경로를 제공하며, 녹조 분포가 심한 지역에 드론으로 화학약품을 살포하여 수질개선 조치를 하는 시스템에 대한 발명입니다.',
        },
        {
          title: '특허 검토 요청한 특허에요.',
          description: (
            <>
              <Typography.Header6 color='inherit'>요청일자: 2024. 10. 21</Typography.Header6>
              <Typography.Header6 color='inherit'>특허명 : 드론을 활용한 녹조제거 및 개선시스템.</Typography.Header6>
            </>
          ),
        },
      ];
    case SERVICE_CATEGORY.FUTURE_TECH:
      return [
        {
          title: '인공지능을 활용한 안내서비스를 제공하는 로봇장치',
          description:
            '객체인식, 음성인식의 인공지능과 센서기술 등을 활용, 자율주행기술과 연계한 인공지능 기반 스마트 안내서비스를 수행하는 자율주행 로봇에 관한 발명이다',
        },
      ];
  }
};
