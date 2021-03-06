import React from 'react';

export default function PressureTest(props) {
  return (
    <svg id="Pressure_Blower" width= {props.width?props.width : "245px" } height={props.height? props.height : "300px"} enableBackground="new 0 0 245 300" version="1.1" viewBox="0 0 245 300" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter id="filter2640" x={0} y={0} width={1} height={1} colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
        <filter id="filter2656" x={0} y={0} width={1} height={1} colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
        <filter id="filter2672" x="-.0080904" y="-.0079149" width="1.0159" height="1.0159" colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
        <filter id="filter2688" x="-.0038705" y="-.003875" width="1.0077" height="1.0077" colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
        <filter id="filter2704" x="-.0016447" y="-.0014911" width="1.0039" height="1.003" colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
        <filter id="filter2720" x="-.0018142" y="-.0048638" width="1.0036" height="1.0097" colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
        <filter id="filter2736" x="-.0025528" y="-.055147" width="1.0051" height="1.1103" colorInterpolationFilters="sRGB">
          <feComposite in2="SourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="SourceGraphic" k2={1} operator="in" result="fbSourceGraphic" />
          <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0" />
          <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" k2={1} operator="arithmetic" result="composite1" />
          <feColorMatrix in="composite1" result="colormatrix1" type="saturate" values={1} />
          <feFlood floodColor={props.colorparam} floodOpacity=".8" result="flood1" />
          <feBlend in="flood1" in2="colormatrix1" mode="multiply" result="blend1" />
          <feBlend in2="blend1" mode="screen" result="blend2" />
          <feColorMatrix in="blend2" result="colormatrix2" type="saturate" values={1} />
          <feComposite in="colormatrix2" in2="fbSourceGraphic" k2={1} operator="in" result="composite2" />
        </filter>
      </defs>
      <g id="Connecting_Flange_1_" filter="url(#filter2736)">
        <linearGradient id="Shape_2_" x1="234.91" x2="9.8611" y1="-21.768" y2="72.396" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <rect id="Shape_1_" x="95.7" y="2.4" width="146.9" height="6.8" fill="url(#Shape_2_)" stroke="#8C8C91" strokeMiterlimit={10} strokeWidth=".75" />
      </g>
      <g id="Base_1_" filter="url(#filter2720)" stroke="#8C8C91" strokeMiterlimit={10} strokeWidth=".75">
        <linearGradient id="Body_3_" x1="-38.439" x2="238.23" y1="228.71" y2="279.38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#7C7C7B" offset={1} />
        </linearGradient>
        <rect id="Body_2_" x="43.5" y="220.5" width="141.4" height="72.3" fill="url(#Body_3_)" />
        <linearGradient id="Supporting_Foot_Left_2_" x1="23.086" x2="71.21" y1="273.48" y2="324.85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#7C7C7B" offset={1} />
        </linearGradient>
        <rect id="Supporting_Foot_Left_1_" x="10.8" y="292.8" width="65.3" height="4.8" fill="url(#Supporting_Foot_Left_2_)" />
        <linearGradient id="Supporting_Foot_Right_2_" x1="195.69" x2="176.82" y1="265.41" y2="317.29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#7C7C7B" offset={1} />
        </linearGradient>
        <rect id="Supporting_Foot_Right_1_" x="152.2" y="292.8" width="65.3" height="4.8" fill="url(#Supporting_Foot_Right_2_)" />
      </g>
      <g id="Housing_1_" filter="url(#filter2704)">
        <linearGradient id="Body_4_" x1="64.288" x2="205.73" y1="49.654" y2="191.09" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#F8F8F9" offset=".1248" />
          <stop stopColor="#E6E6E7" offset=".3002" />
          <stop stopColor="#C8C8C9" offset=".5056" />
          <stop stopColor="#9E9FA0" offset=".7339" />
          <stop stopColor="#696A6C" offset=".9782" />
          <stop stopColor="#646567" offset={1} />
        </linearGradient>
        <path id="Body_1_" d="M224.5,150V30l6.6-20.8   H107.2l6.6,20.8v9.3C52.7,39.3,3.1,88.8,3.1,150c0,61.1,49.6,110.7,110.7,110.7C175,260.7,224.5,211.1,224.5,150z" fill="url(#Body_4_)" stroke="#8C8C91" strokeMiterlimit={10} strokeWidth=".75" />
        <linearGradient id="Plate_2_" x1="-43.758" x2="305.69" y1="149.98" y2="149.98" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#7C7C7B" offset={1} />
        </linearGradient>
        <circle id="Plate_1_" cx="113.8" cy={150} r="104.4" fill="url(#Plate_2_)" />
        <polygon id="Shadow_5_" points="227.8 18.2 230.6 9.5 117 9.5" fill="#9A9A99" />
      </g>
      <g id="Air_Intake_1_" filter="url(#filter2688)" strokeMiterlimit={10}>
        <linearGradient id="Strut_Left_2_" x1="72.641" x2="49.794" y1="191.32" y2="214.17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9A9A99" offset={0} />
          <stop stopColor="#919190" offset=".2954" />
          <stop stopColor="#797978" offset=".7771" />
          <stop stopColor="#6B6B6A" offset={1} />
        </linearGradient>
        <polygon id="Strut_Left_1_" points="78.8 183.5 80.5 185.2 69.5 196.2 67.7 194.5" fill="url(#Strut_Left_2_)" stroke="#646567" strokeWidth=".75" />
        <linearGradient id="Strut_Down_2_" x1="113.9" x2="113.9" y1="230.66" y2="184.14" gradientTransform="matrix(.7071 -.7071 .7071 .7071 -72.949 124.82)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9A9A99" offset={0} />
          <stop stopColor="#919190" offset=".2954" />
          <stop stopColor="#797978" offset=".7771" />
          <stop stopColor="#6B6B6A" offset={1} />
        </linearGradient>
        <polygon id="Strut_Down_1_" points="146.8 185.2 148.5 183.5 159.9 194.9 158.2 196.6" fill="url(#Strut_Down_2_)" stroke="#646567" strokeWidth=".75" />
        <linearGradient id="Strut_Right_2_" x1="188.09" x2="147.82" y1="149.97" y2="149.97" gradientTransform="matrix(.7071 -.7071 .7071 .7071 -72.949 124.82)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9A9A99" offset={0} />
          <stop stopColor="#919190" offset=".2954" />
          <stop stopColor="#797978" offset=".7771" />
          <stop stopColor="#6B6B6A" offset={1} />
        </linearGradient>
        <polygon id="Strut_Right_1_" points="148.5 117.2 146.8 115.5 158.2 104 159.9 105.8" fill="url(#Strut_Right_2_)" stroke="#646567" strokeWidth=".75" />
        <rect id="Strut_Top_1_" transform="matrix(.7071 -.7071 .7071 .7071 -56.65 84.874)" x="72.9" y={103} width="2.4" height="15.6" fill="#CFCFCE" stroke="#8C8C91" strokeWidth=".75" />
        <circle id="Blower_Wheel_Compartment_1_" cx="113.7" cy="150.3" r="34.4" fill="#575756" stroke="#646567" />
        <linearGradient id="Flange_2_" x1="61.082" x2="184.88" y1="150.3" y2="150.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <path id="Flange_1_" d="m79.7 116.3c-18.8 18.8-18.8 49.2 0 68s49.2 18.8 68 0 18.8-49.2 0-68-49.3-18.8-68 0zm58.3 58.3c-13.4 13.4-35.2 13.4-48.6 0s-13.4-35.2 0-48.6 35.2-13.4 48.6 0 13.4 35.2 0 48.6z" fill="url(#Flange_2_)" stroke="#646567" strokeWidth=".75" />
      </g>
      <g id="Motor_Fan" filter="url(#filter2672)" stroke="#8C8C91" strokeMiterlimit={10} strokeWidth=".75">
        <linearGradient id="Paddel_Wheel_8_2_" x1="117.04" x2="117.04" y1="102.55" y2="127.27" gradientTransform="matrix(.9242 -.3818 .3818 .9242 -46.542 68.248)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_8_1_" points="115.3 149.4 112.4 150.6 100.1 120.6 102.9 119.5" fill="url(#Paddel_Wheel_8_2_)" />
        <linearGradient id="Paddel_Wheel_7_2_" x1="35.084" x2="35.084" y1="113.92" y2="138.64" gradientTransform="matrix(.4003 -.9164 .9164 .4003 -35.992 122.86)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_7_1_" points="114.5 148.6 113.3 151.5 83.5 138.5 84.8 135.6" fill="url(#Paddel_Wheel_7_2_)" />
        <linearGradient id="Paddel_Wheel_6_2_" x1="-125.47" x2="-125.47" y1="148.45" y2="173.17" gradientTransform="matrix(-.3818 -.9242 .9242 -.3818 -102.92 103.85)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_6_1_" points="113.3 148.6 114.5 151.5 84.5 163.8 83.3 161" fill="url(#Paddel_Wheel_6_2_)" />
        <linearGradient id="Paddel_Wheel_5_2_" x1="-137.72" x2="-137.72" y1="66.403" y2="91.118" gradientTransform="matrix(-.9164 -.4003 .4003 -.9164 -52.639 187.18)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_5_1_" points="112.5 149.4 115.3 150.7 102.3 180.4 99.5 179.1" fill="url(#Paddel_Wheel_5_2_)" />
        <linearGradient id="Paddel_Wheel_4_2_" x1="-171.36" x2="-171.36" y1="-42.885" y2="-18.169" gradientTransform="matrix(-.9242 .3818 -.3818 -.9242 -47.774 207.52)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_4_1_" points="112.4 150.6 115.3 149.4 127.7 179.4 124.8 180.6" fill="url(#Paddel_Wheel_4_2_)" />
        <linearGradient id="Paddel_Wheel_3_2_" x1="-90.198" x2="-90.198" y1="-55.233" y2="-30.518" gradientTransform="matrix(-.4003 .9164 -.9164 -.4003 58.58 224.31)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_3_1_" points="113.3 151.5 114.5 148.6 144.2 161.6 143 164.4" fill="url(#Paddel_Wheel_3_2_)" />
        <linearGradient id="Paddel_Wheel_2_2_" x1="71.146" x2="71.146" y1="-88.785" y2="-64.068" gradientTransform="matrix(.3818 .9242 -.9242 .3818 36.354 105.08)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_2_1_" points="114.5 151.5 113.3 148.6 143.3 136.2 144.4 139.1" fill="url(#Paddel_Wheel_2_2_)" />
        <linearGradient id="Paddel_Wheel_1_2_" x1="82.608" x2="82.608" y1="-7.7129" y2="17.003" gradientTransform="matrix(.9164 .4003 -.4003 .9164 48.815 92.61)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5A5A5" offset={0} />
          <stop stopColor="#B5B5B5" offset=".047581" />
          <stop stopColor="#D3D3D3" offset=".1509" />
          <stop stopColor="#E5E5E5" offset=".2395" />
          <stop stopColor="#ECECEC" offset=".3025" />
          <stop stopColor="#E8E8E8" offset=".4074" />
          <stop stopColor="#DCDCDC" offset=".514" />
          <stop stopColor="#C7C7C7" offset=".6214" />
          <stop stopColor="#ABABAB" offset=".7294" />
          <stop stopColor="#868686" offset=".8378" />
          <stop stopColor="#5A5A5A" offset=".9452" />
          <stop stopColor="#404040" offset={1} />
        </linearGradient>
        <polygon id="Paddel_Wheel_1_1_" points="115.3 150.7 112.5 149.4 125.4 119.7 128.3 120.9" fill="url(#Paddel_Wheel_1_2_)" />
        <linearGradient id="Suspension_2_" x1="102.94" x2="120.12" y1="122.75" y2="139.93" gradientTransform="matrix(.9242 -.3818 .3818 .9242 -46.542 68.248)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#7C7C7B" offset={1} />
        </linearGradient>
        <circle id="Suspension_1_" cx="113.9" cy={150} r="8.8" fill="url(#Suspension_2_)" />
      </g>
      <path id="Motor_Fan_Cover" d="m113.8 116.1h-0.9v2.2h-4.6v-1.8c-0.6 0.1-1.1 0.2-1.6 0.3v1.5h-4.6v-0.2c-1.4 0.5-2.8 1.1-4.2 1.9h2.5v4.6h-4.4v-3.4c-0.6 0.3-1.1 0.7-1.6 1.1v2.3h-2.9c-1.2 1-2.2 2.1-3.2 3.3v2.9h-2.3c-0.4 0.5-0.7 1.1-1.1 1.6h3.4v4.6h-4.6v-2.4c-0.7 1.3-1.3 2.7-1.8 4.1h0.1v4.6h-1.4c-0.1 0.5-0.2 1.1-0.3 1.6h1.7v4.6h-2.1v0.7 0.9h2.1v4.6h-1.7c0.1 0.6 0.2 1.1 0.3 1.6h1.4v4.6h-0.1c0.5 1.3 1.1 2.6 1.7 3.9v-2.3h4.6v4.6h-3.3c0.3 0.6 0.7 1.1 1.1 1.6h2.2v2.8c0.5 0.6 1.1 1.2 1.6 1.8v-4.5h4.6v4.6h-4.5c0.6 0.6 1.2 1.1 1.8 1.6h2.8v2.2c0.5 0.4 1.1 0.7 1.6 1.1v-3.2h4.6v4.6h-2.2c1.2 0.6 2.5 1.2 3.9 1.7v-0.1h4.6v1.4c0.5 0.1 1.1 0.2 1.6 0.3v-1.7h4.6v2.1h0.9 0.8v-2.1h4.5v1.7c0.6-0.1 1.1-0.2 1.6-0.3v-1.4h4.6v0.1c1.4-0.5 2.7-1.1 3.9-1.7h-2.5v-4.6h4.6v3.3c0.6-0.3 1.1-0.7 1.6-1.1v-2.2h2.8c1.2-1 2.3-2.2 3.4-3.3v-2.9h2.2c0.4-0.5 0.7-1.1 1.1-1.6h-3.3v-4.6h4.6v2.4c0.7-1.3 1.3-2.7 1.8-4h-0.2v-4.6h1.5c0.1-0.5 0.2-1.1 0.3-1.6h-1.8v-4.6h2.2v-0.9-0.7h-2.2v-4.6h1.8c-0.1-0.6-0.2-1.1-0.3-1.6h-1.5v-4.6h0.2c-0.5-1.5-1.1-2.9-1.9-4.2v2.6h-4.6v-4.6h3.4c-0.3-0.6-0.7-1.1-1.1-1.6h-2.4v-3c-1-1.1-2-2.2-3.2-3.2h-3v-2.4c-0.5-0.4-1.1-0.7-1.6-1.1v3.4h-4.4v-4.8h2.6c-1.4-0.7-2.8-1.4-4.2-1.9v0.2h-4.6v-1.5c-0.5-0.1-1.1-0.2-1.6-0.3v1.8h-4.5v-2.2h-0.9zm-25.6 45.6h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm6.2 24.8h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm6.1 43.4h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm0-6.2h-4.5v-4.6h4.6v4.6zm6.2 49.6h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.5h4.6v4.5zm6.2 55.8h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.6h4.6v4.6zm0-6.2h-4.6v-4.5h4.6v4.5zm26.4 14h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm-6.1-30.9h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.1h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm-6.2-43.3h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.1h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm-6.2-49.5h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.1h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm0 6.2h4.6v4.6h-4.6v-4.6zm-1.7 4.6h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-6.2h-4.5v-4.6h4.5v4.6zm0-10.7v4.6h-4.5v-4.6h4.5z" fill="#424242" filter="url(#filter2656)" />
      <path id="Screws_1_" d="m112.3 53.3-1.5-2.6 1.5-2.6h3l1.5 2.6-1.5 2.6h-3zm3 198.6 1.5-2.6-1.5-2.6h-3l-1.5 2.6 1.5 2.6h3zm-33.2-193.3 0.5-3-2.3-1.9-2.8 1-0.5 3 2.3 1.9 2.8-1zm67.9 186.6 0.5-3-2.3-1.9-2.8 1-0.5 3 2.3 1.9 2.8-1zm-97.2-170.2-0.5-3-2.8-1-2.3 1.9 0.5 3 2.8 1 2.3-1.9zm127.6 152.1-0.5-3-2.8-1-2.3 1.9 0.5 3 2.8 1 2.3-1.9zm-149.6-126.7-1.5-2.6h-3l-1.5 2.6 1.5 2.6h3l1.5-2.6zm172 99.2-1.5-2.6h-3l-1.5 2.6 1.5 2.6h3l1.5-2.6zm-184-67.9-2.3-1.9-2.8 1-0.5 3 2.3 1.9 2.8-1 0.5-3zm195.6 34.5-2.3-1.9-2.8 1-0.5 3 2.3 1.9 2.8-1 0.5-3zm-196.1-0.9-2.8-1-2.3 1.9 0.5 3 2.8 1 2.3-1.9-0.5-3zm195.5-34.5-2.8-1-2.3 1.9 0.5 3 2.8 1 2.3-1.9-0.5-3zm-184.5 66.2h-3l-1.5 2.6 1.5 2.6h3l1.5-2.6-1.5-2.6zm171.9-99.3h-3l-1.5 2.6 1.5 2.6h3l1.5-2.6-1.5-2.6zm-150.7 125.4-2.8 1-0.5 3 2.3 1.9 2.8-1 0.5-3-2.3-1.9zm127.6-152.1-2.8 1-0.5 3 2.3 1.9 2.8-1 0.5-3-2.3-1.9zm-98.8 169.3-2.3 1.9 0.5 3 2.8 1 2.3-1.9-0.5-3-2.8-1zm67.9-186.6-2.3 1.9 0.5 3 2.8 1 2.3-1.9-0.5-3-2.8-1z" fill="#646567" filter="url(#filter2640)" />
    </svg>
  );
}
