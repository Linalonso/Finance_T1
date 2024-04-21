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
      <text fontWeight="bold" fontStyle="italic" textAnchor="start" fontSize="80" y="77.5" x="10" strokeWidth="5">T</text>
      <text fontStyle="italic" textAnchor="start" fontSize="24" y="53.5" x="64" strokeWidth="5">1</text>
    </g>
  </svg>
)

export default Logo
