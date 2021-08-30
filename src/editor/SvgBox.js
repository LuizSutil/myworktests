import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import { useContext, useState } from "react";
import { CanvasContext } from "./ContainerAeD";
import "./SvgBox.css";
import { SvgReturner } from "../utils/SvgReturner";
import { Rnd } from "react-rnd";
import { ReactSvgInjector, Mutate } from "react-svg-injector";

import PowerButton from '../assets/buttons/power-button.svg'


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
    cursor: edit ? "move" : "pointer",
    border: selected && edit ? "1px solid black" : null,
  
  };

  const [itemMenu, setItemMenu] = useState(false);

  const { turnOn, toggleMenu, deleteItem, editMode, itemList } =
    useContext(CanvasContext);

  const [popup, setPopup] = useState(false)

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.SVGBOX,
      canDrag: editMode ? true : false,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [ id, left, top, editMode]
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
      onMouseLeave={() => {
        setItemMenu(false);
      }}
    > 

    {popup ? 
      <Rnd
        default={{
          x: 0,
          y: 0,
          minWidth:200,
          minHeight: 500,
          maxWidth: 200,
          maxHeight: 500,
          disableDragging:true
        }}
      >
       <div className='modal'>
        <div className='modalMenu' onClick={()=>setPopup(false)}>
           menu
         </div>
        <div className='svgRow'>
          <button className='modalSvg'>
            {SvgReturner(title, state)}
           </button>
          <div onClick={() => turnOn(id, !state)}>
            <ReactSvgInjector src={PowerButton} className='svgButton' >

            </ReactSvgInjector>
          </div>
         </div>
        <div className='modalRowPuts'>
          <div className='modalOutput'>
            output
           </div>
          <div className='modalInput'>
            input
           </div>
        </div>
        <div className='outputBig'>
            {state === true ? 'Ligado' : 'Desligado'}
         </div>
        <button className='secButton'>
          button2
          </button> 
       </div>
      </Rnd> :  null
      }
      {/* {children} */}
      {itemMenu && edit ? (
        <div onClick={() => toggleMenu(id)} className="icon">
          ✎
        </div>
      ) : null}

     <div onClick={edit ? {} : ()=>setPopup(true)}>
     {SvgReturner(title, state)}
     </div>
      {itemMenu && edit ? (
        <div onClick={() => deleteItem(id)} className="icon">
          x
        </div>
      ) : null}
    </div>
  );
};
