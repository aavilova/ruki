import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 2.333H9.332A4.667 4.667 0 004.666 7v14a4.666 4.666 0 004.667 4.667h11.666a2.333 2.333 0 002.334-2.334V4.667a2.333 2.333 0 00-2.334-2.334zM7 7a2.333 2.333 0 012.333-2.333h11.666v11.666H9.333a4.56 4.56 0 00-2.334.654V7zm2.333 16.333a2.333 2.333 0 010-4.666h11.666v4.666H9.333zm2.333-14h4.667a1.167 1.167 0 000-2.333h-4.667a1.167 1.167 0 000 2.333z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent