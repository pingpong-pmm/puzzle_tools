import { useResizeDetector } from "react-resize-detector";

// @ts-ignore
function Thermometer({ board }) {
  let temp = board.boardData

  return (
    <div>

      <svg height={535.99} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.15 647.51">
        <g id="circle">
          <path style={{ strokeWidth: '3px', fill: 'none', stroke: '#231f20', strokeMiterlimit: '10' }} d="M381,276.28a21,21,0,1,0-42,0v537h42Z"
            transform="translate(-310.42 -253.64)" />

          <rect style={{ fill: '#ed1c24' }} x="32.2" y={22.17 + (535.99 - 535.99 * temp / 100)} width="34.74" height={535.99 * temp / 100} />
          {/* <rect style={{ fill: '#ed1c24' }} x="32.2" y={22.17 + 108 * 5 - temp * 6} width="34.74" height={535.99 - 108 * 5 + temp * 6} /> */}

          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="22.17" x2="28.59" y2="22.17" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="33.1" x2="28.59" y2="33.1" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="44.04" x2="28.59" y2="44.04" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="54.98" x2="28.59" y2="54.98" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="65.92" x2="28.59" y2="65.92" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="76.86" x2="28.59" y2="76.86" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="87.8" x2="28.59" y2="87.8" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="98.74" x2="28.59" y2="98.74" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="109.67" x2="28.59" y2="109.67" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="120.61" x2="28.59" y2="120.61" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="131.55" x2="28.59" y2="131.55" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="142.49" x2="28.59" y2="142.49" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="153.43" x2="28.59" y2="153.43" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="164.37" x2="28.59" y2="164.37" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="175.31" x2="28.59" y2="175.31" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="186.24" x2="28.59" y2="186.24" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="197.18" x2="28.59" y2="197.18" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="208.12" x2="28.59" y2="208.12" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="219.06" x2="28.59" y2="219.06" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="230" x2="28.59" y2="230" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="240.94" x2="28.59" y2="240.94" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="251.88" x2="28.59" y2="251.88" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="262.81" x2="28.59" y2="262.81" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="273.75" x2="28.59" y2="273.75" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="284.69" x2="28.59" y2="284.69" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="295.63" x2="28.59" y2="295.63" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="306.57" x2="28.59" y2="306.57" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="317.51" x2="28.59" y2="317.51" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="328.45" x2="28.59" y2="328.45" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="339.38" x2="28.59" y2="339.38" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="350.32" x2="28.59" y2="350.32" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="361.26" x2="28.59" y2="361.26" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="372.2" x2="28.59" y2="372.2" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="383.14" x2="28.59" y2="383.14" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="394.08" x2="28.59" y2="394.08" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="405.02" x2="28.59" y2="405.02" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="415.95" x2="28.59" y2="415.95" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="426.89" x2="28.59" y2="426.89" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="437.83" x2="28.59" y2="437.83" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="448.77" x2="28.59" y2="448.77" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="459.71" x2="28.59" y2="459.71" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="470.65" x2="28.59" y2="470.65" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="481.59" x2="28.59" y2="481.59" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="492.52" x2="28.59" y2="492.52" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="503.46" x2="28.59" y2="503.46" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="514.4" x2="28.59" y2="514.4" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="525.34" x2="28.59" y2="525.34" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="536.28" x2="28.59" y2="536.28" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="547.22" x2="28.59" y2="547.22" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="558.16" x2="28.59" y2="558.16" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="27.64" x2="28.59" y2="27.64" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="38.57" x2="28.59" y2="38.57" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="49.51" x2="28.59" y2="49.51" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="60.45" x2="28.59" y2="60.45" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="71.39" x2="28.59" y2="71.39" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="82.33" x2="28.59" y2="82.33" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="93.27" x2="28.59" y2="93.27" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="104.21" x2="28.59" y2="104.21" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="115.14" x2="28.59" y2="115.14" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="126.08" x2="28.59" y2="126.08" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="137.02" x2="28.59" y2="137.02" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="147.96" x2="28.59" y2="147.96" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="158.9" x2="28.59" y2="158.9" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="169.84" x2="28.59" y2="169.84" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="180.78" x2="28.59" y2="180.78" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="191.71" x2="28.59" y2="191.71" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="202.65" x2="28.59" y2="202.65" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="213.59" x2="28.59" y2="213.59" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="224.53" x2="28.59" y2="224.53" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="235.47" x2="28.59" y2="235.47" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="246.41" x2="28.59" y2="246.41" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="257.35" x2="28.59" y2="257.35" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="268.28" x2="28.59" y2="268.28" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="279.22" x2="28.59" y2="279.22" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="290.16" x2="28.59" y2="290.16" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="301.1" x2="28.59" y2="301.1" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="312.04" x2="28.59" y2="312.04" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="322.98" x2="28.59" y2="322.98" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="333.92" x2="28.59" y2="333.92" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="344.85" x2="28.59" y2="344.85" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="355.79" x2="28.59" y2="355.79" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="366.73" x2="28.59" y2="366.73" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="377.67" x2="28.59" y2="377.67" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="388.61" x2="28.59" y2="388.61" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="399.55" x2="28.59" y2="399.55" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="410.49" x2="28.59" y2="410.49" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="421.42" x2="28.59" y2="421.42" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="432.36" x2="28.59" y2="432.36" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="443.3" x2="28.59" y2="443.3" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="454.24" x2="28.59" y2="454.24" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="465.18" x2="28.59" y2="465.18" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="476.12" x2="28.59" y2="476.12" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="487.05" x2="28.59" y2="487.05" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="497.99" x2="28.59" y2="497.99" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="508.93" x2="28.59" y2="508.93" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="519.87" x2="28.59" y2="519.87" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="530.81" x2="28.59" y2="530.81" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="541.75" x2="28.59" y2="541.75" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="552.69" x2="28.59" y2="552.69" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="22.17" x2="70.56" y2="22.17" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="33.1" x2="70.56" y2="33.1" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="44.04" x2="70.56" y2="44.04" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="54.98" x2="70.56" y2="54.98" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="65.92" x2="70.56" y2="65.92" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="76.86" x2="70.56" y2="76.86" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="87.8" x2="70.56" y2="87.8" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="98.74" x2="70.56" y2="98.74" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="109.67" x2="70.56" y2="109.67" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="120.61" x2="70.56" y2="120.61" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="131.55" x2="70.56" y2="131.55" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="142.49" x2="70.56" y2="142.49" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="153.43" x2="70.56" y2="153.43" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="164.37" x2="70.56" y2="164.37" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="175.31" x2="70.56" y2="175.31" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="186.24" x2="70.56" y2="186.24" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="197.18" x2="70.56" y2="197.18" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="208.12" x2="70.56" y2="208.12" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="219.06" x2="70.56" y2="219.06" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="230" x2="70.56" y2="230" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="240.94" x2="70.56" y2="240.94" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="251.88" x2="70.56" y2="251.88" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="262.81" x2="70.56" y2="262.81" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="273.75" x2="70.56" y2="273.75" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="284.69" x2="70.56" y2="284.69" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="295.63" x2="70.56" y2="295.63" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="306.57" x2="70.56" y2="306.57" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="317.51" x2="70.56" y2="317.51" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="328.45" x2="70.56" y2="328.45" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="339.38" x2="70.56" y2="339.38" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="350.32" x2="70.56" y2="350.32" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="361.26" x2="70.56" y2="361.26" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="372.2" x2="70.56" y2="372.2" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="383.14" x2="70.56" y2="383.14" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="394.08" x2="70.56" y2="394.08" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="405.02" x2="70.56" y2="405.02" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="415.95" x2="70.56" y2="415.95" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="426.89" x2="70.56" y2="426.89" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="437.83" x2="70.56" y2="437.83" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="448.77" x2="70.56" y2="448.77" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="459.71" x2="70.56" y2="459.71" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="470.65" x2="70.56" y2="470.65" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="481.59" x2="70.56" y2="481.59" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="492.52" x2="70.56" y2="492.52" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="503.46" x2="70.56" y2="503.46" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="514.4" x2="70.56" y2="514.4" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="525.34" x2="70.56" y2="525.34" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="536.28" x2="70.56" y2="536.28" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="547.22" x2="70.56" y2="547.22" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="558.16" x2="70.56" y2="558.16" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="27.64" x2="70.56" y2="27.64" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="38.57" x2="70.56" y2="38.57" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="49.51" x2="70.56" y2="49.51" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="60.45" x2="70.56" y2="60.45" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="71.39" x2="70.56" y2="71.39" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="82.33" x2="70.56" y2="82.33" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="93.27" x2="70.56" y2="93.27" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="104.21" x2="70.56" y2="104.21" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="115.14" x2="70.56" y2="115.14" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="126.08" x2="70.56" y2="126.08" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="137.02" x2="70.56" y2="137.02" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="147.96" x2="70.56" y2="147.96" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="158.9" x2="70.56" y2="158.9" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="169.84" x2="70.56" y2="169.84" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="180.78" x2="70.56" y2="180.78" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="191.71" x2="70.56" y2="191.71" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="202.65" x2="70.56" y2="202.65" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="213.59" x2="70.56" y2="213.59" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="224.53" x2="70.56" y2="224.53" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="235.47" x2="70.56" y2="235.47" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="246.41" x2="70.56" y2="246.41" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="257.35" x2="70.56" y2="257.35" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="268.28" x2="70.56" y2="268.28" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="279.22" x2="70.56" y2="279.22" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="290.16" x2="70.56" y2="290.16" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="301.1" x2="70.56" y2="301.1" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="312.04" x2="70.56" y2="312.04" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="322.98" x2="70.56" y2="322.98" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="333.92" x2="70.56" y2="333.92" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="344.85" x2="70.56" y2="344.85" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="355.79" x2="70.56" y2="355.79" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="366.73" x2="70.56" y2="366.73" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="377.67" x2="70.56" y2="377.67" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="388.61" x2="70.56" y2="388.61" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="399.55" x2="70.56" y2="399.55" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="410.49" x2="70.56" y2="410.49" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="421.42" x2="70.56" y2="421.42" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="432.36" x2="70.56" y2="432.36" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="443.3" x2="70.56" y2="443.3" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="454.24" x2="70.56" y2="454.24" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="465.18" x2="70.56" y2="465.18" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="476.12" x2="70.56" y2="476.12" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="487.05" x2="70.56" y2="487.05" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="497.99" x2="70.56" y2="497.99" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="508.93" x2="70.56" y2="508.93" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="519.87" x2="70.56" y2="519.87" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="530.81" x2="70.56" y2="530.81" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="541.75" x2="70.56" y2="541.75" />
          <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="552.69" x2="70.56" y2="552.69" />

          <circle style={{ fill: '#231f20', stroke: '#231f20', strokeMiterlimit: '10' }} cx="49.58" cy="600.77" r="46.24" />
        </g>
      </svg>

      <div className="relative hidden">
        <div className="flex items-start justify-center">
          <div className='grid gap-0.5 pt-3 w-4 justify-items-end'>
            {/* 10 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 20 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 30 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 40 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 50 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 60 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 70 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 80 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 90 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            {/* 100 */}
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />

          </div>

          <div className="h-48 w-4 grid items-center rotate-180 overflow-hidden rounded-full ring-black ring-1 bg-gray-300">
            <div className='h-full pb-3 pt-10'>
              <div className="h-full bg-black"
              // style={{ "height": `${+item.temp}%` }}
              >
              </div>
            </div>
          </div>

          <div className='grid gap-0.5 pt-3'>
            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />

            <div className='p-[0.5px] w-4 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-2 bg-black' />
            <div className='p-[0.5px] w-4 bg-black' />

          </div>
        </div>

        {/* The bottom circle */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="h-[50px] ring-2 ring-black w-[50px] rounded-full bg-black"></div>
        </div>
      </div>

    </div>
  );
}

export function ThermoSVG(props: any) {

  // let temp = 10
  let temp = props.temp

  return (
    <div className="w-full mx-auto flex justify-center">
      <svg className="h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.15 647.51">
        <g id="circle">
          <path style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: "10", strokeWidth: "3px" }} d="M381,276.28a21,21,0,1,0-42,0v537h42Z"
            transform="translate(-310.42 -253.64)" />

          <rect style={{ fill: "#231f20" }} x="32.2" y={22.17 + (535.99 - 535.99 * temp / 100)} width="34.74" height={535.99 * temp / 100} />
          {/* <rect style={{ fill: "#ed1c24" }} x="32.2" y="22.17" width="34.74" height="535.99" /> */}

          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="22.17" x2="28.59" y2="22.17" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="43.61" x2="28.59" y2="43.61" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="32.89" x2="28.59" y2="32.89" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="54.33" x2="28.59" y2="54.33" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="65.05" x2="28.59" y2="65.05" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="75.77" x2="28.59" y2="75.77" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="86.49" x2="28.59" y2="86.49" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="97.2" x2="28.59" y2="97.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="107.92" x2="28.59" y2="107.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="118.64" x2="28.59" y2="118.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="129.36" x2="28.59" y2="129.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="140.08" x2="28.59" y2="140.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="150.8" x2="28.59" y2="150.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="161.52" x2="28.59" y2="161.52" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="172.24" x2="28.59" y2="172.24" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="182.96" x2="28.59" y2="182.96" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="193.68" x2="28.59" y2="193.68" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="204.4" x2="28.59" y2="204.4" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="215.12" x2="28.59" y2="215.12" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="225.84" x2="28.59" y2="225.84" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="236.56" x2="28.59" y2="236.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="247.28" x2="28.59" y2="247.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="258" x2="28.59" y2="258" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="268.72" x2="28.59" y2="268.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="279.44" x2="28.59" y2="279.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="290.16" x2="28.59" y2="290.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="300.88" x2="28.59" y2="300.88" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="311.6" x2="28.59" y2="311.6" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="322.32" x2="28.59" y2="322.32" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="333.04" x2="28.59" y2="333.04" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="343.76" x2="28.59" y2="343.76" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="354.48" x2="28.59" y2="354.48" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="365.2" x2="28.59" y2="365.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="375.92" x2="28.59" y2="375.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="386.64" x2="28.59" y2="386.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="397.36" x2="28.59" y2="397.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="408.08" x2="28.59" y2="408.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="418.8" x2="28.59" y2="418.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="429.52" x2="28.59" y2="429.52" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="440.24" x2="28.59" y2="440.24" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="450.96" x2="28.59" y2="450.96" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="461.68" x2="28.59" y2="461.68" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="472.4" x2="28.59" y2="472.4" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="483.12" x2="28.59" y2="483.12" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="493.84" x2="28.59" y2="493.84" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="504.56" x2="28.59" y2="504.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="515.28" x2="28.59" y2="515.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="526" x2="28.59" y2="526" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="536.72" x2="28.59" y2="536.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="547.44" x2="28.59" y2="547.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} y1="558.16" x2="28.59" y2="558.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="38.25" x2="28.59" y2="38.25" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="27.53" x2="28.59" y2="27.53" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="48.97" x2="28.59" y2="48.97" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="59.69" x2="28.59" y2="59.69" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="70.41" x2="28.59" y2="70.41" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="81.13" x2="28.59" y2="81.13" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="91.85" x2="28.59" y2="91.85" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="102.56" x2="28.59" y2="102.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="113.28" x2="28.59" y2="113.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="124" x2="28.59" y2="124" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="134.72" x2="28.59" y2="134.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="145.44" x2="28.59" y2="145.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="156.16" x2="28.59" y2="156.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="166.88" x2="28.59" y2="166.88" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="177.6" x2="28.59" y2="177.6" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="188.32" x2="28.59" y2="188.32" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="199.04" x2="28.59" y2="199.04" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="209.76" x2="28.59" y2="209.76" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="220.48" x2="28.59" y2="220.48" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="231.2" x2="28.59" y2="231.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="241.92" x2="28.59" y2="241.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="252.64" x2="28.59" y2="252.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="263.36" x2="28.59" y2="263.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="274.08" x2="28.59" y2="274.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="284.8" x2="28.59" y2="284.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="295.52" x2="28.59" y2="295.52" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="306.24" x2="28.59" y2="306.24" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="316.96" x2="28.59" y2="316.96" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="327.68" x2="28.59" y2="327.68" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="338.4" x2="28.59" y2="338.4" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="349.12" x2="28.59" y2="349.12" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="359.84" x2="28.59" y2="359.84" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="370.56" x2="28.59" y2="370.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="381.28" x2="28.59" y2="381.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="392" x2="28.59" y2="392" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="402.72" x2="28.59" y2="402.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="413.44" x2="28.59" y2="413.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="424.16" x2="28.59" y2="424.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="434.88" x2="28.59" y2="434.88" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="445.6" x2="28.59" y2="445.6" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="456.32" x2="28.59" y2="456.32" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="467.04" x2="28.59" y2="467.04" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="477.76" x2="28.59" y2="477.76" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="488.48" x2="28.59" y2="488.48" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="499.2" x2="28.59" y2="499.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="509.92" x2="28.59" y2="509.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="520.64" x2="28.59" y2="520.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="531.36" x2="28.59" y2="531.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="542.08" x2="28.59" y2="542.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="14.29" y1="552.8" x2="28.59" y2="552.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="22.17" x2="70.56" y2="22.17" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="43.61" x2="70.56" y2="43.61" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="32.89" x2="70.56" y2="32.89" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="54.33" x2="70.56" y2="54.33" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="65.05" x2="70.56" y2="65.05" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="75.77" x2="70.56" y2="75.77" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="86.49" x2="70.56" y2="86.49" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="97.2" x2="70.56" y2="97.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="107.92" x2="70.56" y2="107.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="118.64" x2="70.56" y2="118.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="129.36" x2="70.56" y2="129.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="140.08" x2="70.56" y2="140.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="150.8" x2="70.56" y2="150.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="161.52" x2="70.56" y2="161.52" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="172.24" x2="70.56" y2="172.24" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="182.96" x2="70.56" y2="182.96" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="193.68" x2="70.56" y2="193.68" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="204.4" x2="70.56" y2="204.4" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="215.12" x2="70.56" y2="215.12" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="225.84" x2="70.56" y2="225.84" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="236.56" x2="70.56" y2="236.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="247.28" x2="70.56" y2="247.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="258" x2="70.56" y2="258" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="268.72" x2="70.56" y2="268.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="279.44" x2="70.56" y2="279.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="290.16" x2="70.56" y2="290.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="300.88" x2="70.56" y2="300.88" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="311.6" x2="70.56" y2="311.6" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="322.32" x2="70.56" y2="322.32" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="333.04" x2="70.56" y2="333.04" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="343.76" x2="70.56" y2="343.76" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="354.48" x2="70.56" y2="354.48" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="365.2" x2="70.56" y2="365.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="375.92" x2="70.56" y2="375.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="386.64" x2="70.56" y2="386.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="397.36" x2="70.56" y2="397.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="408.08" x2="70.56" y2="408.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="418.8" x2="70.56" y2="418.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="429.52" x2="70.56" y2="429.52" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="440.24" x2="70.56" y2="440.24" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="450.96" x2="70.56" y2="450.96" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="461.68" x2="70.56" y2="461.68" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="472.4" x2="70.56" y2="472.4" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="483.12" x2="70.56" y2="483.12" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="493.84" x2="70.56" y2="493.84" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="504.56" x2="70.56" y2="504.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="515.28" x2="70.56" y2="515.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="526" x2="70.56" y2="526" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="536.72" x2="70.56" y2="536.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="547.44" x2="70.56" y2="547.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="99.15" y1="558.16" x2="70.56" y2="558.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="38.25" x2="70.56" y2="38.25" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="27.53" x2="70.56" y2="27.53" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="48.97" x2="70.56" y2="48.97" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="59.69" x2="70.56" y2="59.69" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="70.41" x2="70.56" y2="70.41" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="81.13" x2="70.56" y2="81.13" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="91.85" x2="70.56" y2="91.85" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="102.56" x2="70.56" y2="102.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="113.28" x2="70.56" y2="113.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="124" x2="70.56" y2="124" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="134.72" x2="70.56" y2="134.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="145.44" x2="70.56" y2="145.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="156.16" x2="70.56" y2="156.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="166.88" x2="70.56" y2="166.88" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="177.6" x2="70.56" y2="177.6" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="188.32" x2="70.56" y2="188.32" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="199.04" x2="70.56" y2="199.04" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="209.76" x2="70.56" y2="209.76" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="220.48" x2="70.56" y2="220.48" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="231.2" x2="70.56" y2="231.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="241.92" x2="70.56" y2="241.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="252.64" x2="70.56" y2="252.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="263.36" x2="70.56" y2="263.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="274.08" x2="70.56" y2="274.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="284.8" x2="70.56" y2="284.8" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="295.52" x2="70.56" y2="295.52" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="306.24" x2="70.56" y2="306.24" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="316.96" x2="70.56" y2="316.96" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="327.68" x2="70.56" y2="327.68" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="338.4" x2="70.56" y2="338.4" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="349.12" x2="70.56" y2="349.12" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="359.84" x2="70.56" y2="359.84" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="370.56" x2="70.56" y2="370.56" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="381.28" x2="70.56" y2="381.28" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="392" x2="70.56" y2="392" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="402.72" x2="70.56" y2="402.72" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="413.44" x2="70.56" y2="413.44" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="424.16" x2="70.56" y2="424.16" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="434.88" x2="70.56" y2="434.88" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="445.6" x2="70.56" y2="445.6" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="456.32" x2="70.56" y2="456.32" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="467.04" x2="70.56" y2="467.04" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="477.76" x2="70.56" y2="477.76" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="488.48" x2="70.56" y2="488.48" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="499.2" x2="70.56" y2="499.2" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="509.92" x2="70.56" y2="509.92" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="520.64" x2="70.56" y2="520.64" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="531.36" x2="70.56" y2="531.36" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="542.08" x2="70.56" y2="542.08" />
          <line style={{ fill: "none", stroke: "#231f20", strokeWidth: "0.5px", strokeMiterlimit: "10" }} x1="84.86" y1="552.8" x2="70.56" y2="552.8" />

          <circle style={{ stroke: "#231f20", fill: "#231f20", strokeMiterlimit: "10" }} cx="49.58" cy="600.77" r="46.24" />
        </g>
      </svg>
    </div>
  )
}

export default Thermometer;
