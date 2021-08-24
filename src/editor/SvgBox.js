import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import PressureFunk from "./PressureFunk";
import RemoteControl from "../svgs/RemoteControl";
import { useContext, useState } from "react";
import { CanvasContext } from "./ContainerAeD";
import "./SvgBox.css";
import { SvgReturner } from "../utils/SvgReturner";

export const SvgBox = ({
  id,
  left,
  top,
  title,
  state,
  controllingKey,
  selected,
  edit,
}) => {
  const style = {
    position: "absolute",
    cursor: edit ? "move" : "default",
    border: selected && edit ? "1px solid black" : null,
  };

  const [itemMenu, setItemMenu] = useState(false);

  const { turnOn, toggleMenu, deleteItem, editMode, itemList } =
    useContext(CanvasContext);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.SVGBOX,
      canDrag: editMode ? true : false,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, editMode]
  );
  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div
      ref={drag}
      style={{ ...style, left, top }}
      onMouseOver={() => {
        setItemMenu(true);
      }}
      role="Svgbox"
      onMouseLeave={() => {
        setItemMenu(false);
      }}
    >
      {/* {children} */}
      {itemMenu && edit ? (
        <div onClick={() => toggleMenu(id)} className="icon">
          ✎
        </div>
      ) : null}

      {title == "PressureBlower" ? (
        <PressureFunk height={100} width={100} onoff={state} />
      ) : title == "RemoteControl" ? (
        <RemoteControl
          height={100}
          width={100}
          fuu={() => turnOn(false, controllingKey)}
          faa={() => turnOn(true, controllingKey)}
          // turnOn(true, controllingKey)
        />
      ) : (
        SvgReturner(title)
      )}
      {itemMenu && edit ? (
        <div onClick={() => deleteItem(id)} className="icon">
          x
        </div>
      ) : null}
    </div>
  );
};
