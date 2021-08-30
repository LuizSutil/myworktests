import { useState, createContext } from "react";
import update from "immutability-helper";
import "./ContainerAeD.css";

import { SvgCanvas } from "./SvgCanvas";
import { SvgCatalogue } from "./SvgCatalogue";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Switch from "react-switch";


//provides functions and states down to components
export const CanvasContext = createContext({
  turnOn: null,
  toggleMenu: null,
  deleteItem: null,
  editMode: null,
  itemList: null,
});

export const ContainerAed = () => {
  //controls if right side menu is visible
  const [menuState, setMenuState] = useState(true);

  //controls right side menu drop down state
  const [optionsList, setOptionsList] = useState(["None"]);

  //set if edit mode is on
  const [editMode, setEditMode] = useState(false);

  //List of Svgs displayed in canvas
  const [itemList, setItemList] = useState({
    0: {
      title: "Fabric",
      controllingKey: "None",
      selected: false,
      exists: true,
    },
    1: {
      title: "PressureBlower",
      state: false,
      selected: false,
      exists: true,
    },
    2: {
      title: "PressureBlower",
      state: true,
      selected: false,
      exists: true,
    },
  });

  //coordinates of items in canvas
  const [items, setItems] = useState({
    0: { top: 180, left: 390 },
    1: { top: 100, left: 300 },
    2: { top: 280, left: 290 },

  });

  //Function that sets a target to a controller
  const changeControlTarget = (id, controllingKey) => {
    var _x = update(itemList, {
      [id]: {
        $merge: { controllingKey },
      },
    });
    setItemList(_x);
  };

  //Function that runs on the controller to change target state
  const turnOn = (id, state) => {
    if (!editMode) {
      if (id === "None") {
        alert("Nenhum Alvo Selecionado");
      } else {
        var _x = update(itemList, {
          [id]: {
            $merge: { state },
          },
        });
        setItemList(_x);
      }
    } else {
      return undefined;
    }
  };

  //returns new id to add item to canvas
  const newEntry = (object) => {
    let minValue = Infinity;

    let maxKey;
    let maxValue = -Infinity;

    for (const key in object) {
      if (key < minValue) {
        minValue = key;
      }

      if (key > maxValue) {
        maxKey = key;
        maxValue = key;
      }
    }
    if (maxKey) {
      return parseInt(maxKey) + 1;
    } else {
      return 1;
    }
  };

  //Deletes item from canvas
  const deleteItem = (id) => {
    var _x = update(itemList, {
      [id]: {
        $merge: { exists: false },
      },
    });
    setItemList(_x);
    const _y = items;
    delete _y[id];
    setItems(_y);

    var _currArr = optionsList;
    var _newArr = _currArr.filter((item) => item !== id.toString());
    setOptionsList(_newArr);
  };

  //Function to move box and update in the position state
  const moveBox = (id, left, top) => {
    setItems(
      update(items, {
        [id]: {
          $merge: { left, top },
        },
      })
    );
  };

  //Adds a new item to the canvas
  const addItem = (top, left, icon) => {
    const _entry = newEntry(itemList);
    const _x = itemList;
    _x[_entry] = {
      title: icon,
      state: false,
      selected: false,
      exists: true,
    };
    setItemList(_x);
    const _z = items;
    _z[_entry] = { top: top, left: left };
    setItems(_z);
    if (icon === "PressureBlower") {
      var _newarr = optionsList;
      _newarr.push(_entry.toString());
      setOptionsList(_newarr);
    }
  };

  //Connects the dropdown item selector to the control-target function
  const _onSelect = (e) => {
    changeControlTarget(0, e);
  };

  //sets selected item with id as true or false
  const selecionar = (id, selected) => {
    var _x = update(itemList, {
      [id]: {
        $merge: { selected },
      },
    });
    setItemList(_x);
  };

  //toggles between main menu and item menu
  const toggleMenu = (id) => {
    if (!itemList[id].selected && menuState) {
      selecionar(id, true);
      setMenuState(false);
    } else if (itemList[id].selected && !menuState) {
      selecionar(id, false);
      setMenuState(true);
    } else {
      console.log("failure");
    }
  };

  return (
    //provides function to turn on items || currently PressureBlower
    <CanvasContext.Provider
      value={{ turnOn, toggleMenu, deleteItem, editMode, itemList }}
    > 
      <div className="overlay">

        <div className="topbar">
          {/* <img src={WolferLogo} alt="logo" className="logo"></img> */}
          <div className='logoRadius'>
          <text style={{fontSize:'35px', fontWeight:'bolder', color:'teal'}}>Wolfer</text>
          </div>
        </div>
        <div className="toolbar">
          <div>Tools</div>
          {/* debugging buttons */}
          <button style={{width:'20px', height:'20px'}} onClick={() => turnOn(1,true)}></button>
          <button style={{width:'20px', height:'20px'}} onClick={() => turnOn(1,false)}></button>
          <button style={{width:'20px', height:'20px'}} onClick={() => turnOn(2,true)}></button>
          <button style={{width:'20px', height:'20px'}} onClick={() => turnOn(2,false)}></button>
          <button style={{width:'20px', height:'20px'}} onClick={() => console.log()}></button>
          <button style={{width:'20px', height:'20px'}} onClick={() => console.log("test")}></button>
          <div
            style={{
              marginLeft: 100,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Turns edit mode on/off */}
            <div style={{ marginRight: "5px" }}>edit</div>
            <Switch
              onColor={'#008080'}
              uncheckedIcon={false}
              checkedIcon={false}
              checked={editMode}
              onChange={() => setEditMode((old) => !old)}
            />
          </div>
        </div>
        <div className="row">

          {editMode ? (
            <div className="catalogue">
              <text style={{fontSize:'35px', fontWeight:'bolder', color:'teal'}}>Catalogo</text>
              {/* List of svgs available to put in canvas */}
              <SvgCatalogue></SvgCatalogue>
            </div>
          ) : null}

          <div className="canvasColumn">
            <text style={{color:'gainsboro' ,fontSize: 23, marginBottom: 5 }}>
              Factory Building Canvas {editMode === true ? "editor" : "viewer"}
            </text>
            <div>
              {/* Main Canvas */}

              <SvgCanvas
                edit={editMode}
                items={items}
                addSgv={(top, left, icon) => addItem(top, left, icon)}
                setItemsFun={(id, left, top) => moveBox(id, left, top)}
                itemList={itemList}
              />      

            </div>
          </div>
          {editMode ? (
            <div className="sidemenu">
              {menuState ? (
                // <img src={WolferLogo} alt="logo"></img>
                <text style={{fontSize:'35px', fontWeight:'bolder', color:'teal'}}>Menu</text>

              ) : (
                Object.keys(itemList).map((key) => {
                  if (itemList[key].selected) {
                    return (
                      <>
                        <text  style={{fontSize:'35px', fontWeight:'bold', color:'teal'}}>Menu</text>
                        <text style={{ marginTop: 20, fontWeight: "bold" }}>
                          {itemList[key].title}
                        </text>
                        <text style={{ marginTop: 20, fontWeight: "bold" }}>
                          {`id: ${key}`}
                        </text>
                        {itemList[key].controllingKey ? (
                          <text
                            style={{ marginTop: "20px", marginBottom: "10px" }}
                          >
                            Control Selector
                          </text>
                        ) : null}
                        {itemList[key].controllingKey ? (
                          <Dropdown
                            options={optionsList}
                            onChange={(e) => _onSelect(e.value)}
                            value={itemList[key].controllingKey}
                            placeholder="Select an option"
                          />
                        ) : null}
                      </>
                    );
                  } else {
                    return null;
                  }
                })
              )}
            </div>
          ) : null}
        </div>
      </div>
    </CanvasContext.Provider>
  );
};
