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
        d="M23.333 9.333l-7-6.136a3.5 3.5 0 00-4.666 0l-7 6.136A3.5 3.5 0 003.5 11.97v10.197a3.5 3.5 0 003.5 3.5h14a3.5 3.5 0 003.5-3.5V11.958a3.5 3.5 0 00-1.167-2.625zm-7 14h-4.666V17.5a1.166 1.166 0 011.166-1.167h2.334a1.167 1.167 0 011.166 1.167v5.833zm5.834-1.166A1.167 1.167 0 0121 23.333h-2.333V17.5a3.5 3.5 0 00-3.5-3.5h-2.334a3.5 3.5 0 00-3.5 3.5v5.833H7a1.167 1.167 0 01-1.167-1.166V11.958a1.167 1.167 0 01.397-.875l7-6.125a1.167 1.167 0 011.54 0l7 6.125a1.167 1.167 0 01.397.875v10.209z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
