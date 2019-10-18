import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const LogoSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.g`
  stroke-width: 1;
  stroke: ${Theme.lightGreyColor};
`;

const DoorHandle = styled.ellipse`
  stroke-width: 0;
  fill: ${Theme.themeColor};
`;

const Floor = styled.path`
  stroke-width: 1;
`;

const ManSub = styled.path`
  stroke-width: 0;
  fill: ${Theme.darkGreyColor};
`;

const Door = styled.rect`
  stroke-width: 1;
`;

const Logo = () => (
  <LogoSVG
    xmlns="http://www.w3.org/2000/svg"
    width="95mm"
    height="95mm"
    version="1.1"
    viewBox="0 0 95 95"
  >
    <Wrapper
      stroke="#000"
      strokeDasharray="none"
      strokeMiterlimit="4"
      strokeOpacity="1"
      transform="translate(0 -202)"
    >
      <Floor
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="0.1"
        d="M35.08 229.06L1.7 262.037l55.92 32.285 34.471-34.873"
      ></Floor>
      <Door
        width="24.702"
        height="46.68"
        x="22.079"
        y="214.458"
        fill="#fff"
        fillOpacity="1"
        strokeWidth="0.108"
        ry="0.352"
        transform="skewY(30.17) scale(.86453 1)"
      ></Door>
      <g
        fill="none"
        fillOpacity="1"
        strokeLinejoin="miter"
        strokeWidth="0.116"
        ariaLabel="MS"
        fontFamily="Yu Gothic UI"
        style={{ lineHeight: "1.25" }}
        fontSize="40"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
        letterSpacing="0"
        paintOrder="normal"
        wordSpacing="0"
      >
        <ManSub
          d="M177.227 257.835h-3.262v-18.79q0-2.226.273-5.448h-.078q-.469 1.894-.84 2.714l-9.57 21.524h-1.602l-9.55-21.367q-.41-.938-.84-2.871h-.078q.156 1.68.156 5.488v18.75h-3.164v-28.008h4.336l8.594 19.531q.996 2.246 1.289 3.36h.117q.84-2.305 1.347-3.438l8.77-19.453h4.102zM183.3 256.702v-3.867q.665.586 1.583 1.055.937.468 1.953.8 1.035.313 2.07.489 1.035.175 1.914.175 3.028 0 4.512-1.113 1.504-1.133 1.504-3.242 0-1.133-.508-1.973-.488-.84-1.367-1.523-.879-.703-2.09-1.328-1.191-.645-2.578-1.348-1.465-.742-2.734-1.504-1.27-.762-2.207-1.68-.938-.918-1.485-2.07-.527-1.172-.527-2.734 0-1.914.84-3.32.84-1.426 2.207-2.344 1.367-.918 3.105-1.367 1.758-.45 3.574-.45 4.141 0 6.036.996v3.692q-2.48-1.719-6.368-1.719-1.074 0-2.148.234-1.074.215-1.914.723-.84.508-1.367 1.309-.528.8-.528 1.953 0 1.074.391 1.855.41.782 1.191 1.426.782.645 1.895 1.25 1.133.606 2.598 1.328 1.503.742 2.851 1.563 1.348.82 2.363 1.816 1.016.996 1.602 2.207.605 1.211.605 2.774 0 2.07-.82 3.515-.8 1.426-2.187 2.324-1.368.899-3.164 1.29-1.797.41-3.79.41-.664 0-1.64-.118-.977-.097-1.992-.312-1.016-.195-1.934-.488-.898-.313-1.445-.684z"
          transform="matrix(1.14509 .65138 0 .90495 -134.976 -101.37)"
        ></ManSub>
      </g>
      <DoorHandle
        cx="22.73"
        cy="242.394"
        fill="#fff"
        fillOpacity="1"
        strokeWidth="0.074"
        rx="0.681"
        ry="0.71"
        transform="skewY(16.826) scale(.95719 1)"
      ></DoorHandle>
    </Wrapper>
  </LogoSVG>
);

export default Logo;
