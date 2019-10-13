// import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
    box-sizing: border-box;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    } */
    font-family: 'Noto Sans KR', sans-serif;
    body {
      background-color : ${props => props.theme.bgColor};
      margin : 0px;
    }
    a {
      text-decoration : none;
      color : rgba(255,255,255,0.8);
    }
    
  }
    a:focus {
      color : #8565fc;
    }
    
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #919191;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    /* div :not(.markdown__container){
      color : red;
    } */
`;
