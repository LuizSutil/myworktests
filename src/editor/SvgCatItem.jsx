import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import { SvgReturner } from "../utils/SvgReturner";

export const SvgCatItem = ({ title }) => {

  const styles = { 
    display:'flex',
    marginTop: "20px", 
    backgroundColor: 'rgb(56, 55, 66)', 
    borderRadius:'10px',
    justifyContent:'center',
    alignItems:'center',
    width:110,
    height:110, 
  }
  //draggable component in canvas
  const [, drag] = useDrag(() => ({
    type: ItemTypes.SVG,
    item: { title },
    collect: (monitor) => ({
      //changes opacity when being dragged
      opacity: monitor.isDragging() ? 0.1 : 1,
    }),
  }));
  return (
    //returns the svg, drag ref to make it draggable component
    <div ref={drag} style={{...styles}}>
      {SvgReturner(title)}
    </div>
  );
};
