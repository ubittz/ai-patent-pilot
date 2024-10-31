import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { ServiceHistoryItem } from './types';

export const serviceInfoContentGenerator = ({ category, title }: ServiceHistoryItem) => {
  switch (category) {
    case '기술 레벨 측정':
      return [
        {
          key: '기술분야명',
          value: title,
        },
        {
          key: '등록번호',
          value: '등록번호입니다.',
        },
        {
          key: '아이디어',
          value: '아이디어명입니다.',
        },
        {
          key: '키워드',
          value: '#키워드 #키워드',
        },
      ];
    case '등록 특허 찾기':
    case '내가 원하는 특허':
      return [
        {
          key: '기술분야명',
          value: title,
        },
        {
          key: '핵심 키워드',
          value: '핵심 키워드 내용입니다.',
        },
        {
          key: '기술 내용',
          value: '기술 내용입니다. 기술 내용입니다.',
        },
      ];
    case '미래기술':
      return [
        {
          key: '상담 신청일',
          value: '2024. 12. 23',
        },
        {
          key: '미래 기술 특허명',
          value: '등록번호 입니다.',
        },
      ];
  }
  return [];
};

export const serviceDescriptionTitleGenerator = ({ category }: ServiceHistoryItem) => {
  switch (category) {
    case '기술 레벨 측정':
      return (
        <>
          김준수님의
          <br />
          특허/아이디어는
          <br />
          <Typography.Header2 as='span' color={COLORS.MAIN_GREEN}>
            5단계 중에 3단계
          </Typography.Header2>{' '}
          입니다.
        </>
      );
    case '등록 특허 찾기':
      return (
        <>
          김준수님게서
          <br />
          찾으시는 특허권의
          <br />
          정보입니다.
        </>
      );
    case '내가 원하는 특허':
      return (
        <>
          김준수님께
          <br />
          추천드리는 특허는
          <br />
          <Typography.Header2 as='span' color={COLORS.MAIN_GREEN}>
            ___
          </Typography.Header2>
          입니다.
        </>
      );
    case '미래기술':
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
    case '기술 레벨 측정':
      return [
        {
          title: '해당 레벨에 대한 설명이 들어갑니다.',
          description:
            '텍스해당 레벨에 대한 설명이 들어갑니다. 텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.텍스해당 레벨에 대한 설명이 들어갑니다.',
        },
      ];
    case '등록 특허 찾기':
      return [
        {
          title: '특허명1',
          description:
            '특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.',
        },
        {
          title: '특허명과 관련된 정보에요.',
          description:
            '특허명과 관련된 정보에요.특허명과 관련된 정보에요.특허명과 관련된 정보에요.특허명과 관련된 정보에요.특허명과 관련된 정보에요.특허명과 관련된 정보에요.특허명과 관련된 정보에요.',
        },
        {
          title: '기술거래 요청한 특허에요.',
          description: (
            <>
              <Typography.Header6 color='inherit'>요청일자: 2024. 10. 21</Typography.Header6>
              <Typography.Header6 color='inherit'>특허명 : 특허명입니다.</Typography.Header6>
            </>
          ),
        },
      ];
    case '내가 원하는 특허':
      return [
        {
          title: (
            <>
              <Typography.Header4 as='span'>_______</Typography.Header4>특허는
            </>
          ),
          description:
            '특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.특허명 1에 대한 설명입니다.',
        },
        {
          title: '기술거래 요청한 특허에요.',
          description: (
            <>
              <Typography.Header6 color='inherit'>요청일자: 2024. 10. 21</Typography.Header6>
              <Typography.Header6 color='inherit'>특허명 : 특허명입니다.</Typography.Header6>
            </>
          ),
        },
      ];
    case '미래기술':
      return [
        {
          title: '미래 기술에 대한 설명이 들어갑니다.',
          description:
            '미래 기술에 대한 설명이 들어갑니다. 미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.미래 기술에 대한 설명이 들어갑니다.',
        },
      ];
  }

  return [];
};
