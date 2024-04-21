// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 100 100'
    style={{
      opacity: 1
    }}
    {...props}
  >
     <g>
      <text font-weight="bold" font-style="italic" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="80" id="svg_1" y="77.5" x="10" stroke-width="5" stroke="#000" fill="#000000">T</text>
      <text font-style="italic" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_2" y="53.5" x="64" stroke-width="5" stroke="#000" fill="#000000">1</text>
    </g>
  </svg>
)

export default Logo
