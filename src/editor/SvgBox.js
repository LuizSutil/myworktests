import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import { useContext, useState } from "react";
import { CanvasContext } from "./ContainerAeD";
import "./SvgBox.css";
import { SvgReturner } from "../utils/SvgReturner";
import { Rnd } from "react-rnd";
import { ReactSvgInjector, Mutate } from "react-svg-injector";

import PowerButton from '../assets/buttons/power-button.svg'
import CloseIcon from '../assets/modalitems/close.png'
import DocIcon from '../assets/modalitems/doc.png'
import GearIcon from '../assets/modalitems/gear.png'
import HomeIcon from '../assets/modalitems/home.png'
import LockIcon from '../assets/modalitems/lock.png'

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
        <div className='modalMenu' >
          <div className='menuItem'>
            <img className='menuImg' alt='home' src={HomeIcon}></img>
           </div>
          <div className='menuItem'>
            <img className='menuImg' alt='doc'  src={DocIcon}></img>
           </div  >
          <div className='menuItem'>
            <img className='menuImg' alt='gear' src={GearIcon}></img>
           </div>
          <div className='menuItem'>
            <img className='menuImg' alt='lock' src={LockIcon}></img>
           </div>
          <div className='menuItem' onClick={()=>setPopup(false)}>
            <img className='menuImg' alt='close' src={CloseIcon}></img>
           </div>
         </div>

         <text style={{color:'teal', fontWeight:'bold'}}>{title}, id:{id}</text>
        <div className='svgRow'>
          <button className='modalSvg'>
            {SvgReturner(title, state)}
           </button>
          <div style={{backgroundColor:'grey', 
          borderRadius:60 ,height:70, marginTop:45}} 
          onClick={() => turnOn(id, !state)} className='svgButton'>

            <ReactSvgInjector src={PowerButton}/>

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
