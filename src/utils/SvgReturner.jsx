import PressureBlower from '../svgs/PressureBlowerFlooded.svg'
import Fabric from '../svgs/fabric.svg'

import { ReactSvgInjector, Mutate } from "react-svg-injector";
export const SvgReturner = (title, onoff) => {
  switch (title) {
    case "PressureBlower":
      return <ReactSvgInjector src={PressureBlower} className="App-logo">
            <Mutate selector="feFlood" flood-color={onoff === true ?  'blue'  : onoff === false  ? 'red' : 'grey'} />
          </ReactSvgInjector>
    case "Fabric":
      return <ReactSvgInjector src={Fabric} className="App-logo">
            <Mutate selector="feFlood" flood-color={onoff === true ?  'rgb(116, 89, 158)'  : onoff === false  ? 'rgb(42, 117, 110)' : 'grey'} />
          </ReactSvgInjector>
    default:
      return <ReactSvgInjector src={Fabric} className="App-logo">
      <Mutate selector="feFlood" flood-color="grey" />
    </ReactSvgInjector>
  }
};
