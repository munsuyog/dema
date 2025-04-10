import React from 'react'
import './StrikeText.css'
import AnimatedSVG from '../../AnimatedSvg/AnimatedSvg'

const StrikeText = ({style}) => {
  return (
    <AnimatedSVG
    xmlns="http://www.w3.org/2000/svg"
    className="strike-squiggle inactive"
    width="219"
    height="65"
    viewBox="0 0 219 65"
    fill="none"
    style={style}
  >
    <path
        time={"3s"}
        delay="2s"
        style={{ "--L": 600.50000000000006, "--time": "3s", "--delay": "2s" }}
        className="tracePath delayed"
      d="M6 50.7321C6 50.7321 40.8833 13.8462 47.0167 8.2559C61.022 -4.50946 46.7636 40.5636 48.55 51.8499C50.0833 61.5371 76.5333 19.4331 86.8833 10.1187C97.2333 0.8042 84.5833 34.711 86.8833 49.2389C90.4132 71.5356 100.683 18.6898 127.9 8.2559C142.021 2.8424 134.204 41.6272 137.1 57.8107C138.633 66.3804 164.317 26.1415 181.183 16.824C195.62 8.84897 177.559 32.9878 174.283 50.7293C171.6 65.263 213 19.8076 213 19.8076"
      stroke="#3830C9"
      stroke-width="11"
      stroke-linecap="round"
    />
  </AnimatedSVG>
  )
}

export default StrikeText