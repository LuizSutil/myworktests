import { SvgCatItem } from "./SvgCatItem";
import "./SvgCatalogue.css";

export const SvgCatalogue = () => {
  return (
    <div id="svgcat">
      <SvgCatItem title="PressureBlower" />
      <SvgCatItem title="RemoteControl" />
      <SvgCatItem title="ControlPanel" />
      <SvgCatItem title="Printer" />
      <SvgCatItem title="Assembly" />
      <SvgCatItem title="ConveyorBelt" />
      <SvgCatItem title="Lathe" />
      <SvgCatItem title="PackingMachine" />
      <SvgCatItem title="Saw" />
      <SvgCatItem title="Switch" />
    </div>
  );
};
