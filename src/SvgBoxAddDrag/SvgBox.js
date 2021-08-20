import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import PressureFunk from './PressureFunk';
import RemoteControl from '../svgs/RemoteControl'
import { useContext, useState } from 'react';
import { CanvasContext } from './ContainerAeD';
import './SvgBox.css'



export const SvgBox = ({id, left, top, title,state, controllingKey, selected}) => {

    const style = {
        position: 'absolute',
        cursor: 'move',
        border: selected ? '1px solid black' : null
    }


    const [itemMenu,setItemMenu] = useState(false)

    const {turnOn, toggleMenu,deleteItem} = useContext(CanvasContext)

    const [{isDragging}, drag] = useDrag(()=> ({
        type: ItemTypes.SVGBOX,
        item: {id, left, top},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }),[id, left,top]);
    if(isDragging){
        return <div ref={drag}/>
    }
    return (
        <div ref={drag} style={{...style, left, top}} 
        onMouseOver={()=>{setItemMenu(true)}} role="Svgbox"
        onMouseLeave={()=>{setItemMenu(false)}}
        >
            {/* {children} */}
            {itemMenu ? <div onClick={()=>toggleMenu(id)} className='icon'>✎</div> : null}
            
            {title == 'PressureBlower' 
            ? <PressureFunk height={100} width={100} OnOff={state}/> :
            <RemoteControl height={100} 
            width={100} fuu={()=>turnOn(false,controllingKey)} faa={()=>turnOn(true,controllingKey)}/>
            
        }
         {itemMenu ? <div onClick={()=>deleteItem(id)} className='icon'>x</div> : null}


        </div>
    )
}