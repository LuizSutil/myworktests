import {useState} from 'react';

export default function RemoteControl(props) {

  const [redMouse, setRedMouse] = useState(false)
  const [yellowMouse, setYellowMouse] = useState(false)

  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 436.879 436.879" style={{enableBackground: 'new 0 0 436.879 436.879'}} xmlSpace="preserve" width= {props.width?props.width : "245px" } height={props.height? props.height : "300px"} {...props}>
      <g>
        <path style={{fill: '#808080'}} d="M306.394,436.879H160.613c-7.765,0-14.059-6.295-14.059-14.059V148.377
        		c0-7.765,6.295-14.059,14.059-14.059h145.781c7.765,0,14.059,6.295,14.059,14.059V422.82
        		C320.454,430.585,314.159,436.879,306.394,436.879z" />
        <path style={{fill: '#999999'}} d="M375.907,436.879H234.168c-8.881,0-16.081-7.2-16.081-16.081v-270.4
        		c0-8.881,7.2-16.081,16.081-16.081h141.739c8.881,0,16.081,7.2,16.081,16.081v270.4
        		C391.987,429.68,384.788,436.879,375.907,436.879z" />
        <rect x="233.71" y="149.941" style={{fill: '#CCCCCC'}} width="142.654" height="271.316" />
        <g>
          <path style={{fill: '#D3674A'}} d="M299.955,171.754h18.621v82.563h-18.621c-22.799,0-41.281-18.482-41.281-41.281v0
          			C258.673,190.236,277.156,171.754,299.955,171.754z" />
          <circle onClick={()=>props.fuu()} onMouseOver={()=>setRedMouse(true)} onMouseLeave={()=>setRedMouse(false)} style={{fill: redMouse ? '#BC171A' : '#EF7954'}} cx="318.514" cy="213.035" r="41.281" />
        </g>
        <g>
          <path style={{fill: '#D8CB6C'}} d="M299.955,305.509h18.621v82.563h-18.621c-22.799,0-41.281-18.482-41.281-41.281v0
          			C258.673,323.991,277.156,305.509,299.955,305.509z" />
          <circle onClick={()=>props.faa()} onMouseOver={()=>setYellowMouse(true)} onMouseLeave={()=>setYellowMouse(false)} style={{fill: yellowMouse ? 'yellow'  : '#F9ED82'}} cx="318.514" cy="346.79" r="41.281" />
        </g>
        <rect x="367.083" y="149.941" style={{fill: '#B3B3B3'}} width="9.282" height="271.316" />
        <path style={{fill: '#99B5C4'}} d="M44.892,378v-26c21.505,0,39-17.495,39-39V99c0-54.589,44.411-99,99-99s99,44.411,99,99v6.618h-26
        		V99c0-40.252-32.748-73-73-73s-73,32.748-73,73v214C109.892,348.841,80.733,378,44.892,378z" />
        <rect x="192.892" y="105.7" style={{fill: '#808080'}} width={146} height="28.618" />
        <rect x="192.892" y="105.7" style={{fill: '#666666'}} width={66} height="28.618" />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
