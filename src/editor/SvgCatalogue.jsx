import PressureFunk from "./PressureFunk";
import RemoteControl from "../svgs/RemoteControl";
import ControlPanel from "../svgs/ControlPanel";
import Printer from "../svgs/3dPrinter";
import Assembly from "../svgs/AssemblyLine";
import ConveyorBelt from "../svgs/ConveyorBelt";
import Lathe from "../svgs/Lathe";
import PackingMachine from "../svgs/PackingMachine";
import Saw from "../svgs/Saw";
import Switch from "../svgs/Switch";
import { SvgCatItem } from "./SvgCatItem";
import "./SvgCatalogue.css";

export const SvgCatalogue = () => {
  return (
    <div id="svgcat">
      <SvgCatItem children={<PressureFunk width={80} height={80} />} />
      <SvgCatItem
        children={
          <RemoteControl faa={() => {}} fuu={() => {}} width={80} height={80} />
        }
      />
      <SvgCatItem children={<ControlPanel width={80} height={80} />} />
      <SvgCatItem children={<Printer width={80} height={80} />} />
      <SvgCatItem children={<Assembly width={80} height={80} />} />
      <SvgCatItem children={<ConveyorBelt width={80} height={80} />} />
      <SvgCatItem children={<Lathe width={80} height={80} />} />
      <SvgCatItem children={<PackingMachine width={80} height={80} />} />
      <SvgCatItem children={<Saw width={80} height={80} />} />
      <SvgCatItem children={<Switch width={80} height={80} />} />
    </div>
  );
};
