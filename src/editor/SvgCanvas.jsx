import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import update from "immutability-helper";
import { SvgBox } from "./SvgBox";

const styles = {
  width: "55.3rem",
  height: "35rem",
  border: "2px solid teal",
  position: "relative",
  marginRight: "20px",
  marginLeft: "20px",
};

export const SvgCanvas = ({ items, setItemsFun, itemList, addSgv, edit }) => {
  // React dnd drop function
  const [{ isActive }, drop] = useDrop(
    () => ({
      //types of boxes the canvas accepts
      accept: [ItemTypes.SVGBOX, ItemTypes.SVG],
      drop(item, monitor) {
        const x = monitor.getItemType();

        //if item is already inside the canvas this will run
        if (x === "svgbox") {
          const delta = monitor.getDifferenceFromInitialOffset();
          const left = Math.round(item.left + delta.x);
          const top = Math.round(item.top + delta.y);
          setItemsFun(item.id, left, top);
          console.log(delta);
          return undefined;
        }
        //if item is coming from the Catalogue, this will run
        else if (x === "svg") {
          //gets position from drag
          const pos = monitor.getSourceClientOffset();
          //offset to match the canvas coordinates -> different from monitor coordinates
          const left = pos.x - 200;
          const top = pos.y - 150;
          //adds item to itemlist in main container itemlist state
          addSgv(top, left);
        } else {
          //this is for further implementation
          console.log("wtf you doin");
        }
      },
      collect: (monitor) => ({
        //this is a function to change color of canvas when dragging item from catalogue
        isActive:
          monitor.canDrop() &&
          monitor.isOver() &&
          monitor.getItemType() === "svg",
      }),
    }),
    [setItemsFun]
  );

  return (
    //ref drop to turn into draggable component, main canvas div
    <div
      ref={drop}
      style={{ ...styles, backgroundColor: isActive ? "grey" : "#D9DBDB" }}
    >
      {/* maps items from  itemlist and returns items inside canvas*/}
      {Object.keys(items).map((key) => {
        const { left, top } = items[key];
        const { title, state, controllingKey, selected, exists } =
          itemList[key];
        if (exists === true) {
          return (
            <SvgBox
              selected={selected}
              title={title}
              id={key}
              key={key}
              left={left}
              top={top}
              state={state}
              controllingKey={controllingKey}
              edit={edit}
            />
          );
        }
      })}
    </div>
  );
};
