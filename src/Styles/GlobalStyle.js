import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    body {
      background-color : ${props => props.theme.bgColor}
    }
    a {
      text-decoration : none;
      color : rgba(255,255,255,0.8);
    }
    
    a:focus {
      color : #8565fc;
    }
    
    
    /* div :not(.markdown__container){
      color : red;
    } */
`;
