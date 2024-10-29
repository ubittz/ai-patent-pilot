import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
