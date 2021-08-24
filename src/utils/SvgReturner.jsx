import PressureFunk from "../editor/PressureFunk";
import Assembly from "../svgs/AssemblyLine";
import RemoteControl from "../svgs/RemoteControl";
import ControlPanel from "../svgs/ControlPanel";
import Printer from "../svgs/3dPrinter";
import ConveyorBelt from "../svgs/ConveyorBelt";
import Lathe from "../svgs/Lathe";
import PackingMachine from "../svgs/PackingMachine";
import Saw from "../svgs/Saw";
import Switch from "../svgs/Switch";

export const SvgReturner = (title) => {
  switch (title) {
    case "PressureBlower":
      return <PressureFunk width={80} height={80} />;
    case "RemoteControl":
      return (
        <RemoteControl faa={() => {}} fuu={() => {}} width={80} height={80} />
      );
    case "ControlPanel":
      return <ControlPanel width={80} height={80} />;
    case "Printer":
      return <Printer width={80} height={80} />;
    case "Assembly":
      return <Assembly width={80} height={80} />;
    case "ConveyorBelt":
      return <ConveyorBelt width={80} height={80} />;
    case "Lathe":
      return <Lathe width={80} height={80} />;
    case "PackingMachine":
      return <PackingMachine width={80} height={80} />;
    case "Saw":
      return <Saw width={80} height={80} />;
    case "Switch":
      return <Switch width={80} height={80} />;
  }
};
