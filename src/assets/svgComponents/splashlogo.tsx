import * as React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const SplashLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={75} cy={75} r={75} fill="#fff" />
    <Path
      fill="url(#a)"
      d="M85.799 27.852h5.376c1.784 0 2.678 2.15 1.416 3.409L73.543 50.254a2.006 2.006 0 0 1-1.417.585H58.031c-1.785 0-2.678-2.151-1.417-3.41l19.049-18.992a2.006 2.006 0 0 1 1.416-.585h8.72Z"
    />
    <Path
      fill="url(#b)"
      d="M56.62 55.318c-1.262-1.258-.369-3.41 1.416-3.41H72.13c.532 0 1.041.21 1.417.585l19.048 18.993c1.262 1.258.368 3.41-1.416 3.41H77.084c-.531 0-1.04-.21-1.416-.585L56.619 55.318Z"
    />
    <Path
      fill="url(#c)"
      d="M107.679 76.011h5.481c1.784 0 2.678 2.152 1.416 3.41L95.527 98.414a2.006 2.006 0 0 1-1.416.585H80.016c-1.785 0-2.679-2.151-1.417-3.41l19.048-18.993a2.006 2.006 0 0 1 1.417-.585h8.615Z"
    />
    <Path
      fill="url(#d)"
      d="M78.604 55.271c-1.262-1.258-.368-3.41 1.416-3.41h14.096c.531 0 1.04.211 1.416.586l19.049 18.993c1.261 1.258.368 3.41-1.417 3.41H99.069c-.532 0-1.041-.211-1.417-.586L78.604 55.271Z"
    />
    <Path
      fill="url(#e)"
      d="M62.604 51.908h5.376c1.784 0 2.678 2.151 1.416 3.41L50.348 74.31a2.006 2.006 0 0 1-1.417.585H34.836c-1.785 0-2.678-2.151-1.417-3.41l19.049-18.993a2.006 2.006 0 0 1 1.416-.585h8.72Z"
    />
    <Path
      fill="url(#f)"
      d="M33.424 79.374c-1.262-1.258-.368-3.409 1.416-3.409h14.096c.532 0 1.04.21 1.417.585L69.4 95.543c1.262 1.258.368 3.41-1.416 3.41H53.889c-.531 0-1.04-.211-1.416-.586L33.424 79.374Z"
    />
    <Path
      fill="url(#g)"
      d="M84.344 100.161h5.48c1.785 0 2.678 2.151 1.417 3.409l-19.049 18.993a2.004 2.004 0 0 1-1.416.585H56.68c-1.784 0-2.678-2.151-1.416-3.409l19.048-18.993a2.004 2.004 0 0 1 1.417-.585h8.615Z"
    />
    <Path
      fill="url(#h)"
      d="M55.269 79.42c-1.262-1.257-.368-3.409 1.416-3.409H70.78c.531 0 1.04.21 1.416.585L91.246 95.59c1.261 1.259.368 3.41-1.417 3.41H75.734c-.532 0-1.041-.21-1.417-.585L55.27 79.42Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={91.07}
        x2={58.231}
        y1={22.926}
        y2={55.861}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FE9D0C" />
        <Stop offset={1} stopColor="#6E4100" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={58.14}
        x2={90.979}
        y1={46.983}
        y2={79.917}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FE9D0C" />
        <Stop offset={1} stopColor="#6E4100" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={113.055}
        x2={80.216}
        y1={71.086}
        y2={104.02}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#120B00" />
        <Stop offset={1} stopColor="#6E6E6E" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={80.125}
        x2={112.964}
        y1={46.936}
        y2={79.871}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#120B00" />
        <Stop offset={1} stopColor="#6E6E6E" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={67.875}
        x2={35.036}
        y1={46.983}
        y2={79.917}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={34.945}
        x2={67.784}
        y1={71.039}
        y2={103.974}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={89.72}
        x2={56.881}
        y1={95.235}
        y2={128.17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#A8A8A8" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={56.79}
        x2={89.629}
        y1={71.086}
        y2={104.02}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#A8A8A8" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SplashLogo;
