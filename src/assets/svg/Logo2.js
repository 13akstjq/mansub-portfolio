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

const ManLab = styled.path`
  stroke-width: 0;
  fill: ${Theme.darkGreyColor};
`;

const Door = styled.rect`
  stroke-width: 1;
`;
function Icon() {
  return (
    <LogoSVG
      xmlns="http://www.w3.org/2000/svg"
      width="94mm"
      height="94mm"
      version="1.1"
      viewBox="0 0 94 94"
    >
      <Wrapper
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeOpacity="1"
        transform="translate(0 -203)"
      >
        <Floor
          fill="none"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.1"
          d="M34.155 223.703L.777 256.68l55.918 32.285 34.472-34.873"
        ></Floor>
        <Door
          width="15.356"
          height="29.02"
          x="24.364"
          y="227.069"
          fill="#fff"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.067"
          ry="0.219"
          transform="skewY(30.17) scale(.86453 1)"
        ></Door>
        <ManLab
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinejoin="miter"
          strokeWidth="0.038"
          d="M42.88 228.37l-1.302-.697.011-8.018-2.732 3.999-.776-.416-2.697-6.902-.012 8.018-1.217-.651.013-9.305 1.777.95 2.605 6.578 2.534-3.829 1.81.968zM52.578 233.558l-1.388-.742-.957-3.107-4.238-2.267-.965 2.08-1.323-.707 3.58-7.397 1.738.929zm-2.745-5.127l-1.712-5.487-1.73 3.646zM61.012 237.823l-1.612-.863-4.635-10.809-.011 8.324-1.217-.65.013-9.306 2.02 1.08 4.227 9.867.01-7.6 1.218.651zM75.395 245.757l-6.2-3.316.014-9.305 1.303.696-.011 8.205 4.896 2.619zM84.924 250.856l-1.389-.742-.957-3.108-4.238-2.266-.964 2.08-1.323-.708 3.58-7.397 1.737.93zm-2.746-5.127l-1.71-5.487-1.731 3.646zM93.305 252.476q0 .694-.278 1.077-.277.383-.745.477-.553.117-1.218-.064-.659-.177-1.678-.722l-3.475-1.86.013-9.304 2.902 1.552q1.073.573 1.606.934.533.36 1.02.858.538.557.781 1.112.243.55.242 1.137 0 .662-.357.94-.356.273-.948.237v.05q.993.726 1.565 1.67.571.937.57 1.905zm-2.185-5.365q0-.338-.118-.632-.118-.295-.381-.58-.31-.334-.75-.607-.441-.28-1.092-.628l-1.554-.831-.004 2.687 1.685.901q.612.328.974.465.362.131.672.109.31-.022.435-.249.132-.23.132-.636zm.83 4.69q0-.563-.177-.989-.177-.426-.644-.907-.316-.325-.77-.612-.447-.29-1.092-.634l-2.047-1.095-.005 3.462 1.724.923q.856.457 1.402.668.546.205.896.166.368-.046.54-.267.172-.221.172-.715z"
          fontFamily="sans-serif"
          fontSize="40"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          paintOrder="normal"
          style={{ lineHeight: "1.25" }}
          wordSpacing="0"
        ></ManLab>
        <flowRoot
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinejoin="miter"
          strokeWidth="0.116"
          fontFamily="sans-serif"
          fontSize="40"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          paintOrder="normal"
          transform="matrix(.26458 0 0 .26458 1.588 0)"
          style={{ lineHeight: "1.25" }}
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <flowRegion>
            <path d="M107.857 365.377H274.286V431.80600000000004H107.857z"></path>
          </flowRegion>
          <flowPara></flowPara>
        </flowRoot>
        <flowRoot
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinejoin="miter"
          strokeWidth="0.116"
          fontFamily="sans-serif"
          fontSize="40"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          paintOrder="normal"
          transform="matrix(.26458 0 0 .26458 1.588 0)"
          style={{ lineHeight: "1.25" }}
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <flowRegion>
            <path d="M116.429 341.091H497.85799999999995V481.805H116.429z"></path>
          </flowRegion>
          <flowPara></flowPara>
        </flowRoot>
        <DoorHandle
          cx="24.035"
          cy="248.471"
          fill="#fff"
          fillOpacity="1"
          stroke="#000"
          strokeWidth="0.074"
          rx="0.681"
          ry="0.71"
          transform="skewY(16.826) scale(.95719 1)"
        ></DoorHandle>
      </Wrapper>
    </LogoSVG>
  );
}

export default Icon;
