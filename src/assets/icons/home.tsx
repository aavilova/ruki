import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.28 3.716a1 1 0 0 0-.56 0c-.052.015-.145.053-.341.202-.207.157-.46.38-.854.731l-5.24 4.657c-.642.571-.824.744-.95.934a2 2 0 0 0-.27.598c-.057.221-.065.472-.065 1.331v5.001c0 .871 0 1.463.039 1.92.037.446.104.673.186.832a2 2 0 0 0 .853.853c.159.082.386.15.831.186C6.367 21 6.96 21 7.83 21H8v-3a4 4 0 0 1 8 0v3h.17c.871 0 1.463 0 1.92-.039.446-.037.673-.104.832-.186a2 2 0 0 0 .853-.853c.082-.159.15-.386.186-.832.038-.457.039-1.049.039-1.92v-5.001c0-.86-.008-1.11-.066-1.331a2 2 0 0 0-.268-.598c-.127-.19-.31-.363-.951-.934l-5.24-4.657c-.394-.35-.647-.574-.854-.73-.197-.15-.289-.188-.341-.203Zm-1.119-1.92a3 3 0 0 1 1.678 0c.38.11.695.305.99.528.276.21.588.487.947.806l5.267 4.682.084.074c.522.463.916.813 1.204 1.247a4 4 0 0 1 .537 1.196c.133.503.132 1.03.132 1.728v5.155c0 .819 0 1.494-.046 2.044-.047.571-.149 1.096-.404 1.588a4 4 0 0 1-1.706 1.706c-.492.255-1.017.357-1.588.404-.55.046-1.226.046-2.044.046h-.431c-.12 0-.265 0-.393-.01a1.505 1.505 0 0 1-.58-.159 1.5 1.5 0 0 1-.64-.64 1.51 1.51 0 0 1-.158-.58c-.01-.127-.01-.271-.01-.393V18a2 2 0 0 0-4 0v3.218c0 .122 0 .266-.01.394-.013.147-.044.359-.159.58a1.5 1.5 0 0 1-.64.64c-.22.114-.432.145-.58.157C8.485 23 8.34 23 8.219 23h-.43c-.819 0-1.494 0-2.044-.046-.571-.047-1.096-.149-1.588-.404a4 4 0 0 1-1.706-1.706c-.255-.492-.357-1.017-.404-1.588C2 18.706 2 18.03 2 17.212v-5.155c0-.698 0-1.225.132-1.728a4 4 0 0 1 .537-1.196c.288-.434.682-.784 1.204-1.247.027-.024.055-.05.084-.074L9.224 3.13c.359-.32.67-.597.948-.806.294-.223.609-.418.99-.528Z"
      fill="#0F1729"
    />
  </Svg>
)

export default HomeIcon