import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

export const SvgCatItem = ({ children }) => {
  //draggable component in canvas
  const [{ opacity }, drag] = useDrag(() => ({
    type: ItemTypes.SVG,

    collect: (monitor) => ({
      //changes opacity when being dragged
      opacity: monitor.isDragging() ? 0.1 : 1,
    }),
  }));
  return (
    //returns the svg, drag ref to make it draggable component
    <div ref={drag} style={{ marginTop: "20px" }}>
      {children}
    </div>
  );
};
