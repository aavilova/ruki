import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.829 14.828a7 7 0 10-8.657 0 11.667 11.667 0 00-7.257 9.544 1.174 1.174 0 002.334.256 9.333 9.333 0 0118.55 0 1.167 1.167 0 001.166 1.039h.129a1.166 1.166 0 001.026-1.284 11.666 11.666 0 00-7.291-9.555zM14.5 14a4.666 4.666 0 110-9.333 4.666 4.666 0 010 9.333z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
